//1. decleare and initialized an empty array
//let arr = [];
//2. Dclare and initialized multidiamention array

//let arr =[ [0,1,2,3,];
//          [1,0,1,2];
//           [2,1,0,1]];
//for(let i=0; i<3;i++){
//    (let j=0; j<4; j++){
//    document.wite(arr[j][i]);
//}
//}
 //3.  Write a program to print numeric counting from 1 to 10

// for( let i=1; i<11; i++){
    //document.write(i + "<br>");
// }

//4. Write a program to print multiplication table of any num by taking user input num and its length

//var table = +prompt("Enter the table  to show multiplication of table");
//var tableLenght= +prompt( "Enter the length multiplication");
//for( let i=1; i<=tableLenght; i++){ 
   // console.log( table + "x"  + i + " = " + table*i );     
//}

////5. //write to print the item of an Array

//var fruits = ["apple" , "banana" ,"mango" ,"orange" , "strawberry"
//];
//for (let i=0;  i < fruits.length ; i++){
//    document.write(i + " "  + fruits[i] + "<br>");
//}
//6. generate the following series in your browser see example output.

         //COUNTING

//for( let i=1; i<16; i++) {
 //   console.log( i );
//}

        //REVERSE COUNTING

//for( let i=11; i>0; i--) {
//    console.log( i );
//}
     //SERIES
//for( let i=2; i<=20 ; i+2) {
 //   console.log( i + "k" );
//}

   //  EVEN NUMBER
//for( let i=1; i<16; i++){if(i%2==0){
 //   console.log( i );
//}

     // Odd NUMBER

//for( let i=1; i<16; i++){if(i%2!==0){
 //   console.log( i );
//}

//WRITE A PROGRAM TO PRINT LARGEST NUMBER IN GIVEN ARRAY

let arr = [24,53,78,91,12]
for(i=0;i<=arr.length; i++){for(j=i+1; j<arr.length;j++) { 
    if(arr=[i] > arr[j]) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp
   
}
}
}
console.log(arr);