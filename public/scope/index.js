

function initMenu() {
  var lis;

  lis = document.querySelectorAll('.menu li');
  for (let i = 0; i < lis.length; i++) {
    console.log(i);
    lis[i].addEventListener('click', function() {
      console.log(i);
    });
  }
  // console.log(i);
}


var java = '一个岛';

// inComputer();

function inComputer() {
  var java = '一门计算机语言';
  console.log(2, java);

  var inMyHome = true;
  if (inMyHome) {
    let java = '一只猫';
    console.log(4, java);
  }

  console.log(2, java);

  inDev();
  function inDev() {
    var java = '面向对象编程语言';
    console.log(3, java);
  }
}

// console.log(1, java);

// for (let i = 0; i < 10; i++) {
//   let j = i + 1;
//   setTimeout(() => {
//     console.log(i, j);
//   }, 10);
// }

// 
function minMax(list) {
  // var min = 0;
  let min = list[0];
  let max = list[0];
  // let current;
  // for (let i = 0; i < list.length; i++) {
  for (const current of list) {
    // ...
    // const current = list[i];
    if (min > current) {
      // 副作用操作
      min = current;
    } else if (max < current) {
      max = current;
    }
  }
  return [min, max];
}

const [min, max] = minMax([34, 22, 1, 67, 122]);
console.log(min, max);

const data = minMax([1, 2,5, 11]);
console.log(data[0], data[1]);

// const 常量
const a = 1;
// a = 2;

let b = 4;
// b = 6;

// 只读引用变量
const obj = {
  name: 'es6',
  version: 9
};

// obj = {
//   name: 'es9'
// };
obj.name = 'es9';


// ES6中: 尽量用const, 少用let, 不用var

// 代码质量和if语句的密度成反比
// 代码质量和副作用语句密度成反比