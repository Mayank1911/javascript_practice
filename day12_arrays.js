/*Arrays
What is Arrays
An array is a collection of items stored at contiguous memory locations.
The idea is to store multiple items of the same type together. This makes 
it easier to calculate the position of each element by using its count or offset
from the first item in the array. Arrays are used to store multiple values in 
a single variable, instead of declaring separate variables for each value.

Arrays are the most important data structures available in any programming language.
Arrays are used to store similar types of elements into a single variable.
Arrays are the collection of similar types of elements

Types to declare an array
first type to declare an array */
arr=[1,2,3,4,5,67];
console.log(arr);
console.log(typeof(arr));

//Second type to declare an array
let arr1= Array(2,3,4,5,6,67,34);
console.log(arr1);
console.log(typeof(arr1));

//Third type to declare an array
let arr2= Array('wew',1,23,4,'sumit');
console.log(arr2);
console.log(typeof(arr2));
arr2[0]=1;
arr2[1]=2;
arr2[4]=3;
arr2[5]=4;
arr2[6]=5;
console.table(arr2);
console.log(arr2);
