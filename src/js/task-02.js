const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


let ingredientsList = document.querySelector('#ingredients');

const ingredientsLabel = ingredients.map(ingredient=>{
  let item = document.createElement('li');
  item.textContent=ingredient;
  return item;
})

ingredientsList.append(...ingredientsLabel)

