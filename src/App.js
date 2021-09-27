import React, { useState } from 'react';
import './App.css';
import Nav from "./components/Nav.jsx";
import Cards from "./components/Cards.jsx";
import styles from "./components/modules/App.module.css";
import { Route } from "react-router-dom";
import About from "./components/About";
import Ciudad from "./components/Ciudad";


export default function App() {
  const [cities, setCities] = useState([]);

  function onSearch(ciudad) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=5bb68976e3a596b8fcd7286589d12add&units=metric`)
      .then(r => r.json())
      .then((recurso) => {
        if(recurso.main !== undefined){
          const ciudad = {
            min: Math.round(recurso.main.temp_min),
            max: Math.round(recurso.main.temp_max),
            img: recurso.weather[0].icon,
            id: recurso.id,
            wind: recurso.wind.speed,
            temp: recurso.main.temp,
            name: recurso.name,
            weather: recurso.weather[0].main,
            clouds: recurso.clouds.all,
            latitud: recurso.coord.lat,
            longitud: recurso.coord.lon
          };
          setCities(oldCities => [...oldCities, ciudad]);
        } else {
          alert("City not found");
        }
      });
    }

    function onClose(idCity){
      setCities(oldCities => oldCities.filter(city => city.id !== idCity));
    }

    function onFilter(ciudadId) {
      let ciudad = cities.filter(c => c.id === parseInt(ciudadId));
      if(ciudad.length > 0) {
          return ciudad[0];
      } else {
          return null;
      }
    }

   return (
     <div className= {styles.App}>
       <div className={styles.navContainer}>
       <Nav onSearch={onSearch}/>
       </div>
       {/* <Route
        path='/'
        render={() => <Nav onSearch={onSearch} />}
        /> */}
    
        <Route
        path='/about'
        component={About}
        />
        
        <Route
        exact 
        path= "/"
        render = {() => <Cards cities={cities} onClose = {onClose}/>} />
       
        <Route
        exact
        path='/ciudad/:ciudadId'
        render={({match}) => <Ciudad
        city= {onFilter(match.params.ciudadId)}
          />}
        />

     </div>


   );
}

