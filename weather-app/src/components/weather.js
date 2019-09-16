import React from 'react';

const Weather = (props) => {
    // const weather = this.props.weatherData.map(data => {
    //     return <p>Temperature: {data.main.temp}</p>
    // })
 
    return (
        <div>
        <p>Temperature: {Math.round(props.temp)}°F </p> 
        <p>Humidity: {props.humid}% </p> 
        </div>
    )
}

export default Weather;