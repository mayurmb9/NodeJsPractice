/**
 * Modules in JS
 * Modules are a way to group related code together
 * 
 */

const {hello,ahello} = require("../Module1");
// import { hello, ahello } from "./Module1";



console.log(hello());
console.log(ahello("Arya"));

// import defHello, { hello, ahello } from "./Module2.js";

// console.log(defHello());
// console.log(hello());
// console.log(ahello("Arya"));