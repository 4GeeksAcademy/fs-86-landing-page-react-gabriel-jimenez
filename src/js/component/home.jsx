import React, { useState, useEffect } from "react";
import Card from "./card.jsx";
import Button from "./Button.jsx";
import '/src/styles/index.css'
const cardProps = {text:'"El tiempo es el mejor de los maestros, pero desafortunadamente mata a sus alumnos."',
	               autor: '– Louis Hector Berlioz',
				   ciudad: 'IN IGUALADA, BAR'
}
const buttonProps = {country:'Europe/España',
	                  week: 48,
}
//create your first component
const Home = () => {
	const [background, setBackgroud] = useState('');
	 const getBackground = (hour) => {
		if(hour >= 6 && hour < 12) return 'morning';
		if(hour >= 12 && hour < 20) return 'afternoon';
		return 'night';
	 }
	 useEffect(() => {
		const upDateTime = () =>{
		const now = new Date();
		setBackgroud(getBackground(now.getHours()));
		}
		upDateTime();
		const interval = setInterval(upDateTime,1000);
      return () => clearInterval(interval);

	 }, []);
	return (<>
	 <div className={background}>
	   <Card
	   {... cardProps}
	   />
	   <Button
	   {...buttonProps}
	   />
	 </div>

		
    </>);
};
export default Home;


