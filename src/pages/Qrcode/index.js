import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import style from './style.scss';

class QrcodePage extends React.Component {
  render() {
    return (
      <div className={style.qrcode}>
        <div className="field">
          <input type="text" className="form-control" placeholder="URL" />
        </div>
      </div>
    );
  }
}

export default QrcodePage;