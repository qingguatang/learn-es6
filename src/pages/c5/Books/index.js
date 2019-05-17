import React from 'react';
import cx from 'classnames';
import axios from 'axios';
import style from './style.scss';
import qs from 'query-string';
import Svg from 'react-inlinesvg'
import ScrollView from 'components/ScrollView';


class BooksPage extends React.PureComponent {
  state = {
    query: {
      page: 1,
      search: ''
    },
    books: []
  };

  onSearch = search => {
    this.load({ search });
  };

  onScroll = async() => {
    const { query } = this.state;
    await this.load({ page: query.page + 1 }, true);
  };

  componentDidMount() {
    this.load({ search: 'javascript' });
  }

  async load(query, append) {
    query = {...this.state.query, ...query};
    const loc = window.location;
    const { data } = await axios.get(`${loc.protocol}//${loc.hostname}:4001/books?${qs.stringify(query)}`);
    const books = data.entries;
    const nextBooks = append ? [...this.state.books, ...books] : books;
    this.setState({ books: nextBooks, query });
  }

  render() {
    const { books } = this.state;
    return (
      <div className={style.page}>
        <Search onSearch={this.onSearch} />
        <ScrollView className={style.scroll} onScroll={this.onScroll}>
          <ul className={style.list}>
            {
              books.map(book => (
                <BookItem key={book.id} book={book} />
              ))
            }
          </ul>
        </ScrollView>
      </div>
    );
  }
}


const Search = ({ onSearch }) => {
  const onKeyDown = e => {
    if (e.keyCode === 13) {
      onSearch(e.target.value);
    }
  };
  return (
    <div className={style.search}>
      <div className="wrapper">
        <Svg src={require('./img/search.svg')} />
        <input type="text" placeholder="搜索商品" onKeyDown={onKeyDown} />
      </div>
    </div>
  );
};


const BookItem = ({ book }) => (
  <li className={style.book}>
    <div className="left part">
      <div className="image">
        <a href={book.link}>
          <img src={book.image} alt="" />
        </a>
      </div>
    </div>
    <div className="right part">
      <a className="name" href={book.link}>{book.name}</a>
      <div className="author">{book.author}</div>
      <LevelStar value={book.star} />
      <Price price={book.price} />
    </div>
  </li>
);


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

