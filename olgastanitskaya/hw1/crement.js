/*3) создайте переменную counter  со значением 0.
  Создайте функцию crement, которая принимает аргумент num и должна:
  - увеличивать переменную counter на 1 в случае, если передано четное число
  - и уменьшать на 2, если передано не четное число
  */

let counter = 0;

function crement(num) {
    let ending = num % 2
    if (ending === 0) {
        counter++;
    } else {
        counter -= 2;
    }
    console.log(counter);
}

crement(-5);
