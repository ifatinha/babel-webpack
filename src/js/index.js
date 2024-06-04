import "../css/style.css"

const x = 5;
let y;

const sampleFunction = () => "this is a return value";

class Person {
   constructor(name, age) {
      this.name = name;
      this.age = age;
   }
}

let person = new Person("John", "Doe")
console.log(person.name)

const hasThree = [1, 2, 3].includes(3);
console.log(hasThree);

y ||= "a new value";
console.log(y);