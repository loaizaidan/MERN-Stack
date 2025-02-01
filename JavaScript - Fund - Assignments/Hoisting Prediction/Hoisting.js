var hello;
console.log(hello); // undefined, because the variable is hoisted but not assigned yet
hello = 'world';

function test() {
    var needle = 'magnet';
    console.log(needle); // 'magnet', local variable shadows the global one
}
var needle = 'haystack';
test();

function print() {
    brendan = 'only okay';
    console.log(brendan); // 'only okay', value reassigned inside the function
}
var brendan = 'super cool';
console.log(brendan); // 'super cool', the global value is logged because the function isn't called

function eat() {
    var food = 'gone';
    food = 'half-chicken';
    console.log(food); // 'half-chicken', local reassignment happens before the log
    food = 'gone';
}
var food = 'chicken';
console.log(food); // 'chicken', the global value is logged before the function call
eat();

var mean;
try {
    mean(); // error, mean is not a function yet (it's only declared, not assigned)
} catch (err) {
    console.log(err.message);
}
console.log(food); // still 'chicken', no changes to the global variable
mean = function () {
    var food = 'fish';
    food = 'chicken';
    console.log(food); // 'chicken', local reassignment
    food = 'fish';
    console.log(food); // 'fish', local reassignment again
};
console.log(food); // 'chicken', global value remains unaffected

function rewind() {
    var genre = 'r&b';
    genre = 'rock';
    console.log(genre); // 'rock', local reassignment
    genre = 'r&b';
    console.log(genre); // 'r&b', local variable reassignment
}
var genre;
console.log(genre); // undefined, the variable is hoisted but not assigned yet
genre = 'disco';
rewind();
console.log(genre); // 'disco', the global value is logged

dojo = 'san jose';
console.log(dojo); // 'san jose', the global variable is logged
function learn() {
    var dojo = 'burbank';
    dojo = 'seattle';
    console.log(dojo); // 'seattle', local reassignment
    dojo = 'burbank';
    console.log(dojo); // 'burbank', local variable reassignment
}
learn();
console.log(dojo); // 'san jose', the global value is unaffected by the function

function makeDojo(name, students) {
    const dojo = {};
    dojo.name = name;
    dojo.students = students;
    if (dojo.students > 50) {
        dojo.hiring = true;
    } else if (dojo.students <= 0) {
        dojo = 'closed for now'; // error, trying to reassign a const
    }
    return dojo;
}

console.log(makeDojo('Chicago', 65)); // { name: 'Chicago', students: 65, hiring: true }
try {
    console.log(makeDojo('Berkeley', 0)); // error, assignment to constant variable
} catch (err) {
    console.log(err.message);
}
