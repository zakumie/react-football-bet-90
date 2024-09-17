import React from "react";
import './Nav.css';
import { NavLink } from "react-router-dom";

class NavComponent extends React.Component {
    render() {
        return (
            <ul>
                <li><NavLink to={'/'}>Home</NavLink></li>
                <li> <NavLink to={'players'}>Players</NavLink></li>
                <li><NavLink to={'clubs'}>Clubs</NavLink></li>
                <li><a href="about.asp">About</a></li>
            </ul>
        )
    }
}

export default NavComponent;