
console.log('Number of categories:', document.querySelector('#categories').children.length);


  const categoriesList = Array.from(document.querySelectorAll("ul#categories li.item ul ")
  );



  categoriesList.forEach(element => {
    console.log(`      `);

    console.log(`Category: ${element.previousElementSibling.textContent}`);

    console.log(`Elements: ${element.children.length}`);
  });

 
