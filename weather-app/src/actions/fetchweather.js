const Api_Key = "9e8c189515b44e2746bffee97cd1e61f";

export const fetchWeather = (e) => {
    return dispatch => {
        const city = e.target.elements.city.value;
        const country = e.target.elements.country.value;
        console.log("fetching weather")
        return fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&units=imperial&appid=${Api_Key}`)
        .then(response => response.json())
        .then(data => dispatch({type: "FETCH_WEATHER", payload: data.weather}))
    }
}