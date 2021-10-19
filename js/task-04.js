const counter = {
  value: 0,
  increment() {
    this.value += 1;
  },
  decrement() {
    this.value -= 1;
  },
};

const decrementBtnRef = document.querySelector('[data-action="decrement"]');
const incrementBtnRef = document.querySelector('[data-action="increment"]');
const counterValueRef = document.querySelector("#value");

decrementBtnRef.addEventListener("click", () => {
  counter.decrement();
  counterValueRef.textContent = counter.value;
});
incrementBtnRef.addEventListener("click", () => {
  counter.increment();
  counterValueRef.textContent = counter.value;
});
