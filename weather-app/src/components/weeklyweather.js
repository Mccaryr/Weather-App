import React from 'react';

const WeeklyWeather = (props) => {
    // const weather = this.props.weatherData.map(data => {
    //     return <p>Temperature: {data.main.temp}</p>
    // })
 
    return (
        <div>
        <p>Temperature: {Math.round(props.todaysTemp)}°F </p> 
        {/* <p>Humidity: {props.humid}% </p>  */}
        </div>
    )
}

export default WeeklyWeather;