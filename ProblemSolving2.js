// Advance JavaScript Problem Solving  1

const person = {
    name: "Eshan",
    age: "20",
}

const {name,age} = person

console.log(name); // Eshan
console.log(age); // 20


// Advance JavaScript Problem Solving  3

class Rectangle {
     constructor(width, height) {
        this.width = width;
        this.height = height;
     }

     calculate() {
        return this.width * this.height;
    }
}



const myRectangle = new Rectangle(5,12);

console.log(`The area of the rectangle is ${myRectangle.calculate()}`) // The area of the rectangle is 60

// Advance JavaScript Problem Solving  4

class Person {
    constructor(firstName, lastName) {
      this.firstName = firstName
      this.lastName = lastName
    }

    get fullName() {
      return `${this.firstName} ${this.lastName}`;
    }
  
    set fullName(name) {
      const [firstName, lastName] = name.split(' ');
      this.firstName = firstName
      this.lastName = lastName
    }
  }
  
  const person2 = new Person('Farhan', 'Tanver');
  
  person.fullName = 'Farhan Tanvir';
  
  console.log(person.fullName); // Farhan Tanvir

// Advance JavaScript Problem Solving  5  

const Circle = class {
    constructor(radius) {
      this.radius = radius;
    }
  
    calculateCircumference() {
      return 2 * Math.PI * this.radius;
    }
  };
  

  const myCircle = new Circle(5);
  console.log(`The circumference of the circle is ${myCircle.calculateCircumference()}`); // The circumference of the circle is 31.41592653589793

// Advance JavaScript Problem Solving 6

const propName1 = 'firstName';
const propName2 = 'lastName';
const propName3 = 'age';

const person3 = {
  [propName1]: 'Farhan',
  [propName2]: 'Tanvir',
  [propName3]:  16,
};

console.log(person3); // {firstName: 'Farhan', lastName: 'Tanvir', age: 16}

// Advance JavaScript Problem Solving 7


class Animal {
  constructor(name) {
    this.name = name;
  }

  makeSound() {
    console.log("Generic animal sound");
  }
}

class Dog extends Animal {
  constructor(name, breed) {
    super(name); // Call the parent constructor
    this.breed = breed;
  }

  bark() {
    console.log("");
  }
};

// Advance JavaScript Problem Solving 8

class Shape {
  constructor() {
    if (new.target === Shape) {
      throw new TypeError("Shape cannot be instantiated directly");
    }
  }

  area() {
    throw new Error("Abstract method: area must be implemented by subclasses");
  }

  perimeter() {
    throw new Error("Abstract method: perimeter must be implemented by subclasses");
  }
}


class Circle3 extends Shape {
  constructor(radius) {
    super();
    this.radius = radius;
  }

  area() {
    return Math.PI * this.radius ** 2;
  }

  perimeter() {
    return 2 * Math.PI * this.radius;
  }
}


const circle = new Circle3(5);
console.log(circle.area()); // 78.53981633974483


try {
  const shape = new Shape();
} catch (error) {
  console.error(error.message); // Shape cannot be instantiated directly
}

// Advance JavaScript Problem Solving 9

class MathUtil {
  static square(number) {
    return number * number;
  }
}

const result = MathUtil.square(5);
console.log(result); // 25

// Advance JavaScript Problem Solving 10

const mySymbol = Symbol("mySymbol");

const obj = {
  [mySymbol]: "value"
};

console.log(obj[mySymbol]); // value


