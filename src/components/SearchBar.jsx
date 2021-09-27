import React, { useState } from 'react';
import styles from '../components/modules/SearchBar.module.css';

export default function SearchBar({onSearch}) {
  // acá va tu código
  const [city, setCity] = useState("");
  return (
  <form 
    className={styles.search} 
    onSubmit={(e) => {
    e.preventDefault();
    onSearch(city);
    setCity("");
  }}>
    <input
    className={styles.cityInput}
    id = "ciudad"  
    type= "text" 
    placeholder="City..." 
    value = {city}
    onChange = {e => setCity(e.target.value)}/>
    <input
    className={styles.addButton}
    type="submit" 
    value="Add" /> 
      </form>
  );
};