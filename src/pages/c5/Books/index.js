import React, { PureComponent } from 'react';
import cx from 'classnames';
import axios from 'axios';
import style from './style.scss';
import qs from 'query-string';
import Svg from 'react-inlinesvg'
import ScrollView from 'components/ScrollView';
import { FixedSizeList as List } from 'react-window';


class BooksPage extends PureComponent {
  state = {
    query: {
      page: 1,
      search: ''
    },
    books: []
  };

  onSearch = search => {
    // show loading
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
    const books = await requestBooks(query);
    const nextBooks = append ? [...this.state.books, ...books] : books;
    this.setState({ books: nextBooks, query });
  }

  render() {
    const { books } = this.state;
    return (
      <div className={style.page}>
        <Search onSearch={this.onSearch} />
        <ScrollView className={style.scroll} onScroll={this.onScroll}>
          <div className={style.list}>
            {
              books.map(book => (
                <BookItem key={book.id} book={book} />
              ))
            }
          </div>
        </ScrollView>
      </div>
    );
  }
}


class VirtualBooksPage extends PureComponent {
  state = {
    search: 'javascript'
  }

  constructor(props) {
    super(props);
    this.listSize = {
      width: window.screen.availWidth,
      height: window.screen.availHeight - 46
    };
  }

  onSearch = search => {
    this.setState({ search });
  };

  render() {
    const listSize = this.listSize;
    return (
      <div className={cx(style.page)}>
        <Search onSearch={this.onSearch} />
        <List height={listSize.height} itemCount={1000} itemSize={200} width={listSize.width}
            itemData={this.state.search}>
          {Row}
        </List>
      </div>
    );
  }
}

class Row extends PureComponent {
  state = {
    book: null
  };

  componentDidMount() {
    this.load();
  }

  componentWillUnmount() {
    this.disposed = true;
  }

  componentDidUpdate(prev) {
    if (prev.data !== this.props.data) {
      this.load();
    }
  }

  async load() {
    const { data: search, index } = this.props
    const book = await loadBook(search, index);
    this.disposed || this.setState({ book });
  }

  render() {
    const { style } = this.props;
    const { book } = this.state;
    return (
      <div style={style}>
        {
          book ? <BookItem className="virtual" book={book} /> : <BookItemSkeleton />
        }
      </div>
    );
  }
}


const BookItemSkeleton = () => (
  <div className={cx(style.book, 'skeleton')}>
    <div className="left part">
      <div className="image"></div>
    </div>
    <div className="right part">
      <div className="name"></div>
      <div className="author"></div>
    </div>
  </div>
);


// with naive cache support
const bookCache = new Map();
async function loadBook(search, index) {
  const pageSize = 20;
  const page = Math.floor(index / pageSize);

  const key = `${search}$$$${page}`;
  let defer = bookCache.get(key);
  if (!defer) {
    defer = requestBooks({ search, page: page + 1 });
    bookCache.set(key, defer);
    setTimeout(() => bookCache.remove(key), 60000);
  }

  const books = await defer;
  return books[index - page * pageSize];
}


async function requestBooks(query) {
  const loc = window.location;
  const { data } = await axios.get(`${loc.protocol}//${loc.hostname}:4001/books?${qs.stringify(query)}`);
  return data.entries;
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
        <input type="search" placeholder="搜索商品" onKeyDown={onKeyDown} />
      </div>
    </div>
  );
};


const BookItem = ({ className, book }) => (
  <div className={cx(style.book, className)}>
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
  </div>
);


const Price = ({ price }) => {
  price = price || 0;
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
export { BooksPage, VirtualBooksPage };

