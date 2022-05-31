/*  БАР
  1. Создайте объект типа visitor, он должен содержать следующие поля
    - name: string
    - age: number
    - capacity: number, от 100 до 0. Уменьшается на 10, если пить слабоалкоголку, на 20 если алкогольные напиштки.
                Увеличивается на 5, если есть еду
    - canDrink - функция, котрая должна вернуть true/false в зависимости от того хватает ли capacity на данный напиток
    - puke - функция, выводит в консоль 🤮 и увеличивает capacity на 15
    - drink - функция, принимает объект beverage, если хватает capacity, то меняет capacity в соответствии с capacity.type,
              если capacity не хватает то вызывает функцию puke
    - eat - функция, принимает объект snack, повышает capacity на 5, а если snaсk.isEffective то на 10
  2. Создайте объект bar
    - name: string
    - capacity: number - максимальное количество посетителей
    - drinks: array - список доступных напитков. Заполнен оьектами типа beverage на ваше усмотрение
    - snaks: array - список доступных закусок. Заполнен обьектами типа snack на ваше усмотрение
    - visitors: array - список посетителей, объекты типа visitor
    - enter: функция, должна принимать как аргумент visitor,
             если возраст пользователя равен или больше 18 и в баре есть места -  добавить обьект с массив visitors и вызвать функцию greet.
             Если постетитель слишком молод - вызвать функицию expel, если нет мест - функцию decline
    - greet: функция, которая должна выводить в консоль текст типа: "Привет, %имя посетителя%, добро пожаловать в %имя бара%!"
    - expel: функция, которая должа выводить в консоль текст: "Проваливай!"
    - decline: функция, которая должна выводить текст: "Извини, %имя посетителя%, сегодня %имя бара% переполнен, попробу позже!"
    - makeOrder: функция, которая принмает аргумент item типа string и производит поиск по имени.
             Сначала в drinks, потом в snaсks, пока не найдет нужный товар.
             Если товар с таким именем найден - функция должна удалить этот товар из соответствующего массива и вернуть объект.
             Если искомый товар не найден - вывести сообщение в консоль: "Извините, %имя товара% больше нет!"
    3. Описание объекта beverage
    - name: string;
    - type: highAclogol/lowAlcogol
  4. Описание объекта snack:
    - name: string
    - isEffective: boolean

  5. Пример использования
  const vodka = bar.makeOrder('водка')
  valera.drink(vodka);*/


let beverage = {
    name: "name",
    type: "type",
};
let snack = {
    name: "name",
    isEffective: false,
}

let visitor = {
    name: "",
    age: 0,
    capacity: 0,
    canDrink(beverage) {
        let capacityDrink = 0;

       if (beverage.type === "lowAlcohol") {
            capacityDrink = 10;
        } else if (beverage.type === "highAlcohol") {
            capacityDrink = 20;
        }
        return this.capacity >= capacityDrink;
    },
    puke() {
        this.capacity = Math.min(100, this.capacity + 15); //функция Math.min() выбираем минимальное число из переданных чисел
        console.log(this.name + ": 🤮🤮🤮")
    },
    drink(beverage) {
        if (!beverage?.type) {
            return;
        }
        if (this.canDrink(beverage)) {
            switch (beverage.type) {
                case "lowAlcohol":
                    this.capacity -= 10;
                    break;
                case "highAlcohol":
                    this.capacity -= 20;
                    break;
                default:
                    console.log(`Этот товар недоступен!`);
            }

        } else {
            this.puke();
        }

    },
    eat: function (snack) {

        if (snack.isEffective) {

            this.capacity += 10;
        } else {
            this.capacity += 5;
        }

        if (this.capacity > 100) {
            this.capacity = 100;
        }
    }
};

let bar = {
    name: "GOOSE PUB",
    capacity: 2,
    drinks: [
        {name: "Сognac", type: "highAlcohol"},
        {name: "Tequila", type: "highAlcohol"},
        {name: "Shake", type: "lowAlcohol"},
    ],
    snacks: [
        {name: "Burger", isEffective: true},
        {name: "Dorado", isEffective: true},
    ],
    visitors: [],
    enter(visitor) {
        let isCapacity = this.capacity > this.visitors.length;
        if (visitor.age >= 18 && isCapacity) {
            this.visitors.push(visitor);
            this.greet(visitor);
        } else if (visitor.age >= 18 && !isCapacity) {
            this.decline();
        } else {
            this.expel(visitor);
        }
    },
    greet(visitor) {
        console.log(`Привет, ${visitor.name}! Добро пожаловать в ${this.name}`);
    },
    expel() {
        console.log(`Проваливай!`);
    },
    decline(visitor) {
        console.log(`Извини ${visitor.name}! Сегодня ${this.name} переполнен! Попробуй позже!`);
    },
    makeOrder(item) {

        let findDrink = (arr) => {
            let i = arr.findIndex(index => index.name === item);
            let arrItem = arr[i];
            arr.splice(i, 1);
            return arrItem;
        }

        let drinkItem = findDrink(this.drinks);
        if (drinkItem !== undefined) {
            return drinkItem;
        } else {
            let snackItem = findDrink(this.snacks);
            if (snackItem !== undefined) {
                return snackItem;
            } /*else {
                drinkItem = beverage.type === undefined;
                snackItem = snack.isEffective = undefined;
                return {
                    drinkItem,
                    snackItem
                }

            }*/
        }
    },

}


// initialization OBJECT visitor
let luna = Object.create(visitor);
luna.name = "Luna";
luna.age = 30;
luna.capacity = 50;

let lisa = Object.create(visitor);
lisa.name = "Lisa";
lisa.age = 17;
lisa.capacity = 80;

let bob = Object.create(visitor);
bob.name = "Bob";
bob.age = 32;
bob.capacity = 100;


// initialization OBJECT beverage
const vodka = Object.create(beverage);
vodka.name = "Vodka";
vodka.type = "highAlcohol";

const whiskey = Object.create(beverage);
whiskey.name = "Whiskey";
whiskey.type = "highAlcohol";

const beer = Object.create(beverage);
beer.name = "Beer";
beer.type = "lowAlcohol";


// initialization OBJECT snack
const wings = Object.create(snack);
wings.name = "Chicken wings";
wings.isEffective = false;

const steak = Object.create(snack);
steak.name = "Steak";
steak.isEffective = true;

const chips = Object.create(snack);
chips.name = "Сhips";
chips.isEffective = false;


//initialization OBJECT Bar
bar.drinks.push(vodka, whiskey, beer);
bar.snacks.push(wings, steak, chips);
bar.visitors.push(bob);

console.log(bar);


// call
bar.enter(luna);
bar.enter(lisa);


const guinness = bar.makeOrder("Beer");
luna.drink(guinness);
const jack = bar.makeOrder("Whiskey");
bob.drink(jack);

const BoraBora = bar.makeOrder("Shake");
luna.drink(BoraBora);

const nemiroff = bar.makeOrder("Vodka");
luna.drink(nemiroff);

const sierra = bar.makeOrder("Tequila");
luna.drink(sierra);

const meat = bar.makeOrder("Steak");
bob.eat(meat);

const fish = bar.makeOrder("Dorado");
bob.eat(fish);
const newYork = bar.makeOrder("Burger");
bob.eat(newYork);

const chicken = bar.makeOrder("Chicken wings");
luna.eat(chicken);

const candy = bar.makeOrder("Candy");
if (candy) {
    luna.eat(candy);

}

const juice = bar.makeOrder("Juice");
if (juice) {
    luna.drink(juice);
}


luna.puke();
bob.puke();

console.log(luna);
console.log(bob);













