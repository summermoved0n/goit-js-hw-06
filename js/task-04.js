const divCounter = document.getElementById("counter");
const spanValue = document.getElementById("value");
const decrementBtn = divCounter.querySelector('[data-action="decrement"]');
const incrementBtn = divCounter.querySelector('[data-action="increment"]');

let counterValue = 0;

const newCounterValue = () => {
  spanValue.textContent = counterValue;
}

decrementBtn.addEventListener('click', () => {
  counterValue -= 1;
  newCounterValue();
})

incrementBtn.addEventListener("click", () => {
  counterValue += 1;
  newCounterValue();
});
