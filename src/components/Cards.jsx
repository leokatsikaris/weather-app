import React from 'react';
import Card from "./Card.jsx";
import styles from './modules/Cards.module.css';

export default function Cards({cities, onClose} ) {
  if (cities[0]){
  return (
  <div className={styles.cardsContainer}>
  <div className={styles.cards}>
    {cities.map((city) =>
      <Card
      key = {city.id} 
      id = {city.id}
      name = {city.name} 
      min = {city.min} 
      max = {city.max} 
      img={city.img}
      onClose={() => onClose(city.id)} />)}
      </div>
  </div>
  )
  } else {
    return (
    <div className={styles.noCities}>No cities added</div>
    )
  }
}