class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
    displayProduct() {
        console.log(`Product: ${this.name}`);
        console.log(`Price: $${this.price.toFixed(2)}`);
    }
    calculateTotal(salesTax) {
        return this.price + (this.price * salesTax);
    }
}

const product1 = new Product("iPhone", 3000);
const product2 = new Product("Samsung", 2580);
const salesTax = 0.05;

product1.displayProduct();
product2.displayProduct();

const salesTotal = product1.calculateTotal(salesTax);
console.log(`The total sales is: $${salesTotal.toFixed(2)}`);


class Animal {
    constructor(name, species) {
        this.name = name;
        this.species = species;
    }

    displayAnimal() {
        console.log(`The animal is ${this.name}`);
        console.log(`species : ${this.species}`);
    }
}

const animal1 = new Animal("dog", "German Shepherd");
const animal2 = new Animal("lion", "cat");

animal1.displayAnimal();
animal2.displayAnimal();

console.log(`The animal is ${animal1.name} and its species is ${animal1.species}.`);
console.log(`The animal is ${animal2.name} and its species is ${animal2.species}.`);




//static: keyword that defines properties or methods that belong to a class itself than that objects created frim the class


class User {
    static userCount = 0;

    constructor(userName) {
        this.userName = userName;
        User.userCount++;
    }

    static getUserCount() {
        console.log(`There are ${User.userCount} users on Instagram`);
    }

    sayHello() {
        console.log(`Hello, ${this.userName}`);
    }
}

const user1 = new User("John Doe");
const user2 = new User("Aize");
const user3 = new User("Osazee");

user1.sayHello();
user2.sayHello();
user3.sayHello();

User.getUserCount();
