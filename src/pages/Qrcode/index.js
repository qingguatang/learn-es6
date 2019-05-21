import React from 'react';
import qrcodeUtil from 'qrcode';
import 'bootstrap/dist/css/bootstrap.css';
import style from './style.scss';

class QrcodePage extends React.Component {
  state = {
    url: 'https://www.google.com'
  }

  render() {
    return (
      <div className={style.qrcode}>
        <div className="field">
          <input type="text" className="form-control" placeholder="URL" />
        </div>
        <Qrcode url={this.state.url} />
      </div>
    );
  }
}

class Qrcode extends React.Component {
  state = {
    imgUrl: null
  }

  componentDidMount() {
    qrcodeUtil.toDataURL(this.props.url)
      .then(imgUrl => {
        this.setState({ imgUrl });
      })
      .catch(err => {
        console.error(err)
      })
  }

  render() {
    const { imgUrl } = this.state;
    return (
      <div>
        { imgUrl ? <img src={imgUrl} /> : null }
      </div>
    );
  }
}

export default QrcodePage;