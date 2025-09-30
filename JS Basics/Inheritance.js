/**
 * Inheritance
 * Inheritance is passing down the properties and methods from a parent class to a child class.
 * We use the keyword "extends" to inherit properties and methods from a parent class.
 */


class Parent {
    hello() {
        console.log("Hello from parent class");
    }
}

class Child extends Parent {

}

let obj = new Child();

obj.hello();


class Person {

    constructor(name) {
        this.name = name;
        this.species = "Human";
    }

    eat() {
        console.log("I am eating");
    }
    sleep() {
        console.log("I am sleeping");
    }
    work() {
        console.log("I am working");
    }
}

class Student extends Person {
    study() {
        console.log("I am studying");
    }
}

class Engineer extends Person {
    constructor(name) {
        super(name); // use this before using this or this will not work
        this.branch = "Computer Science";
    }

    work() {
        super.eat();
        console.log("I am working - Engineer");
    }
}

const student = new Student();
student.eat();
student.sleep();
student.study();

class Doctor extends Person {
    treat() {
        console.log("I am treating");
    }
}

const doctor = new Doctor();
doctor.eat();
doctor.sleep();
doctor.treat();

const engineer = new Engineer();
engineer.eat();
engineer.sleep();
engineer.work();
console.log(engineer.species);


/**
 * Super Keyword
 * The super keyword is used to call the constructor of the parent class.
 * to access the parent's properties and methods, we use the super keyword.
 * While calling the constructor of the derived class, we use the super keyword to call the constructor of the parent class.
 */

const chemical = new Engineer("Chemical");
chemical.work();
console.log(chemical.branch);
console.log(chemical.species);
console.log(chemical.name);
