// Map
let student = {
  name: "John Doe",
  age: 20,
  major: "Computer Science",
  courses: ["CS101", "CS102", "CS103"],
};

let map = new Map(Object.entries(student));

// HashMap
let student2 = {
  name: "John Doe",
  age: 20,
  major: "Computer Science",
  courses: ["CS101", "CS102", "CS103"],
};

let weakMap = new WeakMap();
weakMap.set(student2, "2nd Year Student");

let student3 = {};

weakMap.set(student3, {
  name: "John Doe",
  age: 20,
  major: "Computer Science",
  courses: ["CS101", "CS102", "CS103"],
});

console.log(weakMap.get(student2)); // 2nd Year Student

console.log(weakMap.get(student3).age); // { name: 'John Doe', age: 20, major: 'Computer Science', courses: [ 'CS101', 'CS102', 'CS103' ] }

let student4 = {
  name: "John Doe",
  age: 20,
  major: "Computer Science",
  courses: ["CS101", "CS102", "CS103"],
};

student4.age = 21;
student4["age"] = 22;

let prop = "age";
student4[prop] = 23;
