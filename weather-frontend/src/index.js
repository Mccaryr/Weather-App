import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import WeeklyContainer from './containers/weeklycontainer'; 
import Title from './components/title';
import Navbar from './components/navbar';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import fetchWeatherData from './reducers/weather_reducer';
import Index from './components/index';



const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;




// import * as serviceWorker from './serviceWorker';

const store = createStore(
    fetchWeatherData, composeEnhancers(applyMiddleware(thunk)),
)



ReactDOM.render(
    <Provider store={store}>
    <Router>
        <React.Fragment>
         <Navbar />
            <Route exact path="/" component={Title} />
            <Route exact path="/DailyForecast" component={App} />
            <Route exact path="/WeeklyForecast" component={WeeklyContainer} />
            <Route exact path="/Locations" component={Index} />
        </React.Fragment>
    </Router>
    </Provider>, document.getElementById('root')
)

