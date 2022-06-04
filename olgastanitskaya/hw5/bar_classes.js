class Beverage {
    name;
    type;

    constructor(name, type) {
        this.name = name;
        this.type = type;
    }
}

class Snack {
    name;
    isEffective;

    constructor(name, isEffective) {
        this.name = name;
        this.isEffective = isEffective;
    }
}

class Visitor {
    name;
    age;
    capacity;

    constructor(name, age, capacity) {
        this.name = name;
        this.age = age;
        this.capacity = capacity;
    }

    canDrink(Beverage) {
        let capacityDrink = 0;

        if (Beverage.type === "lowAlcohol") {
            capacityDrink = 10;
        } else if (Beverage.type === "highAlcohol") {
            capacityDrink = 20;
        }
        return this.capacity >= capacityDrink;
    }

    puke() {
        this.capacity = Math.min(100, this.capacity + 15); //функция Math.min() выбираем минимальное число из переданных чисел
        console.log(this.name + ": 🤮🤮🤮")
    }

    drink(Beverage) {
        if (!Beverage?.type) {
            return;
        }
        if (this.canDrink(Beverage)) {
            switch (Beverage.type) {
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

    }

    eat(Snack) {
        if (Snack.isEffective) {
            this.capacity += 10;
        } else {
            this.capacity += 5;
        }
        this.capacity = Math.min(100, this.capacity);
    }

}

class Bar {

    name;
    capacity;

    constructor(name, capacity) {
        this.name = name;
        this.capacity = capacity;
    }

    drinks = [
        {name: "Сognac", type: "highAlcohol"},
        {name: "Tequila", type: "highAlcohol"},
        {name: "Shake", type: "lowAlcohol"},
    ];
    snacks = [
        {name: "Burger", isEffective: true},
        {name: "Dorado", isEffective: true},
    ];
    visitors = [];


    enter(Visitor) {
        let isCapacity = this.capacity > this.visitors.length;
        if (Visitor.age >= 18 && isCapacity) {
            this.visitors.push(Visitor);
            this.greet(Visitor);
        } else if (Visitor.age >= 18 && !isCapacity) {
            this.decline(Visitor);
        } else {
            this.expel();
        }
    }

    greet(Visitor) {
        console.log(`Привет, ${Visitor.name}! Добро пожаловать в ${this.name}`);
    }

    expel() {
        console.log(`Проваливай!`);
    }

    decline(Visitor) {
        console.log(`Извини ${Visitor.name}! Сегодня ${this.name} переполнен! Попробуй позже!`);
    }

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
            }
        }
    }

}

const richard = new Visitor("Richard", 40, 100);
const robert = new Visitor("Robert", 10, 100);
const angela = new Visitor("Angela", 23, 40);
const mila = new Visitor("Mila", 50, 95);
const thomas = new Visitor("Thomas", 18, 10);
const tina = new Visitor("Tina", 18, 23);


const goosePub = new Bar("Goose Pub", 2);
const moskvich = new Bar("Moskvich bar", 3);


const vodka = new Beverage("Vodka", "highAlcohol");
const beer = new Beverage("Beer", "lowAlcohol");
const whiskey = new Beverage("Whiskey", "highAlcohol");
const wine = new Beverage("Wine", "highAlcohol");
const b52 = new Beverage("B52", "highAlcohol");
const longer = new Beverage("Longer", "lowAlcohol");


const wings = new Snack("fry Chicken wings", false);
const steak = new Snack("Steak", true);
const chips = new Snack("Chips Pringles", false);

goosePub.drinks.push(vodka, beer, whiskey);
goosePub.snacks.push(wings, steak, chips);

goosePub.enter(richard);
goosePub.enter(robert);
goosePub.enter(angela);
goosePub.enter(mila);

const guinness = goosePub.makeOrder("Beer");
angela.drink(guinness);

const jack = goosePub.makeOrder("Whiskey");
richard.drink(jack);

const BoraBora = goosePub.makeOrder("Shake");
angela.drink(BoraBora);

const nemiroff = goosePub.makeOrder("Vodka");
angela.drink(nemiroff);

const sierra = goosePub.makeOrder("Tequila");
angela.drink(sierra);

const meat = goosePub.makeOrder("Steak");
richard.eat(meat);

const fish = goosePub.makeOrder("Dorado");
richard.eat(fish);

const newYork = goosePub.makeOrder("Burger");
richard.eat(newYork);

const chicken = goosePub.makeOrder("fry Chicken wings");
angela.eat(chicken);

const candy = goosePub.makeOrder("Candy");
if (candy) {
    luna.eat(candy);

}

const juice = goosePub.makeOrder("Juice");
if (juice) {
    angela.drink(juice);
}


moskvich.enter(thomas);
moskvich.enter(tina);

moskvich.drinks.push(b52, wine, longer);
moskvich.snacks.push(wings, steak, chips);

const shoot = moskvich.makeOrder("B52");
thomas.drink(shoot);

const  roseWine= moskvich.makeOrder("Wine");
thomas.drink(roseWine);

const long = moskvich.makeOrder("Longer");
tina.drink(long);

console.log(goosePub);
console.log(moskvich);

