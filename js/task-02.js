const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const listContainerRef = document.querySelector("#ingredients");

const createListItems = (itemsArray = []) => {
  return itemsArray.map((item) => {
    const listItemRef = document.createElement("li");
    listItemRef.textContent = item;
    return listItemRef;
  });
};

const listItems = createListItems(ingredients);

listContainerRef.append(...listItems);
console.log(listContainerRef);
