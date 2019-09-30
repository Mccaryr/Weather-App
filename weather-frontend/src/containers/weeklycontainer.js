import React from 'react';
import WeeklyForm from '../components/weeklyform';
import WeeklyWeather from '../components/weeklyweather';
import { connect } from 'react-redux';
import { fetchWeeklyWeather } from '../actions/fetchweeklyweather';
import DegreeToggle from '../components/degreetoggle';

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
        const tomorrowstemperature = this.props.weeklyWeather.temp
        return (
            <div>
            <h1>Tomorrow's Temp</h1> 
            <WeeklyForm  submitHandler={this.searchForWeeklyData}/>
            <WeeklyWeather 
            tomorrowsTemp = {tomorrowstemperature}
            />
            <DegreeToggle 
            tomorrowsTemp={tomorrowstemperature}
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