const items = document.querySelectorAll(".item");
console.log("Number of categories: ", items.length);

items.forEach((item) => {
  const category = item.firstElementChild.textContent;
  const elements = item.lastElementChild.children;
  console.log(`Category: ${category}
Elements: ${elements.length}`);
});
