function Person(name, color) {
    this.name = name;
    this.color = color;
    this.greet = function() {
        console.log("Hello, my name is " + this.name + " and I like the color " + this.color + " .");
    }
}

module.exports = Person;