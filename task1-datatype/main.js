// ClassWork Task 1
// Uc reqemli natural ededin cemini tapin:
// Meselen,input:512, output:8;
// iki cur input daxil ede bilerik. 1 cisi prompt vasitesile, ikincisi Ask vasitesile bu meselede ikisine baxacagiq.


// var input = Number(prompt("Reqem daxil edin:"));
// let firstNumber = parseInt(input / 100);
// let secondNumber = parseInt(input / 10) % 10;
// let thirdNumber = input % 10;
// console.log(firstNumber + secondNumber + thirdNumber);

// const { Ask } = require("asfk");
// Ask(["Reqem daxil edin"]).then(([a]) => {
//     a = parseInt(a);
//     let firstNumber = parseInt(a / 100);
//     let secondNumber = parseInt(a / 10) % 10;
//     let thirdNumber = a % 10;
//     console.log(firstNumber + secondNumber + thirdNumber);
// });




// Task 2
// Natural a ededi verilmisdir.(a>99).a ededinin axirdan ucuncu reqemini tapin.
// Meselen,input: 512, output: 5; input: 89123, output: 1;



// var input = Number(prompt("Reqem daxil edin:"));
// let thirdNumber = parseInt(input / 100) % 10;
// console.log(thirdNumber);


// const { Ask } = require("asfk");
// Ask(["Reqem daxil edin:"]).then(([a]) => {
//     a = parseInt(a);
//     let thirdNumber = parseInt(a / 100) % 10;
//     console.log(thirdNumber);
// });



// Task 3
//En axirinci ededi silin. Meselen, input:512, output: 51;
// var input = parseInt(prompt("Reqem daxil edin:"));
// let deleteLastNumber = parseInt(input / 10);
// console.log(deleteLastNumber);

// const { Ask } = require("asfk");
// Ask(["Reqem daxil edin:"]).then(([a]) => {
//     a = parseInt(a);
//     let deleteLastNumber = parseInt(a / 10);
//     console.log(deleteLastNumber);
// });





// Task 4
//Reqemin ilk ve son reqeminin cemini tapin: input: 1235, output:6;
// var input = Number(prompt("Reqem daxil edin:"));
// let firstNumber = parseInt(input / 1000);
// let fourthNumber = input % 10;
// console.log(firstNumber + fourthNumber);


// const { Ask } = require("asfk");
// Ask(["Reqem daxil edin:"]).then(([a]) => {
//     a = parseInt(a);
//     let firstNumber = parseInt(a / 1000);
//     let lastNumber = a % 10;
//     console.log(firstNumber + lastNumber);
// });



// Task 5
// 2 ededin kvadratinin cemini tapin. meselen: input: 2,3  , output: 13;
// var input1 = Number(prompt("Reqem daxil edin:"));
// var input2 = Number(prompt("2 ci reqemi daxil edin:"));
// console.log((input1 ** 2) + (input2 ** 2));


// const { Ask } = require("asfk");
// Ask(["1 ci qedemi daxil edin:", "2 ci reqemi daxil edin:"]).then(([a, b]) => {
//     a = parseInt(a);
//     b = parseInt(b);
//     let firstSquare = a * a;
//     let secondSquare = b * b;
//     console.log(firstSquare + secondSquare);
// });





//Task 6
// reqemleri ayirin.meselen: input:23, output: 2 3;
// var input = Number(prompt("Reqemi daxil edin:"));
// let firstNumber = parseInt(input / 10);
// let lastNumber = input % 10;
// console.log(firstNumber, lastNumber);


// const { Ask } = require("asfk");
// Ask(["Reqemi daxil edin:"]).then(([a]) => {
//     let firstNumber = parseInt(a / 10);
//     let lastNumber = a % 10;
//     console.log(firstNumber, lastNumber);
// });



// Task 7
//Reqemin teklik ve onluq reqemlerinin yerini deyisdirin.meselen: input:512,output:521;
// var input = Number(prompt("Reqem daxil edin:"));
// let firstNumber = parseInt(input / 100);
// let previousNumber = parseInt(input / 10) % 10;
// let lastNumber = input % 10;
// console.log(Number(String(firstNumber) + String(lastNumber) + String(previousNumber)));


// const { Ask } = require("asfk");
// Ask(["Reqemi daxil edin:"]).then(([a]) => {
//     a = parseInt(a);
//     let firstNumber = parseInt(a / 100);
//     let previousNumber = parseInt(a / 10) % 10;
//     let lastNumber = a % 10;
//     console.log(Number(String(firstNumber) + String(lastNumber) + String(previousNumber)));
// });





// Task 8
//ededin yuzluk ve onluq reqemlerinin yerlerini deyisin. meselen:input:512,output:152;
// var input = Number(prompt("Reqem daxil edin:"));
// let firstNumber = parseInt(input / 100);
// let previousNumber = parseInt(input / 10) % 10;
// let lastNumber = input % 10;
// console.log(Number(String(previousNumber) + String(firstNumber) + String(lastNumber)));



// const { Ask } = require("asfk");
// Ask(["Reqemi daxil edin:"]).then(([a]) => {
//     a = parseInt(a);
//     let firstNumber = parseInt(a / 100);
//     let previousNumber = parseInt(a / 10) % 10;
//     let lastNumber = a % 10;
//     console.log(Number(String(previousNumber) + String(firstNumber) + String(lastNumber)));
// });





// Task 9
// Ededin reqemlerinin hasilini tapin.meselen:input:235,output:30;
// var input = Number(prompt("reqem daxil edin:"));
// let firstNumber = parseInt(input / 100);
// let secondNumber = parseInt(input / 10) % 10;
// let lastNumber = input % 10;
// console.log(firstNumber * secondNumber * lastNumber);


// const {Ask}=require("asfk");
// Ask(["Reqem daxil edin:"]).then(([a])=>{
//     let firstNumber = parseInt(a / 100);
//     let secondNumber = parseInt(a / 10) % 10;
//     let lastNumber = a % 10;
//     console.log(firstNumber * secondNumber * lastNumber);
// });




// Task 10
// Reqemin onluq reqemini silin.meselen input:512,output:52, input:7892,output:782;
// var input = Number(prompt("Reqem daxil edin:"));
// let secondNumber = parseInt(input / 100);
// let lastNumber = input % 10;
// console.log(String(secondNumber) + String(lastNumber));


// const { Ask } = require("asfk");
// Ask(["Reqemi daxil edin:"]).then(([a]) => {
//     a = parseInt(a);
//     let secondNumber = parseInt(a / 100);
//     let lastNumber = a % 10;
//     console.log(String(secondNumber) + String(lastNumber));
// });



// Task 11
//a sayda mekteb usaglari almalari beraber olaraq bolur.her usaga dusen alma sayini yaz.meselen input:3,14  output:4;
// var input1 = Number(prompt("Usaq sayini daxil edin:"));
// var input2 = Number(prompt("Almalarin sayini gir:"));
// let appleCount = parseInt(input2 / input1);
// console.log(appleCount);



// const { Ask } = require("asfk");
// Ask(["Usaq sayini daxil edin:", "Almalarin sayini yaz:"]).then(([a, b]) => {
//     a = parseInt(a);
//     b = parseInt(b);
//     let appleCount = parseInt(b / a);
//     console.log(appleCount);
// });





