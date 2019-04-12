import React, { Component } from 'react';
import 'bulma';
import Button from './components/Button';
import './App.scss';


class App extends Component {
  render() {
    return (
      <div className="App buttons">
        <Button type="info"><div>ABC</div>ES6</Button>
        <Button type="danger">Warn</Button>
        <Button size="large">Big</Button>
      </div>
    );
  }
}

export default App;
