/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Whenever a function is in global scope, "this" refers to the window or global object 
* 2. Whenever a dot follows "this" is referring to object after that dot
* 3. In a constructor function "this" refers to that instance of the object created by the constructor
* 4. call() uses this explicitly and allows an object to use another object's method
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding

let global_scope = function(){
    console.log(this); 
}

global_scope(); 

// Principle 2

// code example for Implicit Binding

let implicit_binding = {
    type: "implicit",
    speak:function() {
        console.log(this.type);
    }
}


implicit_binding.speak(); 

// Principle 3

// code example for New Binding

function Walker(name, age, school){
    this.name = name, 
    this.last_name = "walker",
    this.age = age, 
    this.school = school,
    this.speak = function(){
        console.log(`My name is ${this.name} ${this.last_name}. I am ${age} years and I am a student at ${this.school}.`);
    }
}

let eddie_walker = new Walker("Edward", 19, "SouthernU");
let umeko_walker = new Walker("Umeko", 26,  "Lambda School");

eddie_walker.speak(); 
umeko_walker.speak();
// Principle 4

// code example for Explicit Binding

eddie_walker.speak.call(umeko_walker);