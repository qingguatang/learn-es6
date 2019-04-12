import React, { Component } from 'react';
import 'bulma';
import Button from './components/Button';
import Tabs from './components/Tabs';
import './App.scss';


const TabPane = Tabs.TabPane;

class App extends Component {
  render() {
    return (
      <div className="App buttons">
        <Tabs onChange={index => console.log(index)}>
          <TabPane tab="Tab A">Body A</TabPane>
          <TabPane tab="Tab B">Body B</TabPane>
          <TabPane tab="Tab C">Body C</TabPane>
          <TabPane tab="Tab D">Body D</TabPane>
        </Tabs>
      </div>
    );
  }
}

export default App;
