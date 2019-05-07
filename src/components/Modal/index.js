import React from 'react'
import cx from 'classnames';
import './style.scss';


class Modal extends React.Component {
  static defaultProps = {
    buttons: [
      { text: '取消' },
      { text: '确定', primary: true }
    ]
  }

  render() {
    const { title, className, children, buttons, visible } = this.props;
    if (!visible) {
      return null;
    }
    return (
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
        </div>
    );
  }
}

// Modal.defaultProps = {

// };


export default Modal;