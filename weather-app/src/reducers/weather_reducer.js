 const fetchWeatherData =(state= {
    weatherData: []
}, action) => {
    switch (action.type) {
        case 'FETCH_WEATHER': 
        console.log(action.weather)
        // return {
        //    ...state,
        //    weather: action.weather
        // } 
        state = {...state, weatherData: action.weather}
        
        console.log(state)
        // debugger;
    default:
    console.log("default hit") 
        return state 
        
    }
} 


export default fetchWeatherData;