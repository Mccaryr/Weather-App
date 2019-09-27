import React from 'react';
import Titles from './components/title';
import Form from './components/form';
import Weather from './components/weather';
// import fetchWeatherData from './reducers/weather_reducer';
import { connect } from 'react-redux';
import { fetchWeather } from './actions/fetchweather';
import './App.css';



class App extends React.Component {


// componentDidMount() {
//   fetch('http://localhost:3000/api/v1/locations')
//   .then(resp => resp.json())
//   .then(data => console.log(data))
// }

  search = (e,inputData) => {
    e.preventDefault();
    console.log(inputData)
    let city = inputData.city
    let country = inputData.country 
    this.props.fetchWeather(city, country);
  }

  // handleSubmit = e => {
  //   console.log("handleSubmit hit")
  //   e.preventDefault() 
  //   this.props.fetchWeather();
  // }



  render() {
    // debugger;
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
      </header>
    </div>
  );
}
}

function mapStateToProps(state) {
  // debugger;
  return { weather: state.weatherData }
}

// function mapDispatchToProps(dispatch) {
//   return { fetchWeather: ()=> dispatch(fetchWeather())
//   }
// }

// export default App;
export default connect(mapStateToProps, {fetchWeather})(App)