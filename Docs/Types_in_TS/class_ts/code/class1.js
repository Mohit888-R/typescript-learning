var Person = /** @class */ (function () {
    function Person(s, b, n) {
        this.name = s;
        this.isCool = b;
        this.pets = n;
    }
    Person.prototype.cool = function (isCool) {
        if (isCool === true) {
            return "Cool";
        }
        else {
            return "Boring";
        }
    };
    // set function
    Person.prototype.sayHelo = function () {
        return "hi, my name is ".concat(this.name, " and i have ").concat(this.cool(this.isCool), " ").concat(this.pets, " pets.");
    };
    return Person;
}());
var person1 = new Person('mohit', true, 2);
console.log(person1.sayHelo());
