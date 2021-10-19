const categoriesItemsRef = document.querySelectorAll(".item");

const getListInfo = function (categoriesItems = []) {
  console.log(`Number of categories: ${categoriesItems.length}`);

  categoriesItems.forEach((category) => {
    console.log(`Category: ${category.firstElementChild.textContent}`);
    console.log(`Elements: ${category.querySelectorAll("li").length}`);
  });
};

console.log(getListInfo(categoriesItemsRef));
