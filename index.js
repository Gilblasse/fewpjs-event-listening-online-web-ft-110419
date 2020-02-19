function addingEventListener(elemt) {
  const input = document.getElementById('input');
  
  input.addEventListener('click', function(event) {
    alert('I was clicked!');
  });
}

addingEventListener(document.querySelector('#main'))