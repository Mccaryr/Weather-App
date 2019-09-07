import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import { Provider } from 'react-redux';
import StoreRef from './store/store';
import WeeklyContainer from './containers/weeklycontainer'; 
import Title from './components/title';
import Navbar from './components/navbar';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import fetchWeatherData from './reducers/weather_reducer';


const middleware = applyMiddleware(thunk)
const store = createStore(fetchWeatherData, middleware)




// import * as serviceWorker from './serviceWorker';

// const store = createStore(
//     reducers, composeEnhancer(applyMiddleware(thunk)),
// )



ReactDOM.render(
    <Provider store={store}>
    <Router>
        <React.Fragment>
         <Navbar />
            <Route exact path="/" component={Title} />
            <Route exact path="/DailyForecast" component={App} />
            <Route exact path="/WeeklyForecast" component={WeeklyContainer} />
        </React.Fragment>
    </Router>)
    </Provider>, document.getElementById('root')
)

