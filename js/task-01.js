const items = document.querySelectorAll(".item");
console.log("Number of categories: ", items.length);

items.forEach((item) => {
  const category = item.querySelector("h2").textContent;
  const elements = item.querySelectorAll("li");
  console.log(`Category: ${category}
Elements: ${elements.length}`);
});
