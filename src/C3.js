import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';


class Page extends React.Component {
  state = {
    showModal: false
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
        {this.state.showModal ? 
        <div>
          <div className="modal" style={{ display: 'block' }} tabIndex="-1" role="dialog">
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">Modal title</h5>
                  <button type="button" className="close" data-dismiss="modal" aria-label="Close"
                      onClick={() => this.setState({ showModal: false })}>
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div className="modal-body">
                  <p>Modal body text goes here.</p>
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                  <button type="button" className="btn btn-primary">Save changes</button>
                </div>
              </div>
            </div>
           </div>
          <div className="modal-backdrop fade show"></div>
        </div> : null
      }
      </div>
    );
  }
}


export default Page;