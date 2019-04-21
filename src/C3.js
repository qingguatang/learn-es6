import React from 'react'
import Modal from './components/Modal';
import 'bootstrap/dist/css/bootstrap.css';


class Page extends React.Component {
  state = {
    showModal: false
  }

  handleOk = () => {
    console.log('ok');
    this.setState({ showModal: false });
  }

  handleCancel = () => {
    console.log('cancel');
    this.setState({ showModal: false });
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
            title="ES6面向对象编程应用"
            visible={this.state.showModal}
            onOk={this.handleOk}
            onCancel={this.handleCancel}>
          <div>
            通过实例学习<a href="#">ES6</a>又快又有趣
          </div>
        </Modal>
      </div>
    );
  }
}


export default Page;