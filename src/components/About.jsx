import React from "react"; 
import styles from './modules/About.module.css';

export default function About() {
    return (
        <div className={styles.aboutBoxContainer}>
        <div className={styles.aboutBox}>
            <h3>Welcome everyone! My name is Leonel Katsikaris and this is my weather app made with React JS, HTML and CSS.</h3>
        </div>
        </div>
    )
}