const sizeControl = document.getElementById("font-size-control");
const text = document.getElementById("text");

sizeControl.addEventListener("input", () => {
  const addPixel = sizeControl.value + "px";
  text.style.fontSize = addPixel;
});
