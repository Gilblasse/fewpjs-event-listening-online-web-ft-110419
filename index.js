const input = document.getElementById('main');

function addingEventListener() {
  
  input.addEventListener('click', function(event) {
    alert('I was clicked!');
  });
}

addingEventListener()