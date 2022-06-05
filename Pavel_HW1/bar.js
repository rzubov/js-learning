class beverage {
  name;
  type;
  constructor(name, type) {
    this.name = name;
    this.type = type;
  }
}
class snack {
  name;
  isEffective;
  constructor(name, isEffective) {
    this.name = name;
    this.isEffective = isEffective;
  }
}

class visitor {
  name;
  age;
  capacity;
  constructor(name,age,capacity) {
    this.name = name;
    this.age = age;
    this.capacity = capacity;
  }
  canDrink = (beverage) => {
    return ((beverage.type === "highAlcogol") && (this.capacity >= 20) || (beverage.type === "lowAlcogol") && (this.capacity >= 10))
  }
  puke = () => {
    this.capacity += 15;
    console.log("🤮");
  }
  drink = (beverage) => {
    if (!this.canDrink(beverage)) {
      return this.puke();
    }
    if (beverage.type === "highAlcogol") {
      this.capacity -= 20
    } else if (beverage.type === "lowAlcogol") {
      this.capacity -= 10
    }
  }
  eat = (snack) => {
    if (snack.isEffective === false) {
      this.capacity += 5;
    } else {
      this.capacity += 10;
    }
  }
}

class bar {
  name;
  capacity;
  constructor(name, capacity) {
    this.name = name;
    this.capacity = capacity;
  }
  drinks = [
    {name: "vodka", type: "highAlcogol"},
    {name: "whiskey", type: "highAlcogol"},
    {name: "brandy", type: "highAlcogol"},
    {name: "beer", type: "lowAlcogol"},
    {name: "wine", type: "lowAlcogol"},
    {name: "champaign", type: "lowAlcogol"}
  ]
  snacks = [
    {name: "chips", isEffective: false},
    {name: "crackers", isEffective: false},
    {name: "lime", isEffective: false},
    {name: "fish", isEffective: true},
    {name: "potato", isEffective: true},
    {name: "salad", isEffective: true}
  ]
  visitors = [
    {name: "Dave", age: 39, capacity: 70},
    {name: "Jim", age: 56, capacity: 50},
    {name: "Will", age: 34, capacity: 80},
    {name: "Rob", age: 17, capacity: 100},
    {name: "Sam", age: 32, capacity: 90},
    {name: "Nick", age: 48, capacity: 60},
    {name: "Steve", age: 58, capacity: 50}
  ]
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

  greet = (visitor) => {
    console.log(`Привет, ${visitor.name}, добро пожаловать в ${this.name}!`)
  }
  expel = () => {
    console.log("Проваливай!")
  }
  decline = (visitor) => {
    console.log(`Извини, ${visitor.name}, сегодня ${this.name} переполнен, попробуй позже!`)
  }

  makeOrder(item) {
    let drinkOrder = this.drinks.find((el) => el.name === item);
    let snackOrder = this.snacks.find((el) => el.name === item);
      if(drinkOrder) {
      this.drinks.splice(this.drinksIndex(item), 1);
      return drinkOrder
    } else if(snackOrder) {
      this.snacks.splice(this.snacksIndex(item), 1);
      return snackOrder
    } else {
      console.log(`Извините, ${item} больше нет!`);
    }
  }

  drinksIndex(item) {
    return this.drinks.findIndex((el) => el.name === item)
  }
  snacksIndex(item) {
    return this.snacks.findIndex((el) => el.name === item)
  }
}

const Drunker = new bar('Drunker', 20);
const Max = new visitor('max', '35', 70);

Drunker.enter(Max);

const whiskey = Drunker.makeOrder('whiskey');
Max.drink(whiskey);
const vodka = Drunker.makeOrder('vodka');
Max.drink(vodka);
const brandy = Drunker.makeOrder('brandy');
Max.drink(brandy);
const beer = Drunker.makeOrder('beer');
Max.drink(beer);
const wine = Drunker.makeOrder('wine');
Max.drink(wine);