
/**
 * Prototype in JS
 * Prototype is a way to add properties and methods to an object
 * A js object is an entity having a state and behavior
 * JS Objects have a special property called prototype
 * We can set prtotype of an object using __proto__
 * If object and prototype have same property, method or key then object will have higher priority
 * 
 */

//Direct Object
const student = {
    name: "Arya", //key: value :- Property
    age: 20,    
    address: "Winterfell",
    isAlive: true,
    perform: function(){
        console.log(`${this.name} can perform swordsmanship`);
    }
}

// console.log(student)

// console.log(student.name)

// console.log(student.perform())

// let arr = ["apple", "mango", "banana", "grapes"];
// console.log(typeof arr);

const employee={
    calcTax() {
        console.log("Tax calculated");
    }
}

const Karan={
    salary: 10000,
    __proto__: employee //This is how we set prototype
}

//Or
Karan.__proto__ = employee

console.log(Karan.calcTax());

const Rohan={
    salary: 10000,
    calcTax(){
        console.log("Tax calculated by Rohan");
    },
    __proto__: employee,
}

console.log(Rohan.calcTax());