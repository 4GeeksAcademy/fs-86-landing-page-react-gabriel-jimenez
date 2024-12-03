import React, {useState, useEffect} from 'react';

const Reloj = () => {
    const [time, setTime] = useState(new Date());
    useEffect(() => {
      const timer = setInterval(() => {
        setTime(new Date()); 
      }, 1000);
    
      return () => clearInterval(timer);
    }, []);
  
    const formattedTime = time.toLocaleTimeString();

    return(<>
    <p className="card-hour">{formattedTime}</p>
    </>)
}

export default Reloj;