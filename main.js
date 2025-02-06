let a = "    ";
let b = null;
let c;
const d = 10;

if (a.trim().length === 0) {
}

if (b === null) {
}

if (c === undefined) {
}

function parent() {
  return {
    inc() {},
    dec() {},
    reset() {},
  };
}

let obj = parent();
obj.inc();
obj.dec();
obj.reset();

// composite function
function add(a, b) {
  return a + b;
}

function mul(a, b) {
  return a * b;
}

const composite = (v1, v2, f1, f2) => {
  return f1(f2(v1, v2), v2);
};

composite(2, 3, add, mul); // 9
composite(2, 3, mul, add); // 15
composite(2, 3, mul, mul); // 18
composite(2, 3, add, add); // 8

// prototype

// prototype  &  __proto__

String.prototype.getMoreValue = function () {
  let string = this.toString();
  return {
    length: string.length,
    value: string,
    uc: string.toUpperCase(),
    lc: string.toLowerCase(),
  };
};
let string = "hello";

console.log(string.getMoreValue());
//{ length: 5, value: 'hello', uc: 'HELLO', lc: 'hello' }

function Human() {
  this.name = "Deepakkumar";
}

Human.prototype.getName = function () {
  return this.name;
};

function Student() {
  this.name = "Deepak";
}

function extend(Parent, Child) {
  Child.prototype = Object.create(Parent.prototype);
  Child.prototype.constructor = Child;
}

let student = new Student();
console.log(student.getName()); // Deepak
