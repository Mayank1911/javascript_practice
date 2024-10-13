/*Functions in Javascript
Functions are a set of statements that perform a specific task
Fumctions are used to avoid code duplication
Functions are used to make code more readable
for(let i=0;i<=10;i++){
    console.log(i);
    sayHello();
}
function sayHello(){
    console.log("This is in iteration");
}

The use of functions is
1. To avoid code duplication
2. To make code more readable
3. To make code more reusable
4. To make code more maintainable
5. To make code more scalable
6. To make code more testable
7. To make code more efficient

How to create a function and the steps are function has three phases
1. Declaration
Declaration stands for creation of function

2. Initializtion
Initialization stands for assigning the function to a variable

3. Invocation
Invocation stands for calling the function


4.Execution
5.Termination
6.Garbage Collection
7.Reuse
8.Recursion
9.Anonymous Function
10.Arrow Function

This is Default function
Default dunction stands for declaring a function without variable
*/
function Person(){
    console.log("This is a person");
}
Person();// Calling a function

//Function with variables
//In functions variables are no longer called as variavble it is called 
//as parameter or arguments
function Person_Info(name,id){
    console.log("This is a person "+name+" with id "+id);
}
Person_Info("Rajesh",1234);
Person_Info("Sachin",40);
Person_Info("Rahul",20);
Person_Info("HEHE",04);

