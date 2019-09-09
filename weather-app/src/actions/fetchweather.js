const Api_Key = "9e8c189515b44e2746bffee97cd1e61f";

export const fetchWeather = (city, country) => {
    console.log(city, country)
    return dispatch => {
        // const city = e.target.elements.city.value;
        // const country = e.target.elements.country.value;
        // dispatch({ type: 'START_REQ_WEATHER'})
        console.log("fetching weather")
        return fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&units=imperial&appid=${Api_Key}`)
        .then(response => response.json())
        .then(resp => {
            console.log(resp)
            return resp
        })
        .then(data => dispatch({type: "FETCH_WEATHER", weather: data.weather}))
        // console.log("weeeee")
    }
}


// `http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&units=imperial&appid=${Api_Key}`