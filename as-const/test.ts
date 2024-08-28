

let message = "Hello, world!"; 

const message1 = "Hello, world!";

const exactMessage = "Hello, world!"; 

const colors = ["red", "green", "blue"];

// Method 1
const exactColors: ("red" | "green" | "blue")[] = ["red", "green", "blue"];


// Method 2
const exactColors1 = ["red", "green", "blue"] as const;


console.log(exactColors)

console.log(exactColors1)