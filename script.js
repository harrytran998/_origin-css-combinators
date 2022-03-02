function handleSubmit(event) {
  const cake = document.querySelector('#cake');
  const selectedCake = document.querySelector('#selectedCake');
  const candy = document.querySelector('#candy');
  const selectedCandy = document.querySelector('#selectedCandy');

  if (selectedCake && cake) {
    selectedCake.innerHTML = cake.value;
  }

  if (selectedCandy && candy) {
    selectedCandy.innerHTML = candy.value;
  }
}

const form = document.getElementById('form');
const log = document.getElementById('log');
form.addEventListener('submit', logSubmit);
