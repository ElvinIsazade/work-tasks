// Arrays Task 1
//n sayda həqiqi ədədlər ardıcıllığı verilir. Bütün elementlərin cəmini tapın.
//1.2 1.3 5.7 1.8 12.4
//22.4
// var input = prompt("Ededleri daxil edin:");
// let arr = input.split(" ").map(Number);
// let cem = 0;
// for (let i = 0; i < arr.length; i++) {
//     cem += arr[i];
// }
// console.log(cem);




// const { Ask } = require('asfk');

// Ask(["", ""]).then(([n, arr]) => {
//     n = parseInt(n);
//     arr = arr.split(" ").map(Number);
//     let cem = 0;
//     for (let i = 0; i < arr.length; i++) {
//         cem += arr[i];
//     }
//     console.log((cem));
// });





//Task 2
//n sayda tam ədəddən ibarət massiv verilir. Bu massivdəki ən böyük elementi tapın.
//5 9 3 4 6
//9

// var input = prompt("Ededleri daxil edin:");
// let arr = input.split(" ").map(Number);
// let max = arr[0];
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > max) {
//         max = arr[i];
//     }
// }
// console.log(max);




// const { Ask } = require("asfk");
// Ask(["Ededleri daxil edin:"]).then(([arr]) => {
//     arr = arr.split(" ").map(Number);
//     let max = arr[0];
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] > max) {
//             max = arr[i]
//         }
//     }
//     console.log(max);
// });





//Task 3
//Tam ədədlər ardıcıllığı verilir. Ardıcıllığın hər bir mənfi olmayan elementini 2 vahid artırmalı.
//1 2 3 -4
//3 4 5 -4
// var input = prompt("ededleri daxil edin:");
// let arr = input.split(" ").map(Number);
// let newArr = [];
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] >= 0) {
//         newArr.push(arr[i] + 2);
//     } else {
//         newArr.push(arr[i]);
//     }
// }
// console.log(newArr);




// const { Ask } = require('asfk');

// Ask(["", ""]).then(([n, arr]) => {
//     n = parseInt(n);
//     arr = arr.split(" ").map(Number);
//     let arr1=[];
//     for(let i=0;i<arr.length;i++){
//         if(arr[i]>=0){
//             arr1.push(arr[i]+2);
//         }else{
//             arr1.push(arr[i]);
//         }
//     }
//     console.log(arr1.join(" "));
// });





//Task 4
//Pyataçok çəmənlikdə uzanaraq xışıldayan otları seyr edirdi. O başa düşdü ki, otlar ona görə xışıldayırlar ki, çünkü külək əsir və o otlara görə küləyin gücünü necə ölçmək lazım gəldiyini düşündü. Küləyin gücü, Pyataçoka görə hazırda ən yüksək və ən alcaq otların hündürlüklərinin fərqi kimi başa düşülür.
//3 6 5 3 5 5 4 5 4 3 2 3 6 4
//4   6-2

// var input = prompt("Ededleri daxil edin:");
// let arr = input.split(" ").map(Number);
// let max = arr[0];
// let min = arr[0];
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > max) {
//         max = arr[i];
//     }
// }
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] < min) {
//         min = arr[i];
//     }
// }
// console.log(max - min);





// const { Ask } = require('asfk');

// Ask(["", ""]).then(([n, arr]) => {
//     n = parseInt(n);
//     arr = arr.split(" ").map(Number);
//     let max=arr[0];
//     let min=arr[0];
//     for(let i =0;i<arr.length;i++){
//         if(arr[i]>max){
//             max=arr[i];
//         }
//     }
//     for(let i =0;i<arr.length;i++){
//         if(arr[i]<min){
//             min=arr[i];
//         }
//     }
//     console.log(max-min);
// });






// Task 5
//Tam ədədlərdən ibarət n uzunluqlu massiv verilmişdir. Massivin elementlərini 1 addım dövrü olaraq sağa sürüşdürün.
//1 2 3 4
//4 1 2 3


// var input = prompt("Ededleri daxil edin:");
// let arr = input.split(" ").map(Number);
// arr.unshift(arr[arr.length - 1]);
// arr.pop();
// console.log(arr);




// const { Ask } = require('asfk');

// Ask(["", ""]).then(([n, arr]) => {
//     n = parseInt(n);
//     arr = arr.split(" ").map(Number);
//     arr.unshift(arr[arr.length-1]);
//     arr.pop();
//     console.log(arr.join(" "));
// });





//Task 6
//İvan Vasilyeviç bazara gedib iki qarpız almaq istədi: birini özünə, birini də qaynanası üçün. Aydın məsələdir ki, özünə daha ağır, qaynanası üçün isə yüngül qarpız seçməliydi. Lakin məsələ bundadır ki, qarpızlar çoxdur və onlardan ən yüngülü ilə ən ağırını o necə seçsin? Ona kömək edin!
//İki ədəd: İvan Vasilyeviçin qaynanası və özü üçün aldığı qarpızların çəkilərini çap edin. Lakin kimsə qarpızsız qalarsa, "Ooops!" çap edin.
//5 1 6 5 9
// 1 9


// var input = prompt("Ededleri daxil edin:");
// let arr = input.split(" ").map(Number);
// let max = arr[0];
// let min = arr[0];
// if (arr.length > 1) {
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] > max) {
//             max = arr[i];
//         }
//     }
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] < min) {
//             min = arr[i];
//         }
//     }
//     console.log(min, max);
// } else {
//     console.log("Oops!");
// }






// const { Ask } = require('asfk');

// Ask(["", ""]).then(([n, arr]) => {
//     n = parseInt(n);
//     arr = arr.split(" ").map(Number);
//     let max=arr[0];
//     let min=arr[0];
//     if(arr.length==1){
//         console.log("oops");
//     }else{
//         for(let i=0;i<arr.length;i++){
//             if(arr[i]>max){
//                 max=arr[i];
//             }
//         }
//         for(let i=0;i<arr.length;i++){
//             if(arr[i]<min){
//                 min=arr[i];
//             }
//         }
//         console.log(min,max);
//     }
// });






//Task 7
// n sayda tam ədədlər ardıcıllığı verilir. Onun bütün tək elementlərini verməli.
//14 17 16 3 7 19 9
//17 3 7 19 9



// var input = prompt("Ededleri daxil edin:");
// let arr = input.split(" ").map(Number);
// let newArr = [];
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 == 1) {
//         newArr.push(arr[i]);
//     }
// }
// console.log(newArr);






// const { Ask } = require('asfk');

// Ask(["", ""]).then(([n, arr]) => {
//     n = parseInt(n);
//     arr = arr.split(" ").map(Number);
//     let arr1=[];
//     for(let i=0;i<arr.length;i++){
//         if(arr[i]%2==1){
//             arr1.push(arr[i]);
//         }
//     }
//     console.log(arr1);
// });




//Task 8
//n sayda tam ədəddən ibarət massiv verilmişdir. Massivin ən böyük elementlərinin sayını tapın.
//1 6 2 6 2
//2


// let input = prompt("Ededleri daxil edin:");
// let arr = input.split(" ").map(Number);
// let count = 0;
// let max = arr[0];
// for (let i = 1; i < arr.length; i++) {
//     if (arr[i] >= max) {
//         max = arr[i];
//         count++;
//     }
// }
// console.log(count);





// const { Ask } = require('asfk');

// Ask(["", ""]).then(([n, arr]) => {
//     n = parseInt(n);
//     arr = arr.split(" ").map(Number);
//     let max=arr[0];
//     let say=1;
//     for(let i=1;i<arr.length;i++){
//         if(arr[i]>=max){
//             max=arr[i];
//         }
//         if(arr[i+1]==max){
//             say++;
//         }
//     }
//     console.log(say);
// });




//Task 9
//n sayda tam ədəddən ibarət massiv verilmişdir. Massivin ən böyük qiymətinə bərabər olmayan bütün elementlərinin cəmini hesablayın.
// 5 9 3 4 6 9
//18


// var input = prompt("Ededleri daxil edin:");
// let arr = input.split(" ").map(Number);
// let max = arr[0];
// let cem = 0;
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] >= max) {
//         max = arr[i];
//     }
// }
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] < max) {
//         cem += arr[i];
//     }
// }
// console.log(cem);






// const { Ask } = require('asfk');

// Ask(["", ""]).then(([n, arr]) => {
//     n = parseInt(n);
//     arr = arr.split(" ").map(Number);
//     let max = arr[0];
//     let cem = 0;
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] >= max) {
//             max = arr[i];
//         }
//     }
//     for(let i=0;i<arr.length;i++){
//         if(arr[i]<max){
//             cem+=arr[i];
//         }
//     }
//     console.log(cem);
// });






//Task 10
//n sayda tam ədədlərdən ibarət massiv verilir. Massivin iki ən böyük elementinin cəmini tapın.
//1 5 2 6 3
//11 6 +5



// var input = prompt("Ededi daxil edin:");
// let arr = input.split(" ").map(Number);
// let max1 = arr[0];
// let max2 = arr[0];
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > max1) {
//         max1 = arr[i];
//     }
// }
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] < max1 && arr[i] > max2) {
//         max2 = arr[i];
//     }
// }
// console.log(max1 + max2);






// const { Ask } = require('asfk');

// Ask(["", ""]).then(([n, arr]) => {
//     n = parseInt(n);
//     arr = arr.split(" ").map(Number);
//     let max=arr[0];
//     let max1=arr[0];
//     for(let i=0;i<arr.length;i++){
//         if(arr[i]>max){
//             max=arr[i];
//         }
//     }
//     for(let i=0;i<arr.length;i++){
//         if(arr[i]<max && arr[i]>max1){
//             max1=arr[i];
//         }
//     }
//     console.log(max +max1);
// });

















