const searchInput = document.getElementById('searchInput');
const inputResult = document.createElement('h3');
inputResult.classList.add('input-result');

function renderText() {
  console.log(searchInput.value);

  var searchInputValue = document.createTextNode(searchInput.value);
  inputResult.appendChild(searchInputValue);
  document.body.appendChild(inputResult);
}

searchInput.addEventListener('keyup', renderText);
searchInput.addEventListener('change', renderText);
