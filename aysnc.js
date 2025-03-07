// div function

// div(10, 2); => 5
// div(10, 0); => Infinity

// #1 handel a error
// #2 call a data from server

// promises
// in-build promises function in js
// create our own promises

let url = `https://jsonplaceholder.typicode.com/posts`;

// fetch(url).then((response)=>{

// }).catch((error)=>{

// });

// 1st promise => 2nd promise => 3rd promise

async function getData() {
  try {
    let response = await fetch(url);
    let data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}

async function div(a, b) {
  try {
    if (b === 0) {
      throw new Error("Division by zero is not possible");
    }
    let result = a / b;
    return Promise.resolve(result);
  } catch (error) {
    return Promise.reject(error);
  }
}

// Promise.all()
// Promise.race()
// Promise.allSettled()

// functional programming in javascript
// pure function
// definition: A function is called pure function if it returns
// the same result for the same arguments.
let c = 10;
function add(a, b) {
  return a + b;
}
add(10, 20); // 40

// higher order function
// definition: A function that takes a function as an argument or returns a function
function add(a, b, callback) {
  callback(a + b);
}
add(10, 20, function (result) {
  console.log(result);
});
// first class function
// definition: A function that can be stored in a variable, object or array
let add = function (a, b) {
  return a + b;
};
// currying
// definition: A technique of evaluating a function with multiple arguments,
// into a sequence of functions with a single argument

// function add(a) {
//   return function (b) {
//     return function (c) {
//       return a + b + c;
//     };
//   };
// }
// static curring function
let add = (a) => (b) => (c) => a + b + c;

add(10)(20)(30); // 60

// dynamic curring function
function add(a) {
  return function (b) {
    if (b) {
      return add(a + b);
    }
    return a;
  };
}

add(10)(20)(30)(40)(); // 60

// closure
// definition: A function that has access to the outer function scope
// even after the outer function has returned
function outer() {
  let a = 10;
  function inner() {
    console.log(a);
  }
  return inner;
}

// immutability
// definition: An object whose state cannot be modified after it is created
const obj = Object.freeze({ name: "Deepakkumar" });
obj.name = "Deepak";
// obj = { name: "Deepakkumar" };

// recursion
// definition: A technique of solving a problem where the function calls itself
function factorial(n) {
  if (n === 0) {
    return 1;
  }
  return n * factorial(n - 1);
}
factorial(5); // 120

// composition
// definition: A technique of combining two or more functions to produce a new function
function add(a, b) {
  return a + b;
}
function multiply(a, b) {
  return a * b;
}

let compose = (f1, f2, val1, val2) => {
  return f1(f2(val1, val2), val2);
};

compose(add, multiply, 10, 20); // 220
compose(multiply, add, 10, 20); // 600
compose(add, add, 10, 20); // 50
compose(multiply, multiply, 10, 20); // 4000
// push, concat
// froEach, filter, map, join

function funOne(a) {
  return function (b) {
    if (b !== undefined) {
      let r = a + b;
      funOne(r);
    } else {
      return a;
    }
  };
}

funOne(10)(20)();
