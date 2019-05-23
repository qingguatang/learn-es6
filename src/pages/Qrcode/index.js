import React from 'react';
import qrcodeUtil from 'qrcode';
import 'bootstrap/dist/css/bootstrap.css';
import style from './style.scss';

class QrcodePage extends React.Component {
  state = {
    url: 'https://www.google.com',
    count: 0
  }

  render() {
    const { count } = this.state;
    // console.log('page render')
    const el = (
      <div className={style.qrcode}>
        <button onClick={e => this.setState({count: count+1})}>{count}</button>
        {
          count % 2 === 1 ?
          <div>
            <div key="a" className="a">1 <input type="checkbox" /></div>
            <div key="b" className="b">2 <input type="checkbox" /></div>
          </div> :
          <div>
            <div key="b" className="b">2 <input type="checkbox" /></div>
            <div key="a" className="a">1 <input type="checkbox" /></div>
          </div>
        }
        <div className="field">
          <input type="text" className="form-control" placeholder="URL"
            value={this.state.url} onChange={e => this.setState({url: e.target.value})} />
        </div>
        <QrcodeComponent url={this.state.url} />
        <div>{this.state.url}</div>
      </div>
    );
    // console.log(el);
    return el;
  }
}


const QrcodeComponent = (props) => (
  <Qrcode key={props.url} {...props} />
);

class Qrcode extends React.PureComponent {
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
      // this.createQrcode();
    }
  }

  // shouldComponentUpdate(nextProps, nextState) {
  //   return this.props.url !== nextProps.url ||
  //     this.state.imgUrl !== nextState.imgUrl;
  // }

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
    // console.log('qrcode render');
    const { imgUrl } = this.state;
    return (
      <div>
        { imgUrl ? <img src={imgUrl} /> : null }
      </div>
    );
  }
}

export default QrcodePage;