
import DateRangePickerComp from "./range";  // npm install react-date-range
//import { useState } from "react";
import './App.css';

function App() {


  return (
    <div className="App" >
    <p>

      Select time interval <br></br>
  
      <DateRangePickerComp/>




{/*       <br></br> <br></br>
      <hr></hr>
      <br></br>

      Select range <br></br>
      <select style={{width:"40%", height:"50px", fontSize:"26px"}} 
      onChange= {(e) => {setLastRange(e.target.value)}}>

        
        <option value="week"> Last week </option>
        <option value="week2"> Last 2 weeks </option>
        <option value="month"> Last month </option>
        <option value="month3"> Last 3 months </option>

      </select>  */}



    </p>
    </div>
  );
}

export default App;
