import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import style from './style.scss';


class Page extends React.Component {
  componentDidMount() {
    document.title = 'React生命周期'
  }

  render() {
    return (
      <div className={style.page}>
        <ul className="list-group">
          <li className="list-group-item">
            <a href="/c5/qrcode">Qrcode</a>
          </li>
        </ul>
      </div>
    )
  }
}


export default Page;
