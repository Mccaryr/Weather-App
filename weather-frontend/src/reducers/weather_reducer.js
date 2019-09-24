 const fetchWeatherData =(state= {
    weatherData: []
}, action) => {
    switch (action.type) {
        case 'FETCH_WEATHER': {
        // console.log(action.weather)
        state = {...state, weatherData: action.weather }
        
        // console.log(state)
        // debugger;
        }
        case 'FETCH_WEEKLYWEATHER': {
            // console.log(action.weather)
            state = {...state, weatherData: action.weather }
            // console.log(state)
        }
    default:
    console.log("default hit") 
        return state 
        
    }
} 


export default fetchWeatherData;