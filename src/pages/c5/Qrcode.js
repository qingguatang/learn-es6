import React from 'react';
import qrcode from 'qrcode';
import style from './style.scss';


class Qrcode extends React.PureComponent {
  state = {
    imageUrl: null
  }

  constructor(props) {
    super(props);
    console.log(this.props.url, 'ctor');
  }

  componentDidMount() {
    console.log('mount');
    qrcode.toDataURL(this.props.url).then(imageUrl => {
      this.setState({ imageUrl });
    });
  }

  componentWillUnmount() {
    console.log(this.props.url, 'unmount');
  }

  componentDidUpdate(prev) {
    console.log('update');
    if (prev.url !== this.props.url) {
      qrcode.toDataURL(this.props.url).then(imageUrl => {
        this.setState({ imageUrl });
      });
    }
  }

  // shouldComponentUpdate(nextProps, nextState) {
  //   if (this.props.url !== nextProps.url ||
  //     this.state.imageUrl !== nextState.imageUrl) {
  //     return true;
  //   }
  //   return false;
  // }

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
    url: 'https://www.google.com',
    other: 0
  }

  render() {
    const { url, other } = this.state;
    console.log('page render');
    const node =  (
      <div className={style.qrcode}>
        <button onClick={() => this.setState({ other: (other + 1) % 2 })}>Other</button>
        { other ?
            <div>
              <div key="1" name="a" className="other"><input type="checkbox" />1</div>
              <div key="2" name="b" className="other"><input type="checkbox" />2</div>
            </div> :
            <div>
              <div key="2" name="b" className="other"><input type="checkbox" />2</div>
              <div key="1" name="a" className="other"><input type="checkbox" />1</div>
            </div>
        }
        <div className="field">
          <input type="text" className="form-control" placeholder="URL"
            value={url} onChange={e => this.setState({ url: e.target.value })} />
        </div>
        <Qrcode key={this.state.url} url={this.state.url} />
      </div>
    );
    // console.log(node);
    return node;
  }
}


export default QrcodePage;
