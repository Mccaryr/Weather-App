const fetchWeatherData =(state= {
    weather: []
}, action) => {
    switch (action.type) {
        case 'FETCH_WEATHER': 
        console.log("fetch weather reducer hit")
        return action.weather 
    default:
    console.log("default hit") 
        return state 
        
    }
} 
// {
//     console.log("hitting reducer")
//     if(action.type === "FETCH_WEATHER"){
//         state = {...state, weatherData: action.payload}
//     }
//     return state;
// }

export default fetchWeatherData;