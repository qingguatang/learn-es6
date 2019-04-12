import React, { Component } from 'react';
import 'bulma';
import Button from './components/Button';
import './App.scss';


class App extends Component {
  render() {
    return (
      <div className="App buttons">
        <Button>Default</Button>
        <Button type={null}>Null</Button>
        <Button type="info"><div>ABC</div>ES6</Button>
        <Button type="danger">Warn</Button>
        <Button size="large">Big</Button>
        <Button rounded>Round</Button>
      </div>
    );
  }
}

export default App;
