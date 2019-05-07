import React from 'react'
import Modal from './components/Modal';
import 'bootstrap/dist/css/bootstrap.css';


class Page extends React.Component {
  state = {
    visible: false
  }

  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     visible: false
  //   }
  // };

  onRequestClose = () => {
    this.setState({ visible: false });
  };

  onOpenClick = () => {
    this.setState({ visible: true });
  }

  render() {
    return (
      <div>
        <div className="btn-group">
          <button type="button" className="btn btn-primary" onClick={this.onOpenClick}>Open Dialog</button>
          <button type="button" className="btn btn-warning">Delete</button>
        </div>

        <Modal
          className="my-modal"
          title="React和ES6"
          visible={this.state.visible}
          onRequestClose={this.onRequestClose}
        >
          <ul>
            <li>生命周期</li>
            <li>动画</li>
          </ul>
        </Modal>
      </div>
    );
  }
}


export default Page;