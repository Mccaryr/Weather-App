import React from 'react'; 
import { NavLink } from 'react-router-dom';


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

export default Navbar;