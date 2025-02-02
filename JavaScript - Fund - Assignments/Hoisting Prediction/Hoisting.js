var hello;
console.log(hello); // undefined
hello = 'world';

function test() {
    var needle = 'magnet';
    console.log(needle); // 'magnet'
}
var needle = 'haystack';
test();

function print() {
    brendan = 'only okay';
    console.log(brendan); // 'only okay'
}
var brendan = 'super cool';
console.log(brendan); // 'super cool'

function eat() {
    var food = 'gone';
    food = 'half-chicken';
    console.log(food); // 'half-chicken'
    food = 'gone';
}
var food = 'chicken';
console.log(food); // 'chicken'
eat();

var mean;
try {
    mean(); // error
} catch (err) {
    console.log(err.message);
}
console.log(food); // 'chicken'
mean = function () {
    var food = 'fish';
    food = 'chicken';
    console.log(food); // 'chicken'
    food = 'fish';
    console.log(food); // 'fish'
};
console.log(food); // 'chicken'

function rewind() {
    var genre = 'r&b';
    genre = 'rock';
    console.log(genre); // 'rock'
    genre = 'r&b';
    console.log(genre); // 'r&b'
}
var genre;
console.log(genre); // undefined
genre = 'disco';
rewind();
console.log(genre); // 'disco'

dojo = 'san jose';
console.log(dojo); // 'san jose'
function learn() {
    var dojo = 'burbank';
    dojo = 'seattle';
    console.log(dojo); // 'seattle'
    dojo = 'burbank';
    console.log(dojo); // 'burbank'
}
learn();
console.log(dojo); // 'san jose'

function makeDojo(name, students) {
    const dojo = {};
    dojo.name = name;
    dojo.students = students;
    if (dojo.students > 50) {
        dojo.hiring = true;
    } else if (dojo.students <= 0) {
        dojo = 'closed for now'; // error
    }
    return dojo;
}

console.log(makeDojo('Chicago', 65)); // { name: 'Chicago', students: 65, hiring: true }
try {
    console.log(makeDojo('Berkeley', 0)); // error
} catch (err) {
    console.log(err.message);
}
