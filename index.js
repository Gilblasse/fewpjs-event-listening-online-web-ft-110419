const input = document.getElementById('main');

function addingEventListener() {
  
  input.addEventListener('click', function(event) {
    return 'I was clicked!';
  });
}

addingEventListener()