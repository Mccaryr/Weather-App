 const fetchWeatherData =(state= {
    weatherData: []
}, action) => {
    switch (action.type) {
        case 'FETCH_WEATHER': {
            debugger;
        console.log(action.weather)
        return state = {...state, weatherData: action.weather }
        
        // console.log(state)
        // debugger;
        }
        case 'FETCH_WEEKLYWEATHER': {
            debugger;
            console.log(action.weather)
            return state = {...state, weatherData: action.weather }
            // console.log(state)
        }
        case 'ADD_LOCATION': {
            // debugger;
            console.log(action.payload) 
            state = {...state, weatherData: action.payload }
        }
    default:
    console.log("default hit") 
        return state 
        
    }
} 


export default fetchWeatherData;