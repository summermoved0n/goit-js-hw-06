const input = document.getElementById("name-input");
const span = document.getElementById("name-output");

input.addEventListener("input", () => {
  const inputValue = input.value;

  if (inputValue.trim() === "") {
    span.textContent = "Anonymous";
  } else {
    span.textContent = inputValue;
  }
});
