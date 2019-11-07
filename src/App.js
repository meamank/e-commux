import React, { Component } from 'react';
import Navbar from'./components/container/Navbar/Navbar';
import ProductCard from './components/presentational/ProductCard/ProductCard';
import Home from'./components/container/Home/Home';
import routes from './routes';
//import withROuter since you are using redux, and you want your app to have access to this.props.history.
import { withRouter } from 'react-router-dom';
//Import connect from redux to have access your initialState in the reducer, and all it's actions.
import { connect } from 'react-redux';
import axios from 'axios';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
          <Navbar />
        <ProductCard />
          {routes}
      </div>
    );
  }
}
export default App;
