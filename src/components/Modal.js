import React from 'react'
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

  render() {
    const { title, visible, children, onCancel, buttons } = this.props;
    return (
      <Transition transitionName="example" transitionEnterTimeout={300} transitionLeaveTimeout={300}>
      {
        visible ? 
        <div>
          <div className="modal" style={{ display: 'block' }} tabIndex="-1" role="dialog">
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">{title}</h5>
                  <button type="button" className="close" data-dismiss="modal" aria-label="Close"
                      onClick={onCancel}>
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
                      onClick={this.props[`on${item.name}`]}
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

export default Modal;