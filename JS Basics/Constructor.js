
/**
 * Contructor
 * automatically called when object is created
 * automatically invoked by new keyword
 * initializes the object
 * 
 */

class ToyotoCar {
    constructor(brand) {
        this.brand = brand;
        console.log("Creating car");
    }
    start() {
        console.log("Car started");
    }
    stop() {
        console.log("Car stopped");
    }
}

const toyotoCar = new ToyotoCar("Toyota");
console.log(toyotoCar);

const lexus = new ToyotoCar();
console.log(lexus);
lexus.brand = "Lexus";
console.log(lexus);