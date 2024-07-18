import React from 'react'
import './Input.css'
import { useWeather } from '../context/Weather'

function Input() {
    const weather=useWeather()
    console.log(weather)
  return (
    <div className='input'>
      <input className='input-field' placeholder='Enter city' value={weather.searchCity} onChange={(e)=>{
        weather.setSearchCity(e.target.value)
      }} />
    </div>
  )
}

export default Input
