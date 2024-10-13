/*Spread Operators
Spread operators are used to expand an array or object into its individual elements.
Spread operators are used with the rest parameter and destructuring assignment.
*/
function sum(a,b,c)
{
    return a+b+c;// 1+2+3=6
}
let numbers=[1,2,3,4,5,6];
console.log(sum(...numbers));// 6

/* First lets see an Arrow function to understand argument object 
A type of function which contaons arrow => 
This arrow is an anonymous but it hasnt that much anonymous because it 
stores inside variable and when variable gets executed that variables role 
got changed and comes into object which will call the functiond and behaves
 like a function
 */
SayHello=(sum1,sum2)=>{
    console.log("Hello",sum1+sum2);
}
 SayHello(3,4);
console.log(SayHello);
console.log(typeof(SayHello));
/* In Web Development Exactly where Arrow function gets used
Arrow function is used in the place of annymous function
Arrow function is used in the place of callback function

But exactly why it uses in the place of them
Arrow function is use in the place of anonymous function because 
it is anonymous
Arrow function is used in the place of callback function because
it is a function 
Arrow Function is used in the place of anonymous function because
it is a function

Lets see what is Anonymous functions and where it uses in Web Development
Anonymous functions is a function which doesnt have a name
*/
(function(){
    console.log("Hello");
})();


Anonymous=function(){
    console.log("Hello Anonymous");
};
Anonymous();
console.log(typeof(Anonymous));

Arrow_Func=()=>{
    console.log("Hello Arrow Function");
};
Arrow_Func();


function additions()
{
    let total=0;
    for(let i=0;i<arguments.length;i++)
    {
        total+=arguments[i];
    }
    return total;
}
console.log(additions(1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16));


//Recursion
//Recursion ia a technique of programming where a function calls itself 
//repeatedly until it reaches a base case. The base case is the condition 
//where the function stops calling itself and returns a value.
function factorial(fact_num)
{
    if(fact_num===1)
    {
        return 1;
    }
    else{
        return fact_num*factorial(fact_num-1);//5*(5-1=4)
    }
}
console.log(factorial(5));
console.log(factorial(10));


//Fibonacci Series
function FibonacciSeries(numTerms) {
    // Initial values for the Fibonacci sequence
    let fibSeries = [0, 1];

    for (let i = 2; i < numTerms; i++) {
        // Calculate the next Fibonacci number by summing the two previous ones
        fibSeries[i] = fibSeries[i - 1] + fibSeries[i - 2];
    }

    // Return the Fibonacci series
    return fibSeries;
}

const numTerms = 10; // Number of terms in the Fibonacci series
const fibonacciseries = FibonacciSeries(numTerms);
console.log(fibonacciseries); 