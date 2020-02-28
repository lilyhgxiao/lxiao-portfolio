/*  React components */
import React from "react";
import { Link, NavLink } from 'react-router-dom';

/* Importing CSS */
import "./../../App.css";
import "./styles.css";

/* The Header Component */
class Header extends React.Component {
    render() {
        return (
            <div className="headerContainer">
                <div className="header">
                    <Link className="nameTitle" to="/" >
                        Lily Xiao
                    </Link>
                    <div className="menu">
                        <NavLink className="inactiveMenuButton" to="/home" activeClassName="activeMenuButton">
                            home
                        </NavLink>
                        <NavLink className="inactiveMenuButton" to="/projects" activeClassName="activeMenuButton">
                            projects
                        </NavLink>
                        <NavLink className="inactiveMenuButton" to="/resume" activeClassName="activeMenuButton">
                            resume
                        </NavLink>
                        <NavLink className="inactiveMenuButton" to="/about" activeClassName="activeMenuButton">
                            about
                        </NavLink>
                    </div>
                </div>
            </div>
        );
    }
}

export default Header;
