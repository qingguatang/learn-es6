import React from 'react'
import cx from 'classnames';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import './style.scss';


class Modal extends React.Component {
  static defaultProps = {
    buttons: [
      { text: '取消' },
      { text: '确定', primary: true }
    ]
  }

  componentDidMount() {
    const handler =  e => {
      console.log(e);
      if (e.keyCode === 27) {
        this.props.onRequestClose();
      }
    }
    window.addEventListener('keydown', handler)
    // this.keydownHandler = handler;

    this.clean = () => {
      window.removeEventListener('keydown', handler);
    }
  }

  componentWillUnmount() {
    // window.removeEventListener('keydown', this.keydownHandler);
    this.clean();
  }

  render() {
    const { title, className, children, buttons, visible } = this.props;
    // if (!visible) {
    //   return null;
    // }
    return (
      <ReactCSSTransitionGroup
      transitionName="example"
      transitionEnterTimeout={1000}
      transitionLeaveTimeout={300}>
      { visible ?
      <div className={className}>
         <div className="modal" style={{display: 'block'}} tabIndex="-1" role="dialog">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">{title}</h5>
                <button type="button" className="close" onClick={this.props.onRequestClose} data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
              {children}
              </div>
              <div className="modal-footer">
              {
                buttons.map((button, index) => (
                  <button key={index} type="button" className={cx('btn', button.primary? 'btn-primary' : 'btn-secondary')}>{button.text}</button>
                ))
              }
              </div>
            </div>
          </div>
        </div>
        <div className="modal-backdrop fade show"></div>
        </div> : null }
      </ReactCSSTransitionGroup> 
    );
  }
}

// Modal.defaultProps = {

// };


export default Modal;