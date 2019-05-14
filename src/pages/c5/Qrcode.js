import React from 'react';
import qrcode from 'qrcode';
import style from './style.scss';


class Qrcode extends React.Component {
  state = {
    imageUrl: null
  }

  componentDidMount() {
    qrcode.toDataURL(this.props.url).then(imageUrl => {
      this.setState({ imageUrl });
    });
  }

  render() {
    const { imageUrl } = this.state;
    return (
      <div>{imageUrl ? <img src={imageUrl} /> : null}</div>
    )
  }
}


class QrcodePage extends React.Component {
  state = {
    url: 'https://www.google.com'
  }

  render() {
    const { url } = this.state;
    return (
      <div className={style.qrcode}>
        <div className="field">
          <input type="text" class="form-control" placeholder="URL"
            value={url} onChange={e => this.setState({ url: e.target.value })} />
        </div>
        <div className="field">
          <Qrcode key={url} url={this.state.url} />
        </div>
      </div>
    );
  }
}


export default QrcodePage;
