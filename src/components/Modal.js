import React from 'react'
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import cx from 'classnames';
import Transition from 'react-addons-css-transition-group';
import './Modal.scss';


class Modal extends React.Component {
  static defaultProps = {
    buttons: [
      { text: '取消', name: 'Cancel' },
      { text: '确定', name: 'Ok', primary: true }
    ]
  };

  handleClose = () => {
    this.requestClose();
  };

  componentDidMount() {
    const handler = e => {
      if (e.keyCode === 27) {
        this.requestClose();
      }
    }
    window.addEventListener('keydown', handler);
    this.keyHandler = handler;
  }

  componentWillUnmount() {
    console.log('unmount');
    window.removeEventListener('keydown', this.keyHandler);
  }

  render() {
    const container = document.querySelector('body');
    return ReactDOM.createPortal(this.renderBody(), container);
  }

  requestClose() {
    const { onRequestClose } = this.props;
    onRequestClose && onRequestClose();
  }

  handleAction(name) {
    const handler = this.props[`on${name}`];
    if (handler) {
      if (handler() !== false) {
        this.requestClose();
      }
    }
  }

  renderBody() {
    const {
      title, visible, children,
      className, buttons
    } = this.props;
    return (
      <Transition transitionName="example" transitionEnterTimeout={300} transitionLeaveTimeout={500}>
      {
        visible ?
        <div className={className}>
          <div className="modal" style={{ display: 'block' }} tabIndex="-1" role="dialog">
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">{title}</h5>
                  <button type="button" className="close" data-dismiss="modal" aria-label="Close"
                      onClick={this.handleClose}>
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div className="modal-body">
                  {children}
                </div>
                <div className="modal-footer">
                {
                  buttons.map((item, index) => (
                    <button key={index} type="button"
                      className={cx('btn', item.primary ? 'btn-primary' : 'btn-secondary')}
                      onClick={() => this.handleAction(item.name)}
                      >{item.text}</button>
                  ))
                }
                </div>
              </div>
            </div>
          </div>
          <div className="modal-backdrop fade show"></div>
        </div> : null
      }
      </Transition>
    );
  }
}

class ConfirmModal extends React.Component {
  state = {
    visible: false
  }

  componentDidMount() {
    this.setState({ visible: true });
  }

  render() {
    const { title = '确认', message } = this.props;
    const props = {
      title,
      children: message,
      visible: this.state.visible,
      onRequestClose: this.onRequestClose,
      onOk: this.onOk,
      onCancel: this.onCancel,
    };
    return (
      <Modal {...props} />
    );
  }

  onRequestClose = () => {
    this.setState({ visible: false });
  }

  onOk = () => {
    const { ok } = this.props;
    ok && ok();
  }

  onCancel = () => {
    const { cancel } = this.props;
    cancel && cancel();
  }
}


ConfirmModal.propTypes = {
  title: PropTypes.string,
  message: PropTypes.string.isRequired,
  ok: PropTypes.func,
  Cancel: PropTypes.func
};


Modal.confirm = function(options) {
  const modal = <ConfirmModal key={Date.now()} {...options} />;
  ReactDOM.render(modal, getModalContainer());
};


function getModalContainer() {
  const id = 'modal_container';
  const el = document.getElementById(id);
  if (el) {
    return el;
  }
  const newEl = document.createElement('div');
  newEl.setAttribute('id', id);
  document.querySelector('body').appendChild(newEl);
  return newEl;
}


export default Modal;
