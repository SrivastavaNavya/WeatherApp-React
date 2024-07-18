import './App.css';
import Input from './components/Input';
import Button from './components/Button';
import Card from './components/Card';
import { useWeather } from './context/Weather';
import { useEffect } from 'react';

function App() {
  const weather=useWeather()

  useEffect(()=>{
    weather.fetchCurrentUserLocationData()
  },[])

  return (
    <div className="App">
      <h1>Weather Forecast</h1>
      < Input />< Button onClick={weather.fetchData} value="Search" />
      < Card />
      < Button onClick={weather.fetchCurrentUserLocationData} value="Refresh" />
    </div>
  );
}

export default App;