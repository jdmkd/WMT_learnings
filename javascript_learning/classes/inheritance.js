class Car {
  constructor(brand) {
    this.brand = brand;
  }
  present() {
    return "car name is " + this.brand;
  }
}

class Model extends Car {
  constructor(brand, model) {
    super(brand);

    this.model = model;
  }

  show() {
    return this.present() + " and model is " + this.model;
  }
}

let myCar = new Model("BMW", "M4");
console.log(myCar.show());
