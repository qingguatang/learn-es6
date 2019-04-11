import React, { Component } from 'react';
import Button from './components/Button';
import { Tabs, TabPane } from './components/Tabs';
import 'bulma';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      {/*
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
      */}
      <Tabs>
        <TabPane title="Tab1">ES6 Body 1</TabPane>
        <TabPane title="Tab2">ES6 Body 2</TabPane>
        <TabPane title="Tab3">Body 3</TabPane>
        <TabPane title="Tab4">Body 4</TabPane>
      </Tabs>
      </div>
    );
  }
}

export default App;
