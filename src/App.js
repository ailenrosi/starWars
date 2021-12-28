import './App.css';
const axios = require('axios');



function App() {
 // Make a request for a user with a given ID
  axios.get('https://swapi.dev/api/planets/')
    .then(function (response) {
      // handle success
      let respuesta = response.data.results;
      console.log(respuesta)
      let respuestaTrabajada = respuesta.map(planetaViejo=> {
        let planetaNuevo = {
          nombre : planetaViejo.name,
          diametro : planetaViejo.diameter,
         clima : planetaViejo.climate,
         terreno: planetaViejo.terrain
 
        }
        return planetaNuevo;
      })
        console.log(respuestaTrabajada);
      })
      
    
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .then(function () {
      // always executed
    });

  return (
    <div className="App">
     Star Wars
    </div>
  );
}

export default App;
