import React, { Component } from 'react';
import 'bulma';
import Button from './components/Button';
import Tabs from './components/Tabs';
import './App.scss';


class App extends Component {
  render() {
    return (
      <div className="App buttons">
        <Tabs></Tabs>
      </div>
    );
  }
}

export default App;
