//Objects are data structures with key value pairs
var test = {}; //variable named test is where we are storing an object literal, aka an empty object

//Dot notation - the left of the dot is an object, to the right is the property
//** Dot notation creates values into strings as a data type and can only be used to assign strings **
var fruit = {};
fruit.basket = "apples"; //ASSIGN a property with dot notation

fruit.basket; //ACCESS a property with dot notation

var cart = fruit.basket; //STORE a property with bracket notation
cart; //outputs to "apples"

fruit.basket = "oranges";
cart; //outputs to "apples"


//Bracket notation - similar to dot notation except it has brackets
//** Bracket notation can store more than strings. They include expressions, integers, special characters, variables, and numbers **
var fruit = {};
fruit["basket"] = "apples"; //ASSIGN a property with bracket notation

fruit.basket; //ACCESS a property with bracket notation

var cart = fruit["basket"]; //STORE a property with bracket notation
cart;
