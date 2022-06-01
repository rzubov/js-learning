const visitor = {
  name: "John",
  age: 25,
  capacity: 100,
  canDrink: function () {
    return ((orderDrinkType === "highAlcogol") && (this.capacity >= 20) || (orderDrinkType === "lowAlcogol") && (this.capacity >= 10))
  },
  puke: function () {
    this.capacity += 15;
    console.log("🤮");
  },
  drink: function (beverage) {
    if (!this.canDrink) {
      return this.puke();
    }
    if (bar.makeOrder.type === "highAlcogol") {
      this.capacity -= 20;
    } else if (bar.makeOrder.type === "lowAlcogol") {
      this.capacity -= 10;
    }
  },
  eat: function (snak) {
    if (!bar.makeOrder.isEffective) {
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
  snaks: [
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
    //orderSnackType = this.snaks[this.snaksIndex(item)].isEffective;
    orderDrinkType = this.drinks[this.drinksIndex(item)].type;
    if (this.someDrinksItem(item)) {
      return this.drinks.splice(this.drinksIndex(item), 1);
      //return this.drinks[drinksIndex(item)];
    } else if (this.someSnaksItem(item)) {
      return this.snaks.splice(this.snaksIndex(item), 1);
      //return this.snaks[drinksIndex(item)];
    } else {
      console.log(`Извините, ${item} больше нет!`);
    }
  },
  drinksIndex(item) {
    return this.drinks.findIndex((el) => el.name === item)
  },
  snaksIndex(item) {
    return this.snaks.findIndex((el) => el.name === item)
  },
  someDrinksItem(item) {
    return this.drinks.some((elem) => elem.name === item)
  },
  someSnaksItem(item) {
   return this.snaks.some((elem) => elem.name === item)
  }
}

//const orderType = bar.makeOrder.type;





//const kindOfBeverage = (beverage) => bar.drinks[bar.drinks.findIndex((el) => el.name === beverage)].type;
//const highBeverage = (beverage) => kindOfBeverage(beverage) === "highAlcogol";
//const lowBeverage = (beverage) => kindOfBeverage(beverage) === "lowAlcogol";

//const kindOfsnak = (snak) => bar.snaks[bar.snaks.findIndex((el) => el.name === snak)].isEffective;


