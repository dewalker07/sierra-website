import React, { Component } from 'react';

// import logo from './logo.svg';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Aboutus from './components/Aboutus';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Blog from './components/Blog';
import Contact from './components/Contact';
import {BrowserRouter, Route} from 'react-router-dom';
// import './App.css';

export default class App extends Component {
  render() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <div className="App">
        <Navbar />
        <Route path={process.env.PUBLIC_URL+ '/home'} component={Home} />
        <Route path={`${process.env.PUBLIC_URL}/aboutus`} component={Aboutus} />
        <Route path={`${process.env.PUBLIC_URL}/services`} component={Services} />
        <Route path={`${process.env.PUBLIC_URL}/portfolio`} component={Portfolio} />
        <Route path={`${process.env.PUBLIC_URL}/blog`} component={Blog} />
        <Route path={`${process.env.PUBLIC_URL}/contact`} component={Contact} />
      </div>
    </BrowserRouter>
  );
  }
}


