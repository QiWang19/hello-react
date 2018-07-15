//car
//make
// model
// vin
// getDescription

class Person {
    constructor(name = 'Anonymous', age = 0) {
        // console.log('test');
        //refer to class instance
        this.name = name;
        this.age = age;
    }
    getGreeting() {
        // return 'I am' + this.name + 'Hi!';
        return `Hi I am ${this.name}`;
    }

    getDescription() {
        return `${this.name} is ${this.age} years old`;
    }
}

class Student extends Person{
    constructor(name, age, major) {
        super(name, age);
        this.major = major;
    }
    hasMajor() {
        return !!this.major;
    }

    getDescription() {
        let description = super.getDescription();
        if (this.hasMajor()) {
            description += ` Their major is ${this.major}.`;
        }
        return description;
    }
}

class Traveler extends Person {
    constructor(name, age, homeLocation) {
        super(name, age);
        this.homeLocation = homeLocation;
    }

    getGreeting() {
        let greeting = super.getGreeting();
        if (this.homeLocation) {
            greeting += ` I'm visiting from ${this.homeLocation}.`;
        }
        return greeting;
    }
}

const me = new Person('QI WANG');
const other = new Student(undefined, 26, 'Computer Science');
const otr = new Traveler('Ad', 26, 'Philadelphia');
console.log(me.getGreeting());
console.log(other.hasMajor());
console.log(other.getDescription());
console.log(otr.getGreeting());