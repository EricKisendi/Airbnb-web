import React from "react";
import data from './data.js'
import Card from "./Card.js";
import './App.css';

export default function App() {
    const cardi = data.map(item =>{
        return(
            <Card 
                image={item.coverImage}
                name = {item.Name}
            />
        )        
    })
    return (  
        <section className = "Cards">
            {cardi}
        </section>      
    )
}