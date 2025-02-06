function getElement(tag) {
  let element = document.querySelector(tag);
  if (!element) {
    throw new Error(`Element ${tag} not found`);
  }
  return element;
}

let button = getElement("#btn");
let input = getElement("#input");

button.addEventListener("click", (event) => {
  try {
    event.preventDefault();
    if (input.value.length === 0) {
      throw new Error("Enter value");
    }
    console.log("hi");
  } catch (error) {
    alert(error.message);
  }
});
console.log("hi");
