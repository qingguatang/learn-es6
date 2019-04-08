// initMenu();

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

console.log(1, java);

for (let i = 0; i < 10; i++) {
  let j = i + 1;
  setTimeout(() => {
    console.log(i, j);
  }, 10);
}

