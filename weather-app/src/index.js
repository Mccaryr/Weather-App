import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import WeeklyContainer from './containers/weeklycontainer'; 
import Title from './components/title';
import Navbar from './components/navbar';
import * as serviceWorker from './serviceWorker';


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
