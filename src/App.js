import { useEffect, useState } from 'react';
import Axios from 'axios';
import Logo from './Logo';
import './App.css';
import {FaCloudversify} from 'react-icons/fa'

function App() {
const [lat,setLat]=useState("");
const [long,setLong]=useState("");
const [city,setCity]=useState("")
const [state,setState]=useState("")
const [country,setCountry]=useState("")
const [datafg,setDatafg]=useState(null)
const [color,setColor]=useState("-webkit-linear-gradient(left,  cyan, #3d68f5, violet)")
const [color2,setColor2]=useState("black")
//Fetching city,state,country:
// useEffect(()=>{
// const fetchgeocodingapi=async()=>{
//   const response=await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${city},${state},${country}&appid=1e31eeadc4767e3f049f78d373ef95fb&units=metric`)
//   const data=response.json();

//   console.log(data);
// }
// fetchgeocodingapi();
// },[city,state,country])
useEffect(()=>{
Axios.get(`http://api.openweathermap.org/geo/1.0/direct?q=${city},${state},${country}&appid=1e31eeadc4767e3f049f78d373ef95fb&units=metric`).then(
  (response)=>{
    console.log(response.data[0].lat);
    setLat(response.data[0].lat)
    console.log(response.data[0].lon);
    setLong(response.data[0].lon);
  }
)
},[city,state,country])


//Fetching Weather:
useEffect(()=>{
  Axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=1e31eeadc4767e3f049f78d373ef95fb&units=metric`).then(
    (response)=>{
    setDatafg(response.data);
  }
  )
  
},[lat,long])

console.log(datafg);

const setCol=(col,coln)=>{
  setColor(col);
  setColor2(coln);
}

 
  return (
    <div className="App" style={{backgroundImage:color,color:color2}}>
     <h1>Weather <FaCloudversify className='nm'/></h1>
     <input type='text' placeholder='     Enter the City...' onChange={(e)=>{setCity(e.target.value)}}/><br/>
     <input type='text' placeholder='     Enter the State...' onChange={(e)=>{setState(e.target.value)}}/><br/>
     <input type='text' placeholder='     Enter the Country...' onChange={(e)=>{setCountry(e.target.value)}}/><br/>
    {datafg?(
      <div className='wethcon'>
      <h3>Details </h3>
      <h4 className='details'>Location : {datafg.name}</h4>
      <h4 className='details'>Temp : {datafg.main.temp}&deg;C</h4>
      <h4 className='details'>Weather : {datafg.weather[0].description} <Logo weathertype={datafg.weather[0].description}/></h4>
      <h4 className='details'>Wind Speed : {datafg.wind.speed} m/s</h4>
      
     </div>
     

     ):("Enter the Details")
}

<button className='dark' onClick={()=>setCol("linear-gradient(to bottom right ,black,#fff)","white")}>Dark Mode</button>
    </div>
  );
}

export default App;
