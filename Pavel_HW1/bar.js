const visitor = {
  name: 'John',
  age: 25,
  capacity: 100,
  canDrink: function(beverage) {
    if((highBeverage(beverage) && (this.capacity >=20)) || (lowBeverage(beverage) && (this.capacity >=10))) {
      return true;
    } else {
      return false;
    }
  },
  puke: function() {
    this.capacity = this.capacity + 15;
    console.log('🤮');
  },
  drink: function(beverage) {
    if(this.canDrink(beverage) === true) {
      drinkRes(beverage)
    } else {
      this.puke()
    }
  },
  eat: function(snack) {
    if(!kindOfsnack(snack)) {
      this.capacity = this.capacity + 5;
    } else {
      this.capacity = this.capacity + 10;
    }
  }
}

const bar = {
  name: 'Drunker',
  capacity: 20,
  drinks: [
    {name: 'vodka', type: 'highAclogol'},
    {name: 'whiskey', type: 'highAclogol'},
    {name: 'brandy', type: 'highAclogol'},
    {name: 'beer', type: 'lowAclogol'},
    {name: 'wine', type: 'lowAclogol'},
    {name: 'champaign', type: 'lowAclogol'}
  ],
  snaks: [
    {name: 'chips', isEffective: false},
    {name: 'crackers', isEffective: false},
    {name: 'lime', isEffective: false},
    {name: 'fish', isEffective: true},
    {name: 'potato', isEffective: true},
    {name: 'salad', isEffective: true},
  ],
  visitors: [
    {name: 'Dave', age: 39, capacity: 70},
    {name: 'Jim', age: 56, capacity: 50},
    {name: 'Will', age: 34, capacity: 80},
    {name: 'Rob', age: 17, capacity: 100},
    {name: 'Sam', age: 32, capacity: 90},
    {name: 'Nick', age: 48, capacity: 60},
    {name: 'Steve', age: 58, capacity: 50}
  ],
  enter(visitor) {
    if(visitor.age >= 18 && bar.capacity > bar.visitors.length) {
      bar.visitors.push(visitor);
      bar.greet();
    } else if (visitor.age < 18) {
      bar.expel();
    } else if (bar.capacity <= bar.visitors.length) {
      bar.decline();
    }
  },
  greet() {
    console.log(`Привет, ${visitor.name}, добро пожаловать в ${bar.name}!`);
  },
  expel() {
    console.log('Проваливай!')
  },
  decline() {
    console.log(`Извини, ${visitor.name}, сегодня ${bar.name} переполнен, попробу позже!`)
  },
  makeOrder(item) {
      if(someDrinksItem(item)) {
        let retDrinks = bar.drinks[drinksIndex(item)];
        bar.drinks.splice(drinksIndex(item), 1);
        return retDrinks;
      } else if(someSnacksItem(item)) {
        let retSnacks = bar.snaks[snacksIndex(item)];
        bar.snaks.splice(snacksIndex(item), 1);
        return retSnacks;
      } else {
        console.log(`Извините, ${item} больше нет!`)
    }
  },
}

const drinksIndex = (beverage) =>  bar.drinks.findIndex(el => el.name === beverage);
const kindOfBeverage = (beverage) => bar.drinks[drinksIndex(beverage)].type;
const highBeverage = (beverage) => kindOfBeverage(beverage) === 'highAclogol';
const lowBeverage = (beverage) => kindOfBeverage(beverage) === 'lowAclogol';
const drinkRes = (beverage) => {
    if(highBeverage(beverage)) {
    visitor.capacity = visitor.capacity - 20
  } else if (lowBeverage(beverage)) {
    visitor.capacity = visitor.capacity - 10
  }
}

const snacksIndex = (snack) =>  bar.snaks.findIndex(el => el.name === snack);
const kindOfsnack = (snack) => bar.snaks[snacksIndex(snack)].isEffective;

const someDrinksItem = (item) => bar.drinks.some(elem => elem.name === item);
const someSnacksItem = (item) => bar.snaks.some(elem => elem.name === item);