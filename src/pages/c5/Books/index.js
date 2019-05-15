import React from 'react';
import cx from 'classnames';
import axios from 'axios';
import style from './style.scss';
import Svg from 'react-inlinesvg'


class BooksPage extends React.PureComponent {
  state = {
    books: []
  };

  async componentDidMount() {
    const { data } = await axios.get('http://192.168.31.216:4001/books?q=javascript');
    const books = data.entries;
    this.setState({ books });
  }

  render() {
    const { books } = this.state;
    return (
      <div className={style.page}>
        <div className={style.search}>
          <div className="wrapper">
            <Svg src={require('./img/search.svg')} />
            <input type="text" placeholder="搜索商品" />
          </div>
        </div>
        <ul className={style.list}>
          {
            books.map(book => (
              <li key={book.id} className={style.book}>
                <div className="left part">
                  <div className="image">
                    <img src={book.image} alt="" />
                  </div>
                </div>
                <div className="right part">
                  <div className="name">{book.name}</div>
                  <div className="author">{book.author}</div>
                  <LevelStar value={book.star} />
                  <Price price={book.price} />
                </div>
              </li>
            ))
          }
        </ul>
      </div>
    );
  }
}


const Price = ({ price }) => {
  const re = /(\d+)\.(\d+)/;
  const m = re.exec(price.toFixed(2));
  return (
    <div className="price-component">
      <span className="unit">&yen;</span>
      <span className="integer">{m[1]}</span>
      <span className="point">.</span>
      <span className="fraction">{m[2]}</span>
    </div>
  );
}


const LevelStar = ({ value }) => {
  const percent = Math.floor((value * 100) / 5);
  const style = { width: `${percent}%` };
  return (
    <div className={cx('level-star-component')}>
      <div className="bg">
        <div className="value" style={style}></div>
      </div>
    </div>
  );
};


export default BooksPage;
