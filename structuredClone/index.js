// SHALLOW COPY

const person = {
    name: "John Doe", 
    languages: [
       "English", 
       "German"
    ]
};

const personClone = {...person}; // shallow copy

// Modify the languages array in the cloned object
personClone.languages.push("Spanish");

// Check the original and the cloned object
console.log(person.languages);  // Output: ["English", "German", "Spanish"]
console.log(personClone.languages);  // Output: ["English", "German", "Spanish"]
console.log(person.languages === personClone.languages) // true

// However, changing a primitive value won't affect the original
personClone.name = "Jane Doe";

console.log(person.name);  // Output: "John Doe"
console.log(personClone.name);  // Output: "Jane Doe"
console.log(person.name === personClone.name) // false

