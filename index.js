const input = document.getElementById('main');

function addingEventListener() {
  
  input.addEventListener('click', function(event) {
    return alert('I was clicked!');
  });
}

addingEventListener()