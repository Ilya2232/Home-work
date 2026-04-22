class Drink {
  #temperature;
  constructor(name, size, price, temperature) {
    this.name = name;
    this.size = size;
    this.price = price;
    this.#temperature = temperature;
  }

  getDrinkInfo() {
    return `${this.name} | ${this.size} | $${this.price}`;
  }

  getTemperatureInfo() {
    return `${this.#temperature}`;
  }

  setDrinkTemperature(newTemperature) {
    this.#temperature = newTemperature;
  }

  #makeDrink() {
    console.log('Preparation process');
  }

  serveDrink() {
    this.#makeDrink();
    console.log(`${this.getDrinkInfo()} | ${this.getTemperatureInfo()}°C - подан клиенту`);
  }
}

class Coffee extends Drink {
  constructor(name, size, price, temperature, viewGrains, viewMilk) {
    super(name, size, price, temperature);
    this.viewGrains = viewGrains;
    this.viewMilk = viewMilk;
  }

  getDrinkInfo() {
    return `${super.getDrinkInfo()} | ${this.getTemperatureInfo()}°C | Зерна - ${this.viewGrains} | Молоко - ${this.viewMilk}`;
  }
}

class Lemonade extends Drink {
  constructor(name, size, price, temperature, lemon, sweetener) {
    super(name, size, price, temperature);
    this.lemon = lemon;
    this.sweetener = sweetener;
  }

  getDrinkInfo() {
    return `${super.getDrinkInfo()} | ${this.getTemperatureInfo()}°C | ${this.lemon} | Подсластитель - ${this.sweetener}`;
  }
}

class Milkshake extends Drink {
  constructor(name, size, price, temperature, iceCream, milk) {
    super(name, size, price, temperature);
    this.iceCream = iceCream;
    this.milk = milk;
  }

  getDrinkInfo() {
    return `${super.getDrinkInfo()} | ${this.getTemperatureInfo()}°C | ${this.iceCream} | ${this.milk}`;
  }
}

class Cafe {
  constructor(name, location) {
    this.name = name;
    this.location = location;
  }

  getCafeInfo() {
    return `${this.name} | ${this.location}`;
  }

  orderDrink(drink) {
    drink.serveDrink();
  }
}

const cafeInfo = new Cafe('Ландыш', 'Moon');
console.log(cafeInfo.getCafeInfo());
const coffeeLatte = new Coffee('Latte', 'small', 2, 80, 'Coffea Arabica', 'Plant milk');
cafeInfo.orderDrink(coffeeLatte);
const drinkInfo = new Milkshake('Milshake', 'big', 3, 2, 'Chocolate', 'milk');
console.log(drinkInfo.getDrinkInfo());
