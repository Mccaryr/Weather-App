import React from 'react';
import logo from './logo.svg';
import Titles from './components/title';
import Form from './components/form';
import Weather from './components/weather';
import { connect } from 'react-redux';
import { fetchWeather } from './actions/fetchweather';
import './App.css';


// const Api_Key = "9e8c189515b44e2746bffee97cd1e61f";

class App extends React.Component {

  // state = {
  //   city: "",
  //   country: "" 
  // }

  state = {
    temperature: undefined,
    city: undefined, 
    country: undefined,
    humidity: undefined,
    description: undefined,
    error: undefined 
  }

  search = (e,inputData) => {
    e.preventDefault();
    console.log(inputData)
    let city = inputData.city
    let country = inputData.country 
    this.props.fetchWeather(city, country);
  }

  // handleChange = e => {
  //   console.log("jklfdsa")
  //   let value = e.target.value; 
  //   this.setState({
  //     value : value 
  //   })
  // } 

  // handleSubmit = e => {
  //   console.log("handleSubmit hit")
  //   e.preventDefault() 
  //   this.props.fetchWeather();
  // }

  // getWeather = async (e) => {
  //   e.preventDefault();
  //   const city = e.target.elements.city.value;
  //   const country = e.target.elements.country.value;

  //   const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&units=imperial&appid=${Api_Key}`);
    
  //   const response = await api_call.json();
    
  //   console.log(response);

  //   if(city && country) {
  //     this.setState({
  //       temperature: response.main.temp, 
  //       city: response.name, 
  //       country: response.sys.country, 
  //       humidity: response.main.humidity, 
  //       description: response.weather[0].description, 
  //       error: ""
  //     })
  //   }
  //   else {
  //     this.setState({
  //       error: "Please input values for City and Country"
  //     })
  //   }
  // }

  render() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Titles />
        <Form onSubmit={this.search}/>
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

function mapStateToProps(state) {
  return { weather: state.weather }
}

// function mapDispatchToProps(dispatch) {
//   return { fetchWeather: ()=> dispatch(fetchWeather())
//   }
// }

// export default App;
export default connect(mapStateToProps, {fetchWeather})(App)