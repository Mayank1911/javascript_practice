/*Comparison Operator
1. Equal (==)
2. Not Equal (!=)
3. Greater Than (>)
4. Less Than (<)
5. Greater Than or Equal (>=)
6. Less Than or Equal (<=)
7. Identical (===) (equal value and equal type)
8. Not Identical (!==) (not equal value or not equal type)
9. Ternary Operator (?) */

let num1=20;
let num2=30;
console.log(num1>num2);
console.log(num1<num2);
console.log(num1>=num2);
console.log(num1<=num2);
console.log(num1==num2);
console.log(num1!=num2);


console.log("Now understand the difference between == and ===");
let num3=20;
let num4="20";
console.log(num3==num4);
console.log(num3===num4);

console.log(num3!=num4);


console.log('25'+'24');
console.log('25'+'24'-'30');
console.log(typeof('35'));
console.log('25'+'24'- 30);



// Logical Operator
let num5=23;
let num6=45;
console.log(num5>20 && num6>40);   //AND operator
console.log(num5>20 || num6>40);   //OR operator
console.log(!(num5>20));    //not operator
console.log(!true);
console.log(!false);
console.log(!!true);   //double not operator
console.log(!!false);   //double not operator
console.log(!!0);   //double not operator
console.log(!!1);   //double not operator
console.log(!0);

console.log(0);


/* Increment / Decrement Operator
The increment/decrement operators stands for incrementing / decrementing the values by 1
In this type it has two main types
1. Postfix Increment/Decrement
In the postfix increment/decrement it will be done after the variable
In this the value gets added or subtracted by 1 but after the operation
2. Prefix Increment/Decrement
In the prefix increment/decrement it will be done before the variable
*/

let num7=30;
let num8=40;
console.log(num7++);
console.log(num7);
console.log(++num7);
console.log(num7++ + ++num8); 
