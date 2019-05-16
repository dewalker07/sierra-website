import React, { Component } from 'react';

// import logo from './logo.svg';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Aboutus from './components/Aboutus';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Blog from './components/Blog';
import Contact from './components/Contact';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
// import './App.css';

export default class App extends Component {
  render() {
  return (
    <BrowserRouter basename={'/'}>
        <Navbar />
        <Switch>
        <Route path='/home' component={Home} />
        <Route path='/aboutus' component={Aboutus} />
        <Route path='/services' component={Services} />
        <Route path='/portfolio' component={Portfolio} />
        <Route path='/blog' component={Blog} />
        <Route path='/contact' component={Contact} />
        </Switch>
    </BrowserRouter>
  );
  }
}


