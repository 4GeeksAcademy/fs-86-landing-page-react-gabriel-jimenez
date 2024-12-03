import React, {useState, useEffect} from 'react';

const DayOfWeek = () => {
    const [dayOfWeek, setDayOfWeek] = useState('');
    const getDayOfWeek = (date) => {
        const days = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
        return days[date.getDay()];
      };
      useEffect(() => {
        const updateTime = () => {
          const now = new Date();
          setDayOfWeek(getDayOfWeek(now)); 
        };
        updateTime(); 
        const interval = setInterval(updateTime, 1000); 
        return () => clearInterval(interval);
        }, []);

    return(<>
      <p>Day of the Week</p>
      <h3>{dayOfWeek}</h3>
    </>)
}
export default DayOfWeek;