console.log("Problem 1:")
const cars = ['Tesla', 'Mercedes', 'Honda'];
const [randomCar] = cars;
const [, otherRandomCar] = cars;
console.log(randomCar); // 'Tesla'
console.log(otherRandomCar); // 'Mercedes'

console.log("\n")

console.log("Problem 2:")
const employee = {
    name: 'Elon',
    age: 47,
    company: 'Tesla'
};
const { name: otherName } = employee;
// console.log(name); error: 'name' is not defined
console.log(otherName); // 'Elon'

console.log("\n")

console.log("Problem 3:")
const person = {
    name: 'Phil Smith',
    age: 47,
    height: '6 feet'
};
const password = '12345';
const { password: hashedPassword } = person;
console.log(password); // '12345'
console.log(hashedPassword); // undefined

console.log("\n")

console.log("Problem 4:")
const numbers = [8, 2, 3, 5, 6, 1, 67, 12, 2];
const [, first] = numbers;
const [, , , second] = numbers;
const [, , , , , , , , third] = numbers;

console.log(first == second); // false, because 'first' is 2 and 'second' is 5
console.log(first == third); // false, because 'first' is 2 and 'third' is 2 but this checks by object reference

console.log("\n")

console.log("Problem 5:")
const lastTest = {
    key: 'value',
    secondKey: [1, 5, 1, 8, 3, 3]
};
const { key } = lastTest;
const { secondKey } = lastTest;
const [, willThisWork] = secondKey;

console.log(key); // 'value', because it's destructured from the 'lastTest' object
console.log(secondKey); // [1, 5, 1, 8, 3, 3], the array is destructured from 'lastTest'
console.log(secondKey[0]); // 1, first item in the array
console.log(willThisWork); // 5, second item in the array