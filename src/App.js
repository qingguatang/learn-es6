import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import 'bulma';
import C2 from './C2';
import C4 from './C4';
import './App.scss';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Route path="/c2" component={C2} />
          <Route path="/c4" component={C4} />
        </Router>
      </div>
    );
  }
}
export default App;
