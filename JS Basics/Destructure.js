//Destructuring Object

const course = {
    name: "JavaScript",
    price: 1999,
    discount: 0.5,
    category: "Programming",
    rating: 4.5,
    tags: ["html", "css", "js"],
    isFree: false,
    isPopular: true
}

//Not the right way
// console.log(course.category);
// console.log(course.tags);


// const category = course.category;
// const tags = course.tags;
//Right way

const { category, tags } = course;

// console.log(category);
// console.log(tags);

const { name: CourseName, price: CoursePrice, discount: CourseDiscount } = course;
// console.log('CourseName:-',CourseName);
// console.log('CoursePrice:-',CoursePrice);
// console.log('CourseDiscount:-',CourseDiscount);

//Destructuring Array
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const [a, b, c] = numbers;
// console.log(a,b,c);

const [x, y, ...rest] = numbers;
// console.log(x,y,rest);
// console.log("-------------------");
// console.log(x);
// console.log(y);
// console.log(rest);

// {
//     "name": "Jon Snow",
//         "age": 23,
//             "isAlive": true,
//                 "address": {
//         "street": "Winterfell",
//             "city": "King's Landing"
//     }
// }

[
    {
        "name": "Jon Snow",
        "age": 23,
        "isAlive": true,
        "address": {
            "street": "Winterfell",
            "city": "King's Landing"
        },
    },
    {
        "name": "Arya Stark",
        "age": 16,
        "isAlive": true,
        "address": {
            "street": "Winterfell",
            "city": "King's Landing"
        },
    },
    {
        "name": "Sansa Stark",
        "age": 18,
        "isAlive": true,
        "address": {
            "street": "Winterfell",
            "city": "King's Landing"
        }
    }
]

const arr = ["Jon Snow", "Arya Stark", "Sansa Stark"];
const obj = { ...arr };

console.log(obj);

const numArr = [1, 2, 3];
const numObj = { ...numArr };

function sum(num1, num2, num3) {
    return num1 + num2 + num3;
}

console.log(sum(...numArr));

const objs = { ...true, ..."test", ...10 };

console.log(objs);

const user = {
    username: "Arya",
    price: 999,
    discount: 0.5,
    category: "Programming",
    rating: 4.5,
    tags: ["html", "css", "js"],
    isFree: false,
    isPopular: true
}

console.log({...user, username: "Sansa"});
console.log({ username: "Sansa", ...user});