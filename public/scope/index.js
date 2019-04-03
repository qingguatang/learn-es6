initMenu();

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