import React, { Component } from 'react';
import { Link } from "react-router-dom";
import "./Navbar.css";

class Navbar extends Component {
    render() {
        return (
            <div className="navContainer">
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div>
                    <Link className="navbar-brand" to="/">Google Books</Link>
                    <Link className="nav-link" to="/search">Search</Link> 
                    <Link className="nav-link" to="/">Saved</Link> 
                </div>
                </nav>
            </div>
        );
    }
}

export default Navbar;