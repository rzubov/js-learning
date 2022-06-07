const visitor = {
  name: "John",
  age: 25,
  capacity: 60,
  canDrink: function (beverage) {
    return ((beverage.type === "highAlcogol") && (this.capacity >= 20) || (beverage.type === "lowAlcogol") && (this.capacity >= 10))
  },
  puke: function () {
    this.capacity += 15;
    console.log("🤮");
  },
  drink: function (beverage) {
    if (!this.canDrink(beverage)) {
      return this.puke();
    }
    if (beverage.type === "highAlcogol") {
      this.capacity -= 20
    } else if (beverage.type === "lowAlcogol") {
      this.capacity -= 10
    }
  },
  eat: function (snack) {
    if (!snack.isEffective) {
      this.capacity += 5;
    } else {
      this.capacity += 10;
    }
  }
};

const bar = {
  name: "Drunker",
  capacity: 20,
  drinks: [
    {name: "vodka", type: "highAlcogol"},
    {name: "whiskey", type: "highAlcogol"},
    {name: "brandy", type: "highAlcogol"},
    {name: "beer", type: "lowAlcogol"},
    {name: "wine", type: "lowAlcogol"},
    {name: "champaign", type: "lowAlcogol"}
  ],
  snacks: [
    {name: "chips", isEffective: false},
    {name: "crackers", isEffective: false},
    {name: "lime", isEffective: false},
    {name: "fish", isEffective: true},
    {name: "potato", isEffective: true},
    {name: "salad", isEffective: true}
  ],
  visitors: [
    {name: "Dave", age: 39, capacity: 70},
    {name: "Jim", age: 56, capacity: 50},
    {name: "Will", age: 34, capacity: 80},
    {name: "Rob", age: 17, capacity: 100},
    {name: "Sam", age: 32, capacity: 90},
    {name: "Nick", age: 48, capacity: 60},
    {name: "Steve", age: 58, capacity: 50}
  ],
  enter(visitor) {
    greet = (visitor) => {
      console.log(`Привет, ${visitor.name}, добро пожаловать в ${this.name}!`)
    }
    expel = () => {
      console.log("Проваливай!")
    }
    decline = (visitor) => {
      console.log(`Извини, ${visitor.name}, сегодня ${this.name} переполнен, попробуй позже!`)
    }
    if (visitor.age >= 18 && this.capacity > this.visitors.length) {
      this.visitors.push(visitor);
      greet(visitor);
    } else if (visitor.age < 18) {
      expel();
    } else if (this.capacity <= this.visitors.length) {
      decline(visitor);
    }
  },

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
  },

  searchIndex(item) {
    if(this.drinks.find((el) => el.name === item)) {
      return this.drinks.findIndex((el) => el.name === item)
    } else {
      return this.snacks.findIndex((el) => el.name === item)
    }
  }
}

const whiskey = bar.makeOrder('whiskey')
visitor.drink(whiskey);
const vodka = bar.makeOrder('vodka')
visitor.drink(vodka);
const brandy = bar.makeOrder('brandy')
visitor.drink(brandy);
const beer = bar.makeOrder('beer')
visitor.drink(beer);