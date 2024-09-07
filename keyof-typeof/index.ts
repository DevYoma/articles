// const userName = "John Doe";
// const isValid = true;

// console.log(typeof(userName), typeof(isValid))

// const developer = {
//   name: "Alice",
//   role: "Frontend Developer",
//   favoriteLanguage: "TypeScript",
//   hobbies: ["coding", "writing"]
// };

// console.log(typeof developer)

// type Developer = {
//     name: string;
//     role: string;
//     favoriteLanguage: string;
//     hobbies: string[];
// }

// let developer: keyof Developer

// developer = ""
// let developerKey: keyof typeof developer

const developer = {
    name: "Alice",
    role: "Frontend Developer",
    favoriteLanguage: "TypeScript",
    hobbies: ["coding", "writing"]
}

console.log(Object.keys(developer))

let developerKey: keyof typeof developer