import React, { Component } from 'react';
import Button from './components/Button';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Button type="primary">
          <span>React</span>
        </Button>
        <Button type="primary" shape="circle">
          <span>Circle</span>
        </Button>
        <Button>
          <span>Default Button</span>
        </Button>
      </div>
    );
  }
}

export default App;
