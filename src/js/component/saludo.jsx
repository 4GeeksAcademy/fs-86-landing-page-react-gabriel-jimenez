import React, {useState, useEffect} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon, faCloudSun } from '@fortawesome/free-solid-svg-icons';


const Greeting = () => {
    const [greetin, setGreeting] = useState('');
    const getGreeting = (hour) => {
      if (hour >= 6 && hour < 12){
        return(<>
        <FontAwesomeIcon icon={faSun}/> ¡buenos dias!
        </>); 
      }

      if (hour >= 12 && hour < 20) {
        return(<>
        <FontAwesomeIcon icon={faCloudSun }/> ¡Buenas tardes!
        </>);
      }
      return(<>
      <FontAwesomeIcon icon={faMoon}/> ¡Buenas noches!
      </>);
    }
    useEffect(() => {
      const upDateTime = () => {
        const now = new Date();
        setGreeting(getGreeting(now.getHours()));
      }; 
      upDateTime();
      const interval = setInterval(upDateTime,1000);
      return () => clearInterval(interval);
    },[]);
    return(<>
       <h2 className="card-text">{greetin}</h2>
    </>)
}
export default Greeting;