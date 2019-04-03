initMenu();

function initMenu() {
  var i;
  var lis
  lis = document.querySelectorAll('.menu li');

  for (var i = 0; i < lis.length; i++) {
    handleEvent(i);
  }

  function handleEvent(i) {
    lis[i].addEventListener('click', function() {
      console.log(i);
    });
  }
}