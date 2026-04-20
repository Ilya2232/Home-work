class Fruits {
  constructor(name, fresh) {
    this.name = name;
    this.fresh = fresh;
  }

  showFruitsInfo() {
    console.log(`The ${this.name} is ${this.fresh} `);
  }
}

class Vegetables extends Fruits {
  constructor(name, fresh, price) {
    super(name, fresh);
    this.price = price;
  }

  showVegetablesInfo() {
    console.log(`The ${this.name} is ${this.fresh} and his price is ${this.price} `);
  }
}


const fruitsInfo = new Fruits('mango', 'fresh');
fruitsInfo.showFruitsInfo();

const vegetablesInfo = new Vegetables('tomato', 'not fresh', 100);
vegetablesInfo.showVegetablesInfo();