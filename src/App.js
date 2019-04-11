import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Button from './components/Button';
import { Tabs, TabPane } from './components/Tabs';
import 'bulma';
import './App.scss';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Route path="/button" component={UseButton} />
          <Route path="/tabs" component={UseTabs} />
          <Route path="/all" component={UseAll} />
        </Router>
      </div>
    );
  }
}

const UseAll = () => (
  <div className="container">
    <div className="header">
      <h1 className="title">解构</h1>
      <div className="desc"> 使数据访问更便捷!</div>
    </div>
    <div className="demo">
      <h2>1. Button</h2>
      <UseButton />
    </div>
    <div className="demo">
      <h2>2. Tabs</h2>
      <UseTabs />
    </div>
  </div>
);


const UseButton = () => (
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
);


const UseTabs = () => (
  <Tabs>
    <TabPane title="Tab1">ES6 Body 1</TabPane>
    <TabPane title="Tab2">ES6 Body 2</TabPane>
    <TabPane title="Tab3">Body 3</TabPane>
    <TabPane title="Tab4">Body 4</TabPane>
  </Tabs>
);


export default App;
