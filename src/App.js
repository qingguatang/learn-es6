import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import C2 from './C2';
import C3 from './C3';
import QrcodePage from './pages/Qrcode';
import './App.scss';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Route path="/c2" component={C2} />
          <Route path="/c3" component={C3} />
          <Route path="/qrcode" component={QrcodePage} />
        </Router>
      </div>
    );
  }
}
export default App;
