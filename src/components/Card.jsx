import React from 'react'
import './Card.css'
import { useWeather } from '../context/Weather'

function Card() {
    const weather=useWeather()
  return (
    <div className='card'>
      <img src={weather?.data?.current?.condition?.icon} alt="temperature icon" />
      <h2>{weather.data?.current?.temp_c} °C</h2>
      <h4>{weather.data?.location?.name}, {weather.data?.location?.region}, {weather.data?.location?.country}</h4>
    </div>
  )
}

export default Card
