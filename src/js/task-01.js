
console.log('Number of categories:', document.querySelector('#categories').children.length);

// console.log('Category:',document.querySelector('li.item').firstElementChild.textContent);


const categoriesUl = Array.from( document.querySelectorAll("ul#categories>li.item")  );

  const categoriesList = Array.from(
    document.querySelectorAll("ul#categories li.item ul ")
  );

  const categoriesArr = [];

  categoriesList.forEach(element => {
    categoriesArr.push(
      `Category: ${element.previousElementSibling.textContent}, Elements: ${element.children.length}`
    );
    
  });

  for (let i = 0; i < categoriesArr.length ; i += 1) {
    console.log(categoriesArr[i]);
    
  }
