const url="https://api.weatherapi.com/v1/current.json?key=5ad66b8eedfb4d7299855946241807"

export const getWeatherDataForCity=async(city)=>{
    const res=await fetch(`${url}&q=${city}&aqi=yes`)
    return await res.json()
}

export const getWeatherDataForLocation=async(lat, lon)=>{
    const res=await fetch(`${url}&q=${lat},${lon}&aqi=yes`)
    return await res.json()
}