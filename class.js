class Person//Class has been initialized
{
    constructor(name,id){
        this.name=name;
        this.id=id;
        console.log(`Name is ${name} and id is ${id}`);
        console.log("Hello I am constructor");
    }
    walk()//method has been declared
    {
        console.log("22"+"33"-"55"+'55');
        console.log("I am walking");
    }
    smile(){
        console.log("I am smiling");
    }
}
/*
What is the difference between method and function 
Function which declares by function keyword and 
Method is the function which declares inside class
*/ 
per_ob=new Person('Raj',2);
per_ob.walk();
per_ob.smile();
per2=new Person('Hello',10);
/*
What is Constructor
Constructor is a private of method of a class(by default)
which gets called just declaring the object of class
*/ 