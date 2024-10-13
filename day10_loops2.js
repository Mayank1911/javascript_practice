/*
let rows=10;
for(let i=1;i<rows;i++){
    let str='*'.repeat(i);
    console.log(str);
} */
/*
for(let i=1;i<rows;i++){
    let str=' '.repeat(rows-i);
    str +='*'.repeat(i);
    console.log(str);
}
*/
let rows=10;
for(let i=1;i<rows;i++){
    let str=' '.repeat(rows-i);
    str +='*'.repeat(2*i-1);
    console.log(str);
} //for pyramid shape 
for(let i=rows-2;i>=1;i--){
    let str=' '.repeat(rows-i);
    str +='*'.repeat(2*i-1);
    console.log(str);
    }  //for diamond shape


    
     // Loop through rows to print the top border
     for (let i = 1; i <= rows; i++) {
        let row = "";
        // Print asterisks for the first and last row
        if (i === 1 || i === rows) {
            for (let j = 1; j <= rows; j++) {
                row += "* ";
            }
        } else {
            // Print asterisk and spaces for other rows
            for (let j = 1; j <= rows; j++) {
                if (j === 1 || j === rows) {
                    row += "* ";
                } else {
                    row += "  "; // Two spaces for hollow effect
                }
            }
        }
        console.log(row);
    }// for square shape