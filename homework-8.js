//Домашнее задание №8:
//4. Используя метод .reduce(), получить массив объектов, где ключем является название продукта, а значением - его описание
import { productsInfo } from "./product.js";
const productTitleAndDescription = productsInfo.reduce((acc, product) => {
  const item = {
    [product.title]: product.description
  }
  acc.push(item);
  return acc;
}, []);

//5*. Реализовать функцию, которая при старте страницы выводит сообщение (через функцию prompt) "Сколько карточек отобразить? От 1 до 5" и в зависимости от результата - будет выводить введенное количество. Должна быть защита от ввода других значений (проверка if). То-есть: у нас будет 2 функции, одна возвращает количество карточек, которое нужно ввести, другая - рендерить эти карточки (принимая массив аргументом)
function getCardsCount() {
  const count = prompt("Сколько карточек отобразить? От 1 до 5");
  const num = parseInt(count);

  if (!isNaN(num) && num >= 1 && num <= 5) {
    return num;
  } else {
    alert("Ведите число от 1 до 5");
    return getCardsCount();
  }
}

const prodcutTemplate = document.querySelector('#product-template');
const productContainer = document.querySelector('.product-card-container');

function renderProductCards(dataArray) {
  dataArray.forEach(product => {
    const productClone = prodcutTemplate.content.cloneNode(true);
    productClone.querySelector('.product-card__img').src = `images/${product.image}.png`;
    productClone.querySelector('.product-card__for-skin').textContent = product.skinType;
    productClone.querySelector('.product-card__title').textContent = product.title;
    productClone.querySelector('.product-card__description').textContent = product.description;
    productClone.querySelector('.price').innerHTML = ` ${product.price} &#8381;`;

    const list = productClone.querySelector('.product-card__composition-list');
    product.composition.forEach(item => {
      const li = document.createElement('li');
      li.classList.add('product-card__item');
      li.textContent = item;
      list.appendChild(li);
    });

    productContainer.appendChild(productClone);
  });
}

const countToDisplay = getCardsCount();
const productsToShow = productsInfo.slice(0, countToDisplay);

renderProductCards(productsToShow)