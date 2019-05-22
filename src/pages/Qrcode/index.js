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
          <input type="text" className="form-control" placeholder="URL"
            value={this.state.url} onChange={e => this.setState({url: e.target.value})} />
        </div>
        <Qrcode url={this.state.url} />
        <div>{this.state.url}</div>
      </div>
    );
  }
}

class Qrcode extends React.Component {
  state = {
    imgUrl: null
  }

  constructor(props) {
    super(props);
    // console.log('ctor');
  };

  componentDidMount() {
    // console.log('mounted');
    this.createQrcode();
  }

  componentDidUpdate(prev) {
    // console.log('updated');
    // console.log(this.props.url);
    // console.log(this.state.imgUrl);
    if (prev.url !== this.props.url) {
      this.createQrcode();
    }
  }

  createQrcode() {
    qrcodeUtil.toDataURL(this.props.url)
      .then(imgUrl => {
        this.setState({ imgUrl });
      })
      .catch(err => {
        console.error(err)
      })
  }

  render() {
    // console.log('render');
    const { imgUrl } = this.state;
    return (
      <div>
        { imgUrl ? <img src={imgUrl} /> : null }
      </div>
    );
  }
}

export default QrcodePage;