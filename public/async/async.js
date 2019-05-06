class MyPromise {
  resolve = data => {

  };

  reject = error => {

  };

  constructor(executor) {
    executor(this.resolve, this.reject);
  }

  then(onResolve, onReject) {
    return new MyPromise((resolve, reject) => {

    });
  }
}


function sleep(timeout) {
  return new MyPromise((resolve, reject) => {
    setTimeout(resolve, timeout);
  });
}


console.log('start');
sleep(1000).then(() => {
  console.log('end');
});
