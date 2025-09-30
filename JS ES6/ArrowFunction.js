const user ={
    username: "Arya",
    price: 999,
    welcomeMessage: function(){
        console.log("-----------------");
        console.log(`${this.username} , welcome to website`);
        console.log(this);
        console.log("-----------------");
    }
}


// user.welcomeMessage();
// user.username = "Sansa";
// user.welcomeMessage();
// console.log("-----------------");

// console.log(this);

// function print(){
//     let userName = "John";
    
//     console.log(this.userName);
// }

// print();


// const print = function (){
//     let userName = "John";
    
//     console.log(this.userName);
// }

// print();

// const print =  () => {
//     let userName = "John";   
//     console.log(this.userName);
// }

// print();

//Explicit return
// const addTwoNumbers = (num1,num2) => {
//     return num1 + num2;
// }

// console.log(addTwoNumbers(3,4));

// const addTwoNumbers = (num1,num2) => num1 + num2;
//Implicit return
// const addTwoNumbers = (num1,num2) => (num1 + num2)

// console.log(addTwoNumbers(3,4));

//Return object
const addTwoNumbers = (num1,num2) => ({sum: num1 + num2})

console.log(addTwoNumbers(3,4));

console.log(addTwoNumbers(3,4).sum);

const users = ['Arya','Sansa','Jon'];

users.forEach(user => console.log(user));


// ES5
function greet(name){
    return 'Hello '+ name ;
}
console.log(greet("Arya"));

// ES6
const greetNew = name => 'Hello '+ name ;
console.log(greetNew("John"));

const square = num => num * num;
console.log(square(4));

