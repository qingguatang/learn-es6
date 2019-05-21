import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './style.scss';

class QrcodePage extends React.Component {
  render() {
    return (
      <div>
        <div className="field">
          <input type="text" className="form-control" placeholder="URL" />
        </div>
      </div>
    );
  }
}

export default QrcodePage;