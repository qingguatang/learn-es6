import React from 'react'
import Modal from './components/Modal';
import 'bootstrap/dist/css/bootstrap.css';


class Page extends React.Component {
  render() {
    return (
      <div>
        <div className="btn-group">
          <button type="button" className="btn btn-primary">Open Dialog</button>
          <button type="button" className="btn btn-warning">Delete</button>
        </div>

        <Modal
          className="my-modal"
          title="React和ES6"
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