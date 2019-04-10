import React, { Component } from 'react';
import Button from './components/Button';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Button type="primary" onClick={e => alert('es6')}>
          <span>React</span>
        </Button>
        <Button type="primary" shape="circle">
          <span>Circle</span>
        </Button>
        <Button disabled={true} autoFocus>
          <span>Default Button</span>
        </Button>
      </div>
    );
  }
}

export default App;
