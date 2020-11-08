import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
               <div>
                   <Link className="navbar-brand" to="/">Google Books</Link></div>
                <div>
                    <Link className="nav-link" to="/search">Search</Link> 
                    <Link className="nav-link" to="/">Saved</Link> 
                </div>
            </nav>

        );
    }
}

export default Navbar;