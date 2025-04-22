/* 
import React, { useState } from 'react';


function Time() {

  const [today, setToday] = useState(new Date());

    const interval = setInterval(() => {
      setToday(new Date());
    }, 1000);

    
  return (
    <div className="clock">
      <h1>Hello World!</h1>
      <p>{today.toLocaleTimeString()}</p>
    </div>
  );
}




export default Time; */

import React, { useState } from "react";

/* 
function App(){
  const [today, setToday] = useState(new Date());

  const interval = setInterval(() => {
    setToday(new Date());
  }, 1000);
   return(
    <div id="body">
      <header>
      <h3>React</h3>
       <p>Navigation</p>
       
      </header>
   <main>
   <div className="clock">
      <h1>Hello World!</h1>
      <p>{today.toLocaleTimeString()}</p>
    </div>
    <div></div>
   </main>

    </div>
   )
}
export default App;
 */

import axios from "axios";

function App() {
  const [time, setTime] = useState("");
  const [date, setDate] = useState("");

  const changeTime = async (event) => {
    const timezone = event.target.value;
    try {
      const response = await axios.get(
        `https://localhost:7181/api/Time/GetTimeByCountry?country=${timezone}`
      );
      setTime(response.data.time);
      setDate(response.data.date);
    } catch (error) {
      console.error("Error fetching time:", error);
      setTime("Error fetching time");
      setDate("Error fetching date");
    }
  };

  return (
<div class="body">

<header>
      <h3>React</h3>
       <p>Navigation</p>
       
      </header>
    <main>

    <select onChange={changeTime} className="form-select">
        <option value="" selected disabled>
          Select country...
        </option>
        <option value="America">America</option>
        <option value="India">India</option>
        <option value="UK">UK</option>
        <option value="Australia">Australia</option>
      </select>

      <div class="mt-5">
        <p>Time: {time}</p>
        <p>Date: {date}</p>
      </div>
    </main>


    </div>

  );
}

export default App;
