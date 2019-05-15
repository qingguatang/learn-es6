import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import 'bulma';
import C2 from './C2';
import C3 from './C3';
import Qrcode from './pages/c5/Qrcode';
import Books from './pages/c5/Books';
import './App.scss';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Route path="/c2" component={C2} />
          <Route path="/c3" component={C3} />

          <Route path="/c5/qrcode" component={Qrcode} />
          <Route path="/c5/books" component={Books} />
        </Router>
      </div>
    );
  }
}
export default App;
