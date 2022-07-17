let counter = document.getElementById("count-el");
let saveEl = document.getElementById("save-el");
let count = 0;

function increment() {
  count++;
  counter.innerText = count;
}

function save() {
  let countDash = count + " - ";
  saveEl.innerText += " " + countDash;

  counter.textContent = 0;
  count = 0;
  console.log(count);
}
