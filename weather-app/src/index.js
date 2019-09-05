import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import WeeklyContainer from './containers/weeklycontainer'; 
import Title from './components/title';
import * as serviceWorker from './serviceWorker';

const link = {
    width: '100px',
    padding: '12px',
    margin: '0 6px 6px',
    background: 'blue',
    textDecoration: 'none',
    color: 'white',
}

const Navbar = () => 
    <div>
        <NavLink 
            to="/"
            exact style={link}
            activeStyle={{
                background: 'darkblue'
            }}
            >Home</NavLink>
        <NavLink
            to="/DailyForecast"
            exact style={link}
            activeStyle={{
                background: 'darkblue'
            }}
            >Daily Forecast</NavLink>
        <NavLink
            to="/WeeklyForecast"
            exact style={link}
            activeStyle={{
                background: 'darkblue'
            }}
            >Weekly Forecast</NavLink>
    </div>;




ReactDOM.render((
    <Router>
     <React.Fragment>
         <Navbar />
      <Route exact path="/" component={Title} />
      <Route exact path="/DailyForecast" component={App} />
      <Route exact path="/WeeklyForecast" component={WeeklyContainer} />
    </React.Fragment>
</Router>),
    document.getElementById('root')
)
serviceWorker.unregister();
