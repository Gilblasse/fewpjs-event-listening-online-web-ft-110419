const input = document.getElementById('main');

function addingEventListener(elemt) {
  
  input.addEventListener('click', function(event) {
    alert('I was clicked!');
  });
}

addingEventListener(input)