/* What is Conditional Statements
It is a type in whiuch conditions has been written and the flow of program/operation has 
been depended on the condition
The conditional Statements are the cabinet in which that conditions has written beacause that can be 
handle the conditional and maintain the flow of program
There are three types of Conditional Statements
1. If Statement
if is the type of conditional statement where condition can be written and if it gets true it will go 
inside the slope of if and performs the operations

2. If-Else Statement
The else is like a default statement where condition cannot be given.If the if's condition get false 
then it will go for telse part to print or to show default statement/operation which it holds

3. Else If Statement
It is a combination of if and else which gets conditions and print the operation if it is true
but else if parts caomes in the frame if the if's condition gets false and it has one or two or more 
another condition/conditions which remains to check
*/

const readlineSync=require('readline-sync');

let a=parseInt(readlineSync.question('Enter the value of Num1:'));

let b=parseInt(readlineSync.question('Enter the value of Num2:'));

let c=parseInt(readlineSync.question('Enter the value of Num3:'));

let d=parseInt(readlineSync.question('Enter the value of Num14:'));

/*
if(num1>num2){
    console.log("num1 is greater than num2 with the value  of",num1); 
}

else{
    console.log("Hello");
} */

if((a>b)&&(a>c)&&(a>d)){
    console.log("The greater is num1 with value of ",a);
}
else if((b>a)&&(b>c)&&(b>d)){ 
    console.log("The greater is num2 with value of ",b);
}
else if((c>a)&&(c>b)&&(c>d)){ 
    console.log("The greater is num3 with value of ",c);
}
else{ 
    console.log("The greater is num4 with value of ",d);
}