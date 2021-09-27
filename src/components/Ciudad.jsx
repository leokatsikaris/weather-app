import React from "react";
import styles from './modules/Ciudad.module.css';

export default function Ciudad({city}) {
    if (!city) return alert("Esta ciudad no se encuentra en la lista");
    return (
        <div className={styles.weatherBoxContainer}>
        <div className={styles.weatherBox}>
                    <h2>{city.name}</h2>
                    <div className={styles.info}>
                        <div>Temp: {city.temp} ºC</div>
                        <div>Weather: {city.weather}</div>
                        <div>Wind: {city.wind} km/h</div>
                        <div>Clouds: {city.clouds}</div>
                        <div>Lat: {city.latitud}º</div>
                        <div>Long: {city.longitud}º</div>
            </div>
            </div>
        </div>
    )
}