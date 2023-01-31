/*
1. Найти по id, используя getElementById, элемент с id равным "super_link" и
вывести этот элемент в консоль.
*/
let superLink = document.getElementById("super_link");
console.log(superLink);

/*
2. Внутри всех элементов на странице, которые имеют класс "card-link",
поменяйте текст внутри элемента на "ссылка".
*/
let cardLink = document.querySelectorAll(".card-link");
cardLink.forEach(
  (element, index, array) => (array[index].textContent = "ссылка")
);

/*
3. Найти все элементы на странице с классом "card-link", которые лежат в
элементе с классом "card-body" и вывести полученную коллекцию в консоль.
*/

let cardLinkInCardBody = document.querySelectorAll(".card-body .card-link");
console.log(cardLinkInCardBody);
/*
4. Найти первый попавшийся элемент на странице у которого есть атрибут
data-number со значением 50 и вывести его в консоль.
*/
let dataNumber50 = document.querySelector("[data-number='50']");
console.log(dataNumber50);
/*
5. Выведите содержимое тега title в консоль.
*/
console.log(document.title);
/*
6. Получите элемент с классом "card-title" и выведите его родительский узел
в консоль.
*/
console.log(document.querySelector(".card-title").parentNode);
/*
7. Создайте тег p, запишите внутри него текст "Привет" и добавьте созданный
тег в начало элемента, который имеет класс "card".
*/
let tegP = document.createElement("p");
tegP.textContent = "Привет";
document.querySelector(".card").prepend(tegP);
console.log(document.querySelector(".card"));
/*
 8. Удалите тег h6 на странице.
 */
document.querySelector("h6").remove();
