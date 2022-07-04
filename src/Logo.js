import React from 'react'
import {FaSun} from 'react-icons/fa'
import {FaCloudSun} from 'react-icons/fa'
import {FaCloud} from 'react-icons/fa'
import {FaCloudMeatball} from 'react-icons/fa'
import {FaCloudShowersHeavy} from 'react-icons/fa'
import {FaCloudRain} from 'react-icons/fa'
import {FaBolt} from 'react-icons/fa'
import {FaSnowflake} from 'react-icons/fa'
import {FaCloudversify} from 'react-icons/fa'
import './App.css'
function Logo({weathertype}) {
  if(weathertype==='clear sky'){
    return(<>
    <FaSun style={{color:'orange'}} className='logo'/>
    </>)
  }else if(weathertype==='few clouds'){
    return<>
    <FaCloudSun className='logo'/>
    </>
  }else if(weathertype==='scattered clouds'){
    return<>
    <FaCloud style={{color:'white'}} className='logo'/>
    </>
  }else if(weathertype==='broken clouds'){
    return(<>
    <FaCloudMeatball style={{color:'white'}} className='logo'/>
    </>)
  }else if(weathertype==='shower rain'){
    return<>
    <FaCloudShowersHeavy style={{color:'blue'}} className='logo'/>
    </>
  }else if(weathertype==='rain'){
    return<>
    <FaCloudRain style={{color:'blue'}} className='logo'/>
    </>
  }else if(weathertype==='thunderstorm'){
    return<>
    <FaBolt style={{color:'orange'}} className='logo'/>
    </>
  }else if(weathertype==='snow'){
    return<>
    <FaSnowflake style={{color:'white'}} className='logo'/>
    </>
  }else{
    return<>
    <FaCloudversify style={{color:'white'}} className='logo'/>
    </>
  }
}

export default Logo