var $ = require('jquery');
var Person = require('./modules/Person');

var john = new Person("John", "blue");
john.greet();

var jane = new Person("Jane", "green");
jane.greet();
