
// 1
// 1 2
// 1 2 3 
// 1 2 3 4
// 1 2 3 4 5 cixmasi ucun kod:

// const { Ask } = require('asfk');

// Ask([""]).then(([n]) => {
//     n = parseInt(n);
//     for(let i=1;i<=n;i++){
//         let arr=[];
//         for(let j=1;j<=i;j++){
//             arr.push(j);
//         }
//         console.log(...arr);
//     }
// });






// Matrix Nested loops
// Task 1
//n tam ədəd ehtiva edən in massivi verilir. Elə out massivi qurun ki, outiin massivinin ini-dən başqa bütün elementlərinin hasilinə bərabər olsun. Məsələni O(n) və yaddaşa görə sabit mürəkəblikdə həll edin.
// 1 2 3 4
//24 12 8 6
//2 0 1 4
//0 8 0 0
//-3 2 1 -1 1 -2 1 -1 1 -1
// 4 -6 -12 12 -12 6 -12 12 -12 12



// let input = prompt("Ededleri daxil edin:");
// let arr = input.split(" ").map(Number);
// let newArr = [];
// for (let i = 0; i < arr.length; i++) {
//     let hasil = 1;
//     for (let j = 0; j < arr.length; j++) {
//         if (i !== j) {
//             hasil *= arr[j];
//         }
//     }
//     newArr.push(hasil);
// }
// console.log(newArr);



// const { Ask } = require("asfk");
// Ask(["Ededleri daxil edin:"]).then(([arr]) => {
//     arr = arr.split(" ").map(Number);
//     let newArr = [];
//     for (let i = 0; i < arr.length; i++) {
//         let hasil = 1;
//         for (let j = 0; j < arr.length; j++) {
//             if (i != j) {
//                 hasil *= arr[j];
//             }
//         }
//         newArr.push(hasil);
//     }
//     console.log(newArr);
// });






// Task 2
//İki masiv verilib. Birinci Massivini o elementlərini çap edin ki, qiymətləri ikinci massivdə olmasın (elementlərin ardıcıllığı birinci massivdəki kimi çap edilməlidir).
//3 1 3 4 2 4 12
//4 15 43 1 15 1
// 3 3 2 12


// let input1 = prompt("Ededleri daxil edin:");
// let input2 = prompt("2 ci ededleri daxil edin:");
// let arr1 = input1.split(" ").map(Number);
// let arr2 = input2.split(" ").map(Number);
// let newArr = [];
// for (let i = 0; i < arr1.length; i++) {
//     let tekrar = false;
//     for (let j = 0; j < arr2.length; j++) {
//         if (arr1[i] == arr2[j]) {
//             tekrar = true;
//             break;
//         }
//     }
//     if (!tekrar) {
//         newArr.push(arr1[i]);
//     }
// }
// console.log(newArr.length);
// console.log(newArr.join(" "));








// const { Ask } = require('asfk');

// Ask(["", "","",""]).then(([n,arr1,a,arr2]) => {
//     n = parseInt(n);
//     arr1 = arr1.split(" ").map(Number);
//     arr2 = arr2.split(" ").map(Number);
//     let arr3=[];
//     for(let i=0;i<arr1.length;i++){
//         let tekrar=false;
//         for(let j=0;j<arr2.length;j++){
//             if(arr1[i]==arr2[j]){
//                 tekrar=true;
//                 break;
//             }
//         }
//         if(tekrar==false){
//             arr3.push(arr1[i]);
//         }
//     }
//     console.log(arr3.length);
//     console.log(...arr3);
// });





// Task 3
// n tamsayı dizisi verilir. Dizide görünen öğeleri yalnızca bir kez yazdırın. Öğeleri listede göründükleri sırayla yazdırın.
// 7
// 3 5 -7 7 5 -9 -4
// cavab cixsin: 3 -7 7 -9 -4

// let input=prompt("Ededleri daxil edin:");
// let arr=input.split(" ").map(Number);
// let object={};
// for(let i=0;i<arr.length;i++){
//     if(object[arr[i]]){
//         object[arr[i]]++;
//     }else{
//         object[arr[i]]=1;
//     }
// }
// for(let el of arr){
//     if(object[el]){
//         object[el]++;
//     }else{
//         object[el]=1;
//     }
// }
// let newArr=[];
// for(let key in object){
//     if(object[key]==1){
//         newArr.push(key);
//     }
// }
// console.log(newArr);






// const {Ask}=require("asfk");
// Ask([""]).then(([arr])=>{
//     arr=arr.split(" ").map(Number);
//     let obj={};
//     for(let el of arr){
//         if(obj[el]){
//             obj[el]++;
//         }else{
//             obj[el]=1;
//         }
//     }
//     let newArr=[];
//     for(let key in obj){
//         if(obj[key]==1){
//             newArr.push(key);
//         }
//     }
//     console.log(newArr.join(" "));
// });










// Task 4
//n * n ölçülü matris daraltılmıştır. Onun müsbət elementlərinin cəmini tapın.
//3
//4 -2 5
// 1 -4 -12
// 0 1 -3



// let input1 = prompt("Matrisin elementini daxil edin:");
// let input2 = prompt("Ededleri daxil edin:");
// let arr = input2.split(" ").map(Number);
// let massiv = [];
// for (let i = 0; i <= input1; i++) {
//     massiv.push(arr.splice(0, input1));
// }
// let cem = 0;
// for (let i = 0; i < massiv.length; i++) {
//     for (let j = 0; j < massiv.length; j++) {
//         if (massiv[i][j] >= 0) {
//             cem += massiv[i][j];
//         }
//     }
// }
// console.log(cem);







// const { Ask } = require("asfk");
// Ask(["massivin elementini daxil edin:", "elementleri daxil edin:"]).then(([a, arr]) => {
//     a = parseInt(a);
//     arr = arr.split(" ").map(Number);
//     let massiv = [];
//     for (let i = 0; i <= a; i++) {
//         massiv.push(arr.splice(0, a));
//     }
//     let cem = 0;
//     for (let i = 0; i < massiv.length; i++) {
//         for (let j = 0; j < massiv.length; j++) {
//             if (massiv[i][j] >= 0) {
//                 cem += massiv[i][j];
//             }
//         }
//     }
//     console.log(cem);
// });








// Task 5
// n × n ölçülü kvadrat cədvəldə əsas və tərs diaqonallarda yerləşən ədədlərin cəmini hesablayın.
// 4
//134 475 30 424
// 303 151 419 235
// 248 166 90 42
// 318 237 184 36
// 411 1327 bele cavab alinmalidi

// let input1 = prompt("Ededi daxil edin:");
// let input2 = prompt("ededleri daxil edin:");
// let arr = input2.split(" ").map(Number);
// let massiv = [];
// for (let i = 0; i < input1; i++) {
//     massiv.push(arr.splice(0, input1))
// }
// let cem1 = 0;
// let cem2 = 0;
// for (let i = 0; i < massiv.length; i++) {
//     for (let j = 0; j < massiv.length; j++) {
//         if (i == j) {
//             cem1 += massiv[i][j];
//         } else if ((i + j) == (input1 - 1)) {
//             cem2 += massiv[i][j];
//         }
//     }
// }
// console.log(cem1, cem2);






// const { Ask } = require('asfk');

// Ask(["", ""]).then(([n, arr]) => {

//     n = parseInt(n);
//     arr = arr.split(" ").map(Number);
//     let matrix = [];
//     for (let i = 0; i < n; i++) {
//        matrix.push(arr.splice(0,n));
//     };
//     let duz =0;
//     let ters=0;
//     for(let i=0;i<matrix.length;i++){
//         for(let j=0;j<matrix.length;j++){
//             if(i==j){
//                 duz+=matrix[i][j];
//             }
//             if((i+j)==(n-1)){
//                 ters+=matrix[i][j];
//             }
//         }
//     }
//     console.log(duz,ters);
// });








//Task 6
//3 yazanda bes setirli x seklinde ulduz emele gelsin
//5 yazanda 9 setirli olacag
// let input = prompt("Ededi daxil edin:");
// for (let i = 0; i < 2 * input - 1; i++) {
//     let newArr = [];
//     for (let j = 0; j < 2 * input - 1; j++) {
//         if (i == j || i + j == 2 * input - 2) {
//             newArr.push("*");
//         } else {
//             newArr.push("");
//         }
//     }
//     console.log(newArr.join(" "));
// }







// const { Ask } = require('asfk');

// Ask([""]).then(([n]) => {
//     n = parseInt(n);
//     for(let i=0;i<2*n-1;i++){
//         let arr=[];
//         for(let j=0;j<2*n-1;j++){
//             if(i==j || i+j==2*n-2){
//                 arr.push("*");
//             }else{
//                 arr.push(" ");
//             }
//         }
//         console.log(...arr);
//     }
// });






// Task 7
// Teatrda hər birinde M yer olan N sıra var. İki matris verilir – birincidə biletlərin sayı. İkinci isə hansı biletlərin satıldığını, hansıların satılmadığını bildirdiğini (1 – uyğun biletin satıldığını, 0 satılmadığını).
// Tamaşadan əldə olunan ümumi mədaxili təyin edin.
//3 3
// 1 2 3
// 4 5 6
// 7 8 9

//1 0 1
//0 1 0
//1 0 1




// let input1 = prompt("1 ci matrixi teyin edin:");
// let input2 = prompt("2 ci matrixi teyin edin:");
// let input3 = prompt("Ededleri daxil edin:");
// let input4 = prompt("2 ci ededleri daxil edin:");
// let arr1 = input3.split(" ").map(Number);
// let arr2 = input4.split(" ").map(Number);
// let matrix1 = [];
// let matrix2 = [];
// let cem = 0;
// for (let i = 0; i < input1; i++) {
//     matrix1.push(arr1.splice(0, input1))
// }
// for (let i = 0; i < input2; i++) {
//     matrix2.push(arr2.splice(0, input2));
// }
// for (let i = 0; i < matrix1.length; i++) {
//     for (let j = 0; j < matrix2.length; j++) {
//         if (matrix2[i][j] == 1) {
//             cem += matrix1[i][j];
//         }
//     }
// }
// console.log(cem);







// const { Ask } = require('asfk');

// Ask(["", "","",""]).then(([n,a,arr1,arr2]) => {
//     a=parseInt(a);
//     n = parseInt(n);
//     arr1 = arr1.split(" ").map(Number);
//     arr2=arr2.split(" ").map(Number);
//     let cem=0;
//     let matrix1 = [];
//     for (let i = 0; i < n; i++) {
//        matrix1.push(arr1.splice(0,n));
//     };
//     let matrix2 = [];
//     for (let i = 0; i < a; i++) {
//        matrix2.push(arr2.splice(0,n));
//     };
//     for(let i=0;i<matrix1.length;i++){
//         for(let j=0;j<matrix2.length;j++){
//             if(matrix2[i][j]==1){
//                 cem+=matrix1[i][j];
//             }
//         }
//     }
//     console.log(cem);
// });



