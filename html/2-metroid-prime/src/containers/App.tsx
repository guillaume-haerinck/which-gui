import React, { Component } from 'react';
import './App.module.scss';
import Helmet from './Helmet';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Helmet></Helmet>
      </div>
    )
  }
}
