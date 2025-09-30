

//spread

const oldArray = [1, 2, 3, 4]

const newArray = ["A", "B", "C", ...oldArray, 5, 6, 7];

console.log(oldArray);
console.log(newArray);



//rest
const sum = (...numbers) => {
    let total = 0;
    numbers.forEach(number => {
        total += number
    });
    console.log("Total:" + total);
    console.log("Numbers:" + numbers);
}

sum(1, 2, 3, 4, 5, 6, 7);