//Arrays practice
//Task 1
//N sayda tam ədədlərdən ibarət massiv verilir. Bu massivin ən kiçik və ən böyük elementlərindən başqa bütün elementlərinin cəmini tapın.
//6 2 7 1 7 1 2
//10


// var input = prompt("Ededleri daxil edin:");
// let arr = input.split(" ").map(Number);
// let max = arr[0];
// let min = arr[0];
// let cem = 0;
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
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] !== max && arr[i] !== min) {
//         cem += arr[i];
//     }
// }
// console.log(cem);







// const { Ask } = require('asfk');

// Ask(["", ""]).then(([n, arr]) => {
//     n = parseInt(n);
//     arr = arr.split(" ").map(Number);
//     let max=arr[0];
//     let min=arr[0];
//     let cem=0;
//     for(let i=0;i<arr.length;i++){
//         if(arr[i]>max){
//             max=arr[i];
//         }
//     }
//     for(let i=0;i<arr.length;i++){
//         if(arr[i]<min){
//             min=arr[i];
//         }
//     }
//     for(let i=0;i<arr.length;i++){
//         if(arr[i]!==max&& arr[i]!==min){
//             cem+=arr[i];
//         }
//     }
//     console.log(cem);
// });





//Task 2
//n sayda tam ədədlərdən ibarət massiv verilir. Bu massivdə sonuncu rast gəlinən ən böyük elementi tapıb sonuncu elementlə yerlərini dəyişin. Digər elementləri olduğu kimi saxlayın.
//6 -3 7 -4 7 4 -5
//6 -3 7 -4 -5 4 7



// let input = prompt("Ededleri daxil edin:");
// let arr = input.split(" ").map(Number);
// let max = arr[0];
// let index;
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] >= max) {
//         max = arr[i];
//         index = i;
//     }
// }
// let temp = arr[index];
// arr[index] = arr[arr.length - 1];
// arr[arr.length - 1] = temp;
// console.log(...arr);






// const { Ask } = require('asfk');

// Ask(["", ""]).then(([n, arr]) => {
//     n = parseInt(n);
//     arr = arr.split(" ").map(Number);
//     let max=arr[0];
//     let index=0;
//     for(let i=0;i<arr.length;i++){
//         if(arr[i]>=max){
//             max=arr[i];
//             index=i;
//         }   
//     }
//     let temp=arr[index];
//     arr[index]=arr[arr.length-1];
//     arr[arr.length-1]=temp;
//     console.log(...arr);
// });







//Task 3
//n tam ədəddən ibarət massiv proqramın girişinə tərs ardıcıllıqla verilmişdir - yəni sonuncudan birinci elementə qədər. Bu massivin ilkin vəziyyətini bərpa edin.
//6 0 -7 2 -3 5 7
//7 5 -3 2 -7 0 6


// let input = prompt("ededleri daxil edin:");
// let arr = input.split(" ").map(Number);
// let newArr = [];
// for (let i = arr.length - 1; i >= 0; i--) {
//     newArr.push(arr[i]);
// }
// console.log(newArr.join(" "));





// const { Ask } = require('asfk');

// Ask(["", ""]).then(([n, arr]) => {
//     n = parseInt(n);
//     arr = arr.split(" ").map(Number);
//     let arr1=[];
//     for(let i=arr.length-1;i>=0;i--){
//         arr1.push(arr[i]);
//     }
//     console.log(arr1);
// });




//Task 4
//Sırasıyla m ve n boyutunda iki sıralı dizi nums1 ve nums2 verildiğinde, iki sıralı dizinin medyanını döndürür.
//[1,3] [2]
//2   3+1+2/3
//[1,2] [3,4]
//2.5 1+2+3+4/4

// let input1 = prompt("1 ci ededleri daxil edin:");
// let input2 = prompt("2 ci ededleri daxil edin:");
// let arr1 = input1.split(" ").map(Number);
// let arr2 = input2.split(" ").map(Number);
// let cem1 = 0;
// let cem2 = 0;
// let count1 = arr1.length, count2 = arr2.length;
// for (let i = 0; i < arr1.length; i++) {
//     cem1 += arr1[i];
// }
// for (let i = 0; i < arr2.length; i++) {
//     cem2 += arr2[i];
// }
// console.log((cem1 + cem2) / (count1 + count2));






// const { Ask } = require('asfk');

// Ask(["", "",""]).then(([n, arr1,arr2]) => {
//     n = parseInt(n);
//     arr1 = arr1.split(" ").map(Number);
//     arr2=arr2.split(" ").map(Number);
//     let cem1=0;
//     let cem2=0;
//     let say1=arr1.length;
//     let say2=arr2.length;
//     for(let i=0;i<arr1.length;i++){
//         cem1+=arr1[i];
//     }
//     for(let i=0;i<arr2.length;i++){
//         cem2+=arr2[i];
//     }
//     console.log((cem1+cem2)/(say1+say2));
// });





//Task 5
// Sıralanmamış bir tamsayı dizi sayıları verildiğinde, eksik olan en küçük pozitif tamsayıyı döndürün.
//[1,2,0]
//3
//[3,4,-1,1]
//2
// [7,8,9,11,12]
//1


// let input = prompt("Ededleri daxil edin:");
// let arr = input.split(" ").map(Number);
// let missingNumber = 1;
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] == missingNumber) {
//         missingNumber++;
//     }
// }
// console.log(missingNumber);





// const { Ask } = require("asfk");
// Ask(["Ededleri daxil edin:"]).then(([arr]) => {
//     arr = arr.split(" ").map(Number);
//     let missingNumber = 1;
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] == missingNumber) {
//             missingNumber++;
//         }
//     }
//     console.log(missingNumber);
// });










