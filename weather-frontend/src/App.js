import React from 'react';
import Titles from './components/title';
import Form from './components/form';
import Weather from './components/weather';
// import fetchWeatherData from './reducers/weather_reducer';
import { connect } from 'react-redux';
import { fetchWeather } from './actions/fetchweather';
import { addLocation} from './actions/addLocation';
import { fetchLocations } from './actions/fetchLocations'
// import degreeToggle from './components/degreetoggle';
import './App.css';
import Index from './components/index';



class App extends React.Component {


// componentDidMount() {
//   this.props.fetchLocations()
// }

  search = (e,inputData) => {
    e.preventDefault();
    console.log(inputData)
    const city = inputData.city
    const country = inputData.country 
    this.props.fetchWeather(city, country)
    this.props.addLocation(inputData)
    

    // this.setState({
    //   city: '',
    //   country: ''
    // })
  }

  // handleSubmit = e => {
  //   console.log("handleSubmit hit")
  //   e.preventDefault() 
  //   this.props.fetchWeather();
  // }



  render() {
    debugger;
    const temperature = this.props.weather.temp 
    const humidity = this.props.weather.humidity 
  return (
    <div className="App">
      <header className="App-header">
        <Titles />
        <Form onSubmit={this.search}/>
        <Weather 
        temp={temperature}
        humid={humidity}
        /> 
        {/* <Index  locations={this.props.locations}/> */}
        
      </header>
    </div>
  );
}
}

function mapStateToProps(state) {
  return { weather: state.weatherData,
           locations: state.locations }
}




export default connect(mapStateToProps, {fetchWeather, addLocation, fetchLocations })(App)