import React from 'react';
import WeeklyForm from '../components/weeklyform';
import WeeklyWeather from '../components/weeklyweather';
import { connect } from 'react-redux';
import { fetchWeeklyWeather } from '../actions/fetchweeklyweather';

class WeeklyContainer extends React.Component {

    searchForWeeklyData = (e,inputData) => {
        e.preventDefault();
        console.log(inputData)
        let city = inputData.city
        let country = inputData.country 
        this.props.fetchWeeklyWeather(city, country);
      }



    render() {
        // debugger;
        // const todaystemperature = this.props.weeklyWeather[0].main.temp
        // console.log(todaysTemp[0])
        return (
            <div>
            <h1>Weekly Weather Data</h1> 
            <WeeklyForm  submitHandler={this.searchForWeeklyData}/>
            <WeeklyWeather 
            // todaysTemp = {todaystemperature}
            />
          
            </div>
        )
    }
}

function mapStateToProps(state) {
    // debugger;
    // console.log(state)
    return { weeklyWeather: state.weatherData }
  }

// export default WeeklyContainer;
export default connect(mapStateToProps, {fetchWeeklyWeather})(WeeklyContainer);