import React, { Component } from 'react';


export default class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="main_menu_area">
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="/home"><img src="../img/logo.png" alt="TheWalk"></img></a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span></span>
                    <span></span>
                    <span></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav">
                        <li className="nav-item active"><a className="nav-link" href="/home">Home</a></li>
                        <li className="nav-item"><a className="nav-link" href="/aboutus">About Us</a></li>
                        <li className="nav-item"><a className="nav-link" href="/services">Services</a></li>
                        <li className="nav-item"><a className="nav-link" href="/portfolio">Portfolio</a></li>
                        <li className="nav-item"><a className="nav-link" href="/blog">Blog</a></li>                  
                        <li className="nav-item"><a className="nav-link" href="/contact">Contact</a></li>
                    </ul>
                </div>
            </nav>
            </div>
         );
    }
}
