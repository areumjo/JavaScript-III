/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Global binding (Window binding)
    - `this` will be the window/console Object when `this` is not used for the other 3 cases and using `this` might give you an error.
    - Window binding is like the forest of trees, not sure which one we are pointing at, so we point at the forest. (by Josh Knell)

* 2. Implicit Binding
    - When `this` is called at left of the dot (.), whatever is to the left of the dot becomes the context for `this` in the function.

* 3. New Binding
    - When `this` is used with a constructor and the `new` keyword, `this` will be the new object being constructed.
    - Variable name starts with capital letter.

* 4. Explicit binding
    - `When you use .call(), .apply(), or .bind() method, `this` is explicitly defined.
    - It is called explicit because you are explicitly passing in a this context to the methods.
*
* write out a code example of each explanation above
*/



// Principle 1

// code example for Window Binding

let sayAge = function() {
    console.log(this.age);
}
let myAge = {
    age: 25
};
sayAge(); 



// Principle 2

// code example for Implicit Binding

let me = {
    name: 'Areum',
    age: 27,
    sayName: function() {
        console.log(this.name);
    }
};
me.sayName();
let sayNameMixin = function(obj) {
    obj.sayName = function() {
        console.log(this.name);
    };
};
let you = {
    name: 'Darren',
    age: 25,
};
sayNameMixin(you);
you.sayName();



// Principle 3

// code example for New Binding

let Animal = function(color, name, type) {
    //this = {} <= behind of scene, JS makes `this = {}` so new function is invoked, it can make new object
    this.color = color;
    this.name = name;
    this.type = type
}
let zebra = new Animal('black and white', 'Zoroo', 'Zebra');
console.log(zebra);



// Principle 4

// code example for Explicit Binding

let sayName = function() {
    console.log('My name is ' + this.name); 
 }
 let stacey = {
     name: 'Stacey',
     age: 34,
 }
 sayName.call(stacey);

 let language = ['JS', 'Ruby', 'Python'];
 let sayName2 = function(lang1, lang2, lang3) {
     console.log('My name is ' + this.name + ' and I know ' + lang1 + ', ' + lang2 + ', ' + lang3 + ', '); 
 }
 sayName2.call(stacey, language[0], language[1], language[2]);
 sayName2.apply(stacey, language); // same result

 var newFunc = sayName2.bind(stacey, language[0], language[1], language[2]);
 newFunc(); //'bind does same thing but it makes a mew function