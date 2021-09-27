import React from 'react';
import styles from "./modules/Card.module.css";
import {Link} from "react-router-dom";


export default function Card(props) {
  return (
    <div className={styles.weatherBoxContainer}>
    <div className= {styles.weatherBox}>
    <button onClick={props.onClose}>X</button>
    <Link 
    style={{ textDecoration: 'none'}}
    to={`/ciudad/${props.id}`} >
    <h1 className={styles.city}>
    {props.name}
    </h1>
    </Link>
    <img 
    src={`http://openweathermap.org/img/wn/${props.img}@2x.png`} 
    alt="Icono" 
    />
    <div className={styles.tempContainer}>
    <span className={styles.temp}>
    Min
    </span>
    <span className={styles.temp}>
    {props.min}°
    </span>
    </div>
    <div className={styles.tempContainer}>
    <span className={styles.temp}>
    Max
    </span>
    <span className={styles.temp}>
    {props.max}°
    </span>
    </div>
    </div>
  </div>
  )
};
