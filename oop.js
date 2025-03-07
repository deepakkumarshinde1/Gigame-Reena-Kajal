class Human {
  name = "deepak";

  printData() {
    setTimeout(() => {
      console.log(this);
    }, 2000);
  }
}

let student = {
  age: 30,
};
function fun1() {
  console.log(this.age);
}

fun1.call(student);
fun1.apply(student);
let fun1_1 = fun1.bind(student);
fun1_1();

let human = new Human();
//human.printData();

// fun1(); // window object reference

// this provides a current instance

/**
 * class -> this -> class
 * function -> "this" -> window / global object
 * we can change "this" instance of function  by call , bind , apply method
 * => function don't have  "this" context (instance)
 */

// prototype
String.prototype.add = function () {};

// function constructor

function Shape() {
  this.width = 10;
  this.height = 10;
}
Shape.prototype.createAShape = function () {};
// oop inheritance
function Square() {}

//

let square = new Square();
square.createAShape();
