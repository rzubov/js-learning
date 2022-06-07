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
  constructor(name,age,capacity) {
    this.name = name;
    this.age = age;
    this.capacity = capacity;
  }
  canDrink(beverage) {
    return ((beverage.type === "highAlcogol") && (this.capacity >= 20) || (beverage.type === "lowAlcogol") && (this.capacity >= 10))
  }
  puke() {
    this.capacity += 15;
    console.log("🤮");
  }
  drink(beverage) {
    if (!this.canDrink(beverage)) {
      return this.puke();
    }
    if (beverage.type === "highAlcogol") {
      this.capacity -= 20
    } else if (beverage.type === "lowAlcogol") {
      this.capacity -= 10
    }
  }
  eat(snack) {
    if (snack.isEffective === false) {
      this.capacity += 5;
    } else {
      this.capacity += 10;
    }
  }
}

class Bar {
  name;
  capacity;
  constructor(name, capacity) {
    this.name = name;
    this.capacity = capacity;
  }
  drinks = []
  snacks = []
  visitors = []
  enter(visitor) {
      if (visitor.age >= 18 && this.capacity > this.visitors.length) {
      this.visitors.push(visitor);
      this.greet(visitor);
    } else if (visitor.age < 18) {
      this.expel();
    } else if (this.capacity <= this.visitors.length) {
      this.decline(visitor);
    }
  }

  greet(visitor) {
    console.log(`Привет, ${visitor.name}, добро пожаловать в ${this.name}!`)
  }
  expel() {
    console.log("Проваливай!")
  }
  decline(visitor) {
    console.log(`Извини, ${visitor.name}, сегодня ${this.name} переполнен, попробуй позже!`)
  }

  makeOrder(item) {
    let drinkOrder = this.drinks.find((el) => el.name === item);
    let snackOrder = this.snacks.find((el) => el.name === item);
      if(drinkOrder) {
      this.drinks.splice(this.searchIndex(item), 1);
      return drinkOrder
    } else if(snackOrder) {
      this.snacks.splice(this.searchIndex(item), 1);
      return snackOrder
    } else {
      console.log(`Извините, ${item} больше нет!`);
    }
  }

  searchIndex(item) {
    if(this.drinks.find((el) => el.name === item)) {
      return this.drinks.findIndex((el) => el.name === item)
    } else {
      return this.snacks.findIndex((el) => el.name === item)
    }
  }
}

const drunker = new Bar('Drunker', 20);

const vodka = new Beverage("vodka", "highAlcogol");
const whiskey = new Beverage("whiskey", "highAlcogol");
const brandy = new Beverage("brandy", "highAlcogol");
const beer = new Beverage("beer", "lowAlcogol");
const wine = new Beverage("wine", "lowAlcogol");
const champaign = new Beverage("champaign", "lowAlcogol");

const chips = new Snack("chips", false);
const crackers = new Snack("crackers", false);
const lime = new Snack("lime", false);
const fish = new Snack("fish", true);
const potato = new Snack("potato", true);
const salad = new Snack("salad", true);

const dave = new Visitor("Dave", 39, 70);
const jim = new Visitor("Jim", 56, 50);
const will = new Visitor("Will", 34, 80);
const rob = new Visitor("Rob", 19, 100);
const sam = new Visitor("Sam", 32, 90);
const nick = new Visitor("Nick", 48, 60);

drunker.drinks.push(vodka, whiskey, brandy, beer, wine, champaign);
drunker.snacks.push(chips, crackers, lime, fish, potato, salad);
drunker.visitors.push(dave, jim, will, rob, sam, nick);

const max = new Visitor('Max', '35', 70);
drunker.enter(max);
const dewars = drunker.makeOrder('whiskey');
max.drink(dewars);
const greyGoose = drunker.makeOrder('vodka');
max.drink(greyGoose);
const ararat = drunker.makeOrder('brandy');
max.drink(ararat);
const stella = drunker.makeOrder('beer');
max.drink(stella);
const aznauri = drunker.makeOrder('wine');
max.drink(aznauri);