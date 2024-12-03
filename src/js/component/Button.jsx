import React, { useState } from "react";
import DayOfYear from "./dayofyear.jsx";
import DayOfWeek from "./dayofweek.jsx"

const Button = ({country, week}) => {
  
  const [isOpen, setIsOpen] = useState(false);
  const toggleCollage = () => {
    setIsOpen(prevState => !prevState);  
  };

  return (
    <>
      <div className="boton">
        <button type="button" className="btn" onClick={toggleCollage}>
          {isOpen ? "Less" : "More!"}
        </button>
       
        {isOpen && (
          <div className="collage">
           <div className="column">
            <p>Current Timezone</p>
            <h3>{country}</h3>
            <DayOfYear/>
          </div>
          <div className="column">
            <DayOfWeek/>
            <p>Week Number</p>
            <h3>{week}</h3>
          </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Button;