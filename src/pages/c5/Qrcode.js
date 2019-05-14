import React from 'react';
import qrcode from 'qrcode';
import style from './style.scss';


class Qrcode extends React.Component {
  state = {
    imageUrl: null
  }

  constructor(props) {
    super(props);
    console.log('ctor');
  }

  componentDidMount() {
    console.log('mount');
    qrcode.toDataURL(this.props.url).then(imageUrl => {
      this.setState({ imageUrl });
    });
  }

  componentWillUnmount() {
    //
  }

  componentDidUpdate(prev) {
    console.log('update', this.props, this.state);
    if (prev.url !== this.props.url) {
      qrcode.toDataURL(this.props.url).then(imageUrl => {
        this.setState({ imageUrl });
      });
    }
  }

  render() {
    console.log('render');
    const { imageUrl } = this.state;
    return (
      <div>{imageUrl ? <img src={imageUrl} alt="" /> : null}</div>
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
          <input type="text" className="form-control" placeholder="URL"
            value={url} onChange={e => this.setState({ url: e.target.value })} />
        </div>
        <div className="field">
          <Qrcode url={this.state.url} />
        </div>
      </div>
    );
  }
}


export default QrcodePage;
