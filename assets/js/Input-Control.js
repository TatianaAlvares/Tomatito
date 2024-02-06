function increaseInput(obj) {
  let value = document.getElementById(obj).value;
  value++;
  document.getElementById(obj).value = value;
}

function decreaseInput(obj) {
  let value = document.getElementById(obj).value;
  value--;
  document.getElementById(obj).value = value < 1 ? 1 : value;
}