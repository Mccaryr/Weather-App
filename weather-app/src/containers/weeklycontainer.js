import React from 'react';
import WeeklyForm from '../components/weeklyform';

class WeeklyContainer extends React.Component {

    searchForWeeklyData = (e,inputData) => {
        e.preventDefault();
        console.log(inputData)
        let city = inputData.city
        let country = inputData.country 
        this.props.fetchWeeklyWeather(city, country);
      }

    render() {
        return (
            <div>
            <h1>Weekly Weather Data</h1> 
            <WeeklyForm />
            </div>
        )
    }
}

export default WeeklyContainer;
// export default connect(mapStateToProps, {fetchWeeklyWeather})(WeeklyContainer);