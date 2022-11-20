import React from "react";
import './Card.css'

export default function Card(props){
    return(
        <div className="sec1">
            <img src={props.image} alt="img1"></img>
            <div className="desc1">
            <p><i className='bx bxs-star Star'></i>{props.name}</p>
            </div>
        </div>
    )
}