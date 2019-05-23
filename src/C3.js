import React from 'react'
import Modal from './components/Modal';
import 'bootstrap/dist/css/bootstrap.css';
import './C3.scss';


class Page extends React.Component {
  state = {
    showModal: false
  }

  onModalRequestClose = () => {
    this.setState({ showModal: false });
  }

  onModalOk = () => {
    console.log('ok');
  }

  onModalCancel = () => {
    console.log('cancel');
  }

  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     showModal: false
  //   };
  // }

  handleDeleteItem = () => {
    Modal.confirm({
      title: '确认',
      message: '确定要删除吗',
      ok() {
        console.log('ok');
      },
      cancel() {
        console.log('cancel');
      }
    });
  }

  render() {
    return (
      <div>
        <div className="btn-group">
          <button type="button" className="btn btn-primary" onClick={() => this.setState({ showModal: true })}>Open Dialog</button>
          <button type="button" className="btn btn-warning" onClick={this.handleDeleteItem}>Delete</button>
        </div>
        <Modal
            className="es6-demo-modal"
            title="ES6 class"
            visible={this.state.showModal}
            onOk={this.onModalOk}
            onCancel={this.onModalCancel}
            onRequestClose={this.onModalRequestClose}>
          <div>
            <a href="https://www.google.com">ES6</a>又快又有趣
            <div>
              <h3>ES6</h3>
              <ul>
                <li>class fields - 实例属性</li>
                <li>arrow function - 箭头函数</li>
              </ul>
            </div>
            <div>
              <h3>React</h3>
              <ul>
                <li>生命周期</li>
                <li>Portal</li>
                <li>动画</li>
                <li>PropTypes</li>
              </ul>
            </div>
          </div>
        </Modal>
      </div>
    );
  }
}


export default Page;
