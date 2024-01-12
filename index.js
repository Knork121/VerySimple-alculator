const display = document.getElementById("display");
const defaultValue = 0;

function clearDispay() {
  display.value = "";
}

function addToDisplay(act) {
  display.value += act;
}

function result() {
  try {
    display.value = eval(display.value);
  } catch {
    display.value = defaultValue;
  }
}
