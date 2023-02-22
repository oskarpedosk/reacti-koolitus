import {useState} from 'react'

function Weather() {
    const [weather, setWeather] = useState({})
    const loadWeather = async () => {
        const url = 'https://api.open-meteo.com/v1/forecast?latitude=59.44&longitude=24.75&current_weather=true&hourly=temperature_2m,relativehumidity_2m,windspeed_10m'
        const result = await fetch(url)
        const weather = await result.json()
        console.log(weather)
        setWeather(weather.current_weather)
    }
    let weatherData = ''
    if (weather.temperature) {
        weatherData = (
            <div>
                <p>Tallinn</p>
                <div>{weather.time}</div>
                <div>{weather.temperature}</div>
                <div>{weather.windspeed}</div>
            </div>
        )
    }
    return (
        <>
        <button onClick={loadWeather}>Load Weather</button>
        {weatherData}
        </>
    )
}

export default Weather