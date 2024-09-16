// DEEP COPY EXAMPLE 
const person = {
    name: "John Doe", 
    languages: [
       "English", 
       "German"
    ]
};

// Create a deep copy using structuredClone
const deepClonedPerson = structuredClone(person);

// Modify the deep cloned object
deepClonedPerson.languages.push("Spanish");

// Check if the original and the deep clone are equal
console.log(person.languages) // ['English', 'German']
console.log(deepClonedPerson.languages) // ['English', 'German', 'Spanish']
console.log(person.languages === deepClonedPerson.languages);  // Output: false

// Check if the properties are equal
console.log(person.name === deepClonedPerson.name);  // Output: false

// Changes in the deep cloned object don't affect the original
deepClonedPerson.name = "Jane Doe";

console.log(person.name);  // Output: "John Doe"
console.log(deepClonedPerson.name);  // Output: "Jane Doe"