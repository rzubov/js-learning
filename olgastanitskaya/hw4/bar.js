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
        let capacityDrink;

        if (beverage.type === "lowAclogol") {
            capacityDrink = 10;
        } else if (beverage.type === "highAclogol") {
            capacityDrink = 20;

        } else if (beverage.type === "nonAlcohol") {
            capacityDrink = 0;
        } else {
            console.log("This product is already not available!!!")
        }

        return this.capacity > capacityDrink;
    },
    puke() {

        this.capacity += 15;
        if (this.capacity > 100) {
            this.capacity = 100;
        }
        console.log(this.name + ": 🤮🤮🤮")
    },
    drink(beverage) {

        let capacityDrink;

        if (beverage.type === "lowAclogol") {
            capacityDrink = 10;
        } else if (beverage.type === "highAclogol") {
            capacityDrink = 20;

        } else if (beverage.type === "nonAlcohol") {
            capacityDrink = 0;
        }

        if (this.capacity > capacityDrink) {
            switch (beverage.type) {
                case "highAclogol":
                    this.capacity -= capacityDrink;
                    console.log(this.name + " drink " + beverage.name);
                    break;
                case "lowAclogol":
                    this.capacity -= capacityDrink;
                    console.log(this.name + " drink " + beverage.name);
                    break;
                case "nonAlcohol":
                    this.capacity -= capacityDrink;
                    console.log(this.name + " drink " + beverage.name);
                    break;
                default:
                    console.log(`This alcohol isn't exist`);
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
        console.log(this.name + " ate " + snack.name);
    }
};

let bar = {
    name: "GOOSE PUB",
    capacity: 3,
    drinks: [
        {name: "Сognac", type: "highAclogol"},
        {name: "Shake", type: "lowAclogol"},
        {name: "Red bull", type: "nonAclogol"}
    ],
    snacks: [],
    visitors: [],
    enter(visitor) {
        let isCapacity = this.capacity > this.visitors.length;
        if (visitor.age >= 18 && isCapacity) {
            this.visitors.push(visitor);
            this.greet(visitor);
        } else if (visitor.age >= 18 && !isCapacity) {
            this.decline(visitor)
        } else {
            this.expel(visitor);
        }
    },
    greet(visitor) {
        console.log(`Hi, ${visitor.name}! Welcome to ${this.name}`)
    },
    expel(visitor) {
        console.log(`GO AWAY ${visitor.name}! You are less 18 old!`)
    },
    decline(visitor) {
        console.log(`SORRY ${visitor.name}! Today ${this.name} is full! See you later!`)
    },
    makeOrder(item) {
        let result;
        let count = 0;
        this.drinks.forEach(index => {
            result = index.name.includes(item);

            if (result) {
                console.log(count);
                let currentIndex = this.drinks.indexOf(index);
                this.drinks.splice(currentIndex, 1);
                return this.drinks;
            }else {
                count=-1;
            }
        });
        if (count === 0) {
            this.snacks.forEach(index => {
                result = index.name.includes(item);

                if (result) {
                    let currentIndex = this.snacks.indexOf(index);
                    this.snacks.splice(currentIndex, 1);
                    return this.snacks;
                }
            });
        }
        else if(count===-1){
            console.log(count);
            console.log(`This product is already not available!`)
        }
    },

}


// initialization OBJECT visitor
let luna = Object.create(visitor);
luna.name = "Luna";
luna.age = 30;
luna.capacity = 60;

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
vodka.type = "highAclogol";

const whiskey = Object.create(beverage);
whiskey.name = "Whiskey";
whiskey.type = "highAclogol";

const beer = Object.create(beverage);
beer.name = "Beer";
beer.type = "lowAclogol";

const water = Object.create(beverage);
water.name = "Water";
water.type = "nonAlcohol";


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
bar.drinks.push(vodka, whiskey, beer, water);
bar.snacks.push(wings, steak, chips);
bar.visitors.push(bob);

console.log(bar);


// call
bar.enter(luna);
bar.enter(lisa);


bar.makeOrder('Shakef');
console.log(bar);
luna.drink(water);

luna.canDrink(vodka);
luna.drink(vodka);
console.log(luna);
luna.drink(whiskey);
console.log(luna);
luna.drink(beer);
console.log(luna);
luna.drink(water);
console.log(luna);
luna.drink(beer);
console.log(luna);
luna.drink(beer);
console.log(luna);
luna.eat(wings);
console.log(luna);
luna.eat(steak);
console.log(luna);







