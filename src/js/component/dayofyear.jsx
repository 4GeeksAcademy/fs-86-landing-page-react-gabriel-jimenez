import React, {useState, useEffect} from 'react';

const DayOfYear = () => {

    const [dayOfYear, setDayOfYear] = useState(0); 

    const getDayOfYear = (date) => {
        const startOfYear = new Date(date.getFullYear(), 0, 1); 
        const diffInMs = date - startOfYear;
        return Math.floor(diffInMs / (1000 * 60 * 60 * 24)) + 1; 
      };
      useEffect(() => {
        const updateTime = () => {
          const now = new Date();
          setDayOfYear(getDayOfYear(now)); 
        };
        updateTime(); 
        const interval = setInterval(updateTime, 1000); 
        return () => clearInterval(interval);
        }, []);

      
    return(<>

    <p>Day of the Year</p>
    <h3>{dayOfYear}</h3>

   </>)
}
export default DayOfYear;