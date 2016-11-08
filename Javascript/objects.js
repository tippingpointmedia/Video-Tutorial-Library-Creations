//Objects are data scructures with key value pairs
var a = {}; //variable a where we are storing an object literal aka an empty object

//Dot notation - the left of the dot is an object, to the right is the property
//Dot notation creates values into strings as a data type and can only be used to assign strings
var fruit = {};
fruit.basket = "apples"; //assigning a property with dot notation
fruit.basket; //access with dot notation

var cart = fruit.basket;
cart; //"apples"

fruit.basket = "oranges"
cart; //"apples"

fruit.random; //output at undefined

//Bracket notation -  
