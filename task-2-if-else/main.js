//Task 1
//Sagirdin ders naliyetlerini yazdirin.ilkin seviyye ucun initial(1 den 3 e qeder),orta ucun average(4 den 6 ye qeder),kafi ucun sufficient (7 den 9 a qeder),yuksek ucun high(10 dan 12 e qeder);
// var input = Number(prompt("Balinizi girin:"));
// if (input >= 1 && input <= 3) {
//     console.log("initial");
// } else if (input >= 4 && input <= 6) {
//     console.log("average");
// } else if (input >= 7 && input <= 9) {
//     console.log("sufficient");
// } else if (input >= 10 && input <= 12) {
//     console.log("high");
// } else {
//     console.log("duzgun reqem yazin");
// }


// const { Ask } = require("asfk");
// Ask(["Balinizi yazin:"]).then(([a]) => {
//     a = parseInt(a);
//     if (a >= 1 && a <= 3) {
//         console.log("initial");
//     } else if (a >= 4 && a <= 6) {
//         console.log("average");
//     } else if (a >= 7 && a <= 9) {
//         console.log("sufficient");
//     } else if (a >= 10 && a <= 12) {
//         console.log("high");
//     } else {
//         console.log("duzgun reqem yazin");
//     }
// });






// Task 2
// ucreqemli ededi reqemlerine ayirin meselen: input = 198, output = 1
//                                                                   9
//                                                                   8
// var input = Number(prompt("Ucreqemli eded yazin:"));
// let firstNumber = parseInt(input / 100);
// let secondNumber = parseInt(input / 10) % 10;
// let lastNumber = input % 10;
// console.log(firstNumber);
// console.log(secondNumber);
// console.log(lastNumber);


// const { Ask } = require("asfk");
// Ask(["Ucreqemli eded yazin:"]).then(([a]) => {
//     a = parseInt(a);
//     let firstNumber = parseInt(a / 100);
//     let secondNumber = parseInt(a / 10) % 10;
//     let lastNumber = a % 10;
//     console.log(firstNumber);
//     console.log(secondNumber);
//     console.log(lastNumber);
// });





//Task 3
// iki natural ededin birinci en kiciyini sonra en boyuyunu verin.meselen: input=4,2 output=2 4; input=10,100;output=10 100;
// var input1 = Number(prompt("1 ci ededi yazin:"));
// var input2 = Number(prompt("2 ci ededi yazin:"));
// if (input1 > input2) {
//     console.log(input2, input1);
// } else {
//     console.log(input1, input2);
// }



// const { Ask } = require("asfk");
// Ask(["1ci ededi yazin:", "2 ci ededi yazin:"]).then(([a, b]) => {
//     a = parseInt(a);
//     b = parseInt(b);
//     if (a > b) {
//         console.log(b, a);
//     } else {
//         console.log(a, b);
//     }
// });





//Task 4
//iki reqem cutdurse 1 eks halda 0 cap edin meselen, input=1,2 output=0;input=2 4 output=1;
// var input1 = Number(prompt("1 ci ededi yazin:"));
// var input2 = Number(prompt("2 ci ededi yazin:"));
// if (input1 % 2 == 0 && input2 % 2 == 0) {
//     console.log(1);
// } else {
//     console.log(0);
// }



// const { Ask } = require("asfk");
// Ask(["1 ci reqemi daxil edin:", "2 ci reqemi daxil edin"]).then(([a, b]) => {
//     a = parseInt(a);
//     b = parseInt(b);
//     if (a % 2 == 0 && b % 2 == 0) {
//         console.log(1);
//     } else {
//         console.log(0);
//     }
// });






// Task 5
// eger isdifadeci musbet eded girersen positive, 0 girerse zero, menfi eded daxil ederse negative cap edin 
// var input = Number(prompt("Reqem daxil edin:"));
// if (input > 0) {
//     console.log("positive");
// } else if (input == 0) {
//     console.log("zero");
// } else {
//     console.log("negative");
// }


// const { Ask } = require("asfk");
// Ask(["Reqem daxil edin:"]).then(([a]) => {
//     a = parseInt(a);
//     if (a > 0) {
//         console.log("positive");
//     } else if (a == 0) {
//         console.log("zero");
//     } else {
//         console.log("negative");
//     }
// });





// Task 6
//eger isdifdeci tek eded yazsa odd, cut eded yazsa even cap edin.
// var input = Number(prompt("Reqem daxil edin:"));
// if (input % 2 == 0) {
//     console.log("even");
// } else {
//     console.log("odd");
// }



// const { Ask } = require("asfk");
// Ask(["Reqem daxil edin:"]).then(([a]) => {
//     a = parseInt(a);
//     if (a % 2 == 0) {
//         console.log("even");
//     } else {
//         console.log("odd");
//     }
// });



//Task 7
// eger bir eded diger iki ededin her birine bolunurse onda yes,eks halda no cap edin.meselen,input=12,4,6 output=yes;input=10,5,6 output=no;
// var input1 = Number(prompt("1 ci reqemi daxil edin:"));
// var input2 = Number(prompt("bolduyunuz reqemi daxil edin:"));
// var input3 = Number(prompt("bolduyunuz 2 ci reqemi daxil edin:"));
// if (input1 % input2 == 0 && input1 % input3 == 0) {
//     console.log("yes");
// } else {
//     console.log("no");
// }



// const { Ask } = require("asfk");
// Ask(["Reqemi daxil edin:", "bolduyunuz reqemi daxil edin:", "bolduyunuz 2 ci reqemi daxil edin:"]).then(([a, b, c]) => {
//     a = parseInt(a);
//     b = parseInt(b);
//     c = parseInt(c);
//     if (a % b == 0 && a % c == 0) {
//         console.log("yes");
//     } else {
//         console.log("no");
//     }
// });
