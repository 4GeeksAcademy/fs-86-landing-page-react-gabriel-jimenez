import React from "react";
import Reloj from "./reloj.jsx"
import Greeting from "./saludo.jsx";

const Card = ({text, autor, ciudad}) => {
   
    return(
    <div className="card">
      <div className="card-tittle">	
        <p>{text}</p>
        <h3>{autor}</h3>
      </div>
      <div className="card-body-one">
        <Greeting/>
        <Reloj/>
        <h2 className="card-place">{ciudad}</h2>
      </div>
    </div>
    );
} 
export default Card;