import { comments } from "./comments.js";
//Домашнее задание №7:
//Уровень 1:

//2. Создать массив чисел от 1 до 10. Отфильтровать его таким образом, что бы мы получил массив чисел, начиная с 5.
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const partialNumbers = numbers.slice(4);

//3. Создать массив строк, относящихся к любой сущности (название фильмов/книг, кухонные приборы, мебель и т.д.), проверить, есть ли в массиве какая-то определенная сущность.
const fruits = ['apple', 'pineapple', 'banana', 'orange', 'pear'];
const hasApple = fruits.includes('apple');

//4. Написать функцию, которая аргументом будет принимать массив и изменять его порядок на противоположный ("переворачивать") . Два вышеуказанных массива с помощью этой функции перевернуть.
function reverseArray(array) {
  array.reverse();
}

reverseArray(numbers);
console.log(numbers);
reverseArray(fruits);
console.log(fruits);

//Уровень 2:
//7. Вывести в консоль массив тех комментариев, почта пользователей которых содержит ".com"
const comComments = comments.filter(comment => {
  return comment.email.includes('.com');
});

//8. Перебрать массив таким образом, что бы пользователи с id меньше или равно 5 имели postId: 2, а те, у кого id больше 5, имели postId: 1
const idComments = comments.map(comment => ({
  ...comment,
  postId: comment.id <= 5 ? 2 : 1
}));

//9. Перебрать массив, что бы объекты состояли только из айди и имени
const idAndNameComments = comments.map(comment => ({
  id: comment.id,
  name: comment.name
}));

//10. Перебираем массив, добавляем объектам свойство isInvalid и проверяем: если длина тела сообщения (body) больше 180 символов - устанавливаем true, меньше - false.
const validatedCommetns = comments.map(comment => ({
  ...comment,
  isInvalid: comment.body.leng > 180
}));
console.log(validatedCommetns)

//Уровень 3:
//11. Почитать про метод массива reduce. Используя его, вывести массив почт и провернуть тоже самое с помощью метода map
const emailArray = comments.reduce((accumulator, currentValue) => {
  accumulator.push(currentValue.email);
  return accumulator;
}, []);

const emailArrayWithMap = comments.map(comment => {
  return comment.email;
});

//12. Почитать про методы toString(), join() и перебрав массив с задания №11, привести его к строке.
const toStringArray = emailArray.toString();
const joinArray = emailArrayWithMap.join(' | ')
