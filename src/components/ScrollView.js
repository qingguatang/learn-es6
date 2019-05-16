import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';


class ScrollView extends Component {
  static propTypes = {
    onScroll: PropTypes.func.isRequired,
    children: PropTypes.node.isRequired,
    distance: PropTypes.number
  };


  static defaultProps = {
    distance: 50
  };


  state = {
    loading: false
  };


  footerRef = React.createRef();


  componentDidMount() {
    const { distance } = this.props;
    this.cancelScroll = listenScroll(this.footerRef.current, () => {
      this.tryLoad();
    }, { distance });
  }


  componentWillUnmount() {
    this.cancelScroll();
  }


  tryLoad() {
    if (this.state.loading) {
      return;
    }

    this.setState({ loading: true });
    const done = () => {
      this.setState({ loading: false });
    };

    const res = this.props.onScroll() || {};
    if (typeof res.then === 'function') {
      res.then(done);
    } else {
      setTimeout(done, 500);
    }
  }


  render() {
    const cls = cx(
      'scroll-view-component',
      this.props.className,
      { loading: this.state.loading }
    );
    return (
      <div className={cls}>
        <div className="content">
          {this.props.children}
        </div>
        <div ref={this.footerRef} className="footer">
        { this.state.loading ?
          <div className="loading-indicator"><span>正在加载...</span></div> : null
        }
        </div>
      </div>
    );
  }
}


function listenScroll(elm, fn, { distance }) {
  const handler = () => {
    if (isVisible(elm, distance)) {
      fn();
    }
  };
  window.addEventListener('scroll', handler);
  window.addEventListener('touchmove', handler);
  return () => {
    window.removeEventListener('scroll', handler);
    window.removeEventListener('touchmove', handler);
  };
}


function isVisible(elm, distance) {
  const viewHeight = document.documentElement.clientHeight;
  const rect = elm.getBoundingClientRect();
  return rect.bottom > 0 && rect.top < (viewHeight + distance);
}


export default ScrollView;
