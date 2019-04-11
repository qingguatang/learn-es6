import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

const s = sum(1, 2, 3, 4, 5);
console.log(s);

function sum(...args) {
  console.log(args);
  // let sum = 0;
  // for (let i = 0; i < args.length; i++) {
  //   sum += args[i];
  // }
  // return sum;

  return args.reduce((a, b) => a + b);
}


function minMax(...args) {
  const min = args.reduce((a, b) => a < b ? a : b);
  const max = args.reduce((a, b) => a < b ? b : a);
  return [min, max];
}

const [min, max] = minMax(11, 22, 1, 4, 5);
console.log(min, max);


// Array: map, reduce, filter
