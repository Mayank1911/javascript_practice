/*Function with default parameters
In this type of functions arguments values has been allocated at a time of
declaration as like default so if any particular value not passes while calling 
then this values will be passed by default this is called as function with 
default arguments */ 
function SayHello(name="Jhoon",email='JH@gmail.com'){
    console.log("Hello "+name+" your email is "+email); 
}
SayHello('RJ','rjgmail.com');
SayHello();

/* Functions with variable length arguments
Variable length argument is known as Rest Parameters
This parameters generally where the length of values is not defined understand
this by code of calculator where user don't know how many values will be 
operated then rest operator comes in the frame

Rest Operator      (...parameter_name)
*/
function Person_Name(...name){
    console.log(name);
    for(let i=0; i<name.length;i++){
        console.log(name[i]);
    }
}
Person_Name('Subrato');
Person_Name('Subrato','Raj','Jhon','Rajesh','Kunal');
Person_Name('Pranjal','Mayank','Kunal');