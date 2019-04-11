import React, { Component } from 'react';
import Button from './components/Button';
import 'bulma';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="buttons">
          <Button type="primary" onClick={e => alert('es6')}>
            <span>React</span>
          </Button>
          <Button type="primary" size="large">
            <span>Large</span>
          </Button>
          <Button rounded>
            <span>Rounded</span>
          </Button>
          <Button disabled={true} autoFocus>
            <span>Default Button</span>
          </Button>
        </div>
      </div>
    );
  }
}

export default App;
