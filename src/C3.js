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

  render() {
    return (
      <div>
        <button className="btn btn-primary" onClick={() => this.setState({ showModal: true })}>Open Dialog</button>
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