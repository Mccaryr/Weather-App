import React from 'react';
import logo from './logo.svg';
import Titles from './components/title';
import Form from './components/form';
import Weather from './components/weather';
import Navbar from './components/navbar';
import { connect } from 'react-redux';
import { Provider } from 'react-redux';
import './App.css';


const Api_Key = "9e8c189515b44e2746bffee97cd1e61f";

class App extends React.Component {

  state = {
    temperature: undefined,
    city: undefined, 
    country: undefined,
    humidity: undefined,
    description: undefined,
    error: undefined 
  }

  getWeather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;

    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&units=imperial&appid=${Api_Key}`);
    
    const response = await api_call.json();
    
    console.log(response);

    if(city && country) {
      this.setState({
        temperature: response.main.temp, 
        city: response.name, 
        country: response.sys.country, 
        humidity: response.main.humidity, 
        description: response.weather[0].description, 
        error: ""
      })
    }
    else {
      this.setState({
        error: "Please input values for City and Country"
      })
    }
  }

  render() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Titles />
        <Form loadWeather={this.getWeather}/>
        <Weather 
        temperature={this.state.temperature}
        city={this.state.city}
        country={this.state.country}
        humidity={this.state.humidity}
        description={this.state.description}
        error={this.state.error} /> 
      </header>
    </div>
  );
}
}

export default App;
