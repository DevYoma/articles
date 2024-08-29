

let message = "Hello, world!"; 

const message1 = "Hello, world!";

const exactMessage = "Hello, world!"; 

const colors = ["red", "green", "blue"];

const arrayResult = colors[0];
const arrayResultOne = colors[1];


// Method 1
// const exactColors: ("red" | "green" | "blue")[] = ["red", "green", "blue"];


// Method 2
const exactColorsTwo = ["red", "green", "blue"] as const;


// console.log(exactColors)

// exactColorsTwo.push("yellow");
// exactColorsTwo.pop();
// exactColorsTwo.shift();

const result = exactColorsTwo[0]

console.log(exactColorsTwo)

