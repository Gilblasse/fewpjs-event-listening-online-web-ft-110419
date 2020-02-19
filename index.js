const input = document.getElementById('main');

function addingEventListener(elemt) {
  
  elemt.addEventListener('click', function(event) {
    alert('I was clicked!');
  });
}

addingEventListener(input)