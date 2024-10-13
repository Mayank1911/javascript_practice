let inventory =[
    {id:1,name:'Laptop',price:900,quantity:5}, 
    {id:2,name:'Mobile',price:500,quantity:10},
    {id:3,name:'Mouse',price:100,quantity:20},
    {id:4,name:'Keyboard',price:200,quantity:30},
    {id:5,name:'Headphone',price:300,quantity:40},
    {id:6,name:'Speaker',price:400,quantity:50},
    {id:7,name:'Monitor',price:600,quantity:60},
    {id:8,name:'Printer',price:800,quantity:70},
    {id:9,name:'Scanner',price:1000,quantity:80},
    {id:10,name:'Webcam',price:1200,quantity:90},
]
//Now want to add inside an array 
inventory.push({id:11,name:'Disc',price:50,quantity:10})
console.table(inventory); //push() adds in last index

//Remove the value from array
inventory.pop() //pop() removes the last index(bydefault)
console.table(inventory);

inventory.shift() //shift() removes the first index(bydefault)
console.table(inventory);

inventory.splice(4,2) //splice removes the index from 2 to 1    (4,2) 4 is index & 2 is value
console.table(inventory);

//Updating the specific element 
inventory[0].id=10;
console.table(inventory);

// In find it only finds the last one condition    => is a dot operator 
let mouse = inventory.find(item => item.name==='Mouse' || item.id===6 
|| item.quantity===20);//Inshort if it got that mouse then it will be true
if(mouse){
    mouse.price=150;
}
console.table(inventory);


let newProducts=[{id:11,name:'Mac',price:900,quantity:5},
{id:12,name:'Iphone',price:500,quantity:10},
{id:13,name:'Macbook',price:100,quantity:20},
{id:14,name:'Ipad',price:200,quantity:30},
{id:15,name:'Apple Watch',price:30,quantity:40},
]
//Now want to add inside an array 
inventory.push(...newProducts)//   ... is used to add array inside another array
console.table(inventory);
//Let's Concat 
//inventory.concat(newProducts);
//console.table(inventory);