// if else practice
// Task 1
// iki reqemli eded verilir.onlarin reqemlerini deyisin,meselen input=38 output=83;
// var input = Number(prompt("2 reqemli eded daxil et:"));
// let firstDigit = parseInt(input / 10);
// let lastDigit = input % 10;
// console.log(String(lastDigit) + String(firstDigit));


// const { Ask } = require("asfk");
// Ask(["2 reqemli eded daxil edin:"]).then(([a]) => {
//     a = parseInt(a);
//     let firstDigit = parseInt(a / 10);
//     let lastDigit = a % 10;
//     console.log(String(lastDigit) + String(firstDigit));
// });






// Task 2
//4 reqemli eded verilir.butun reqemlerin cut olub olmadigini yoxlayin.input=6082 outpu=yes; input=1246 output=no;
// var input = Number(prompt("4 reqemli eded daxil edin:"));
// let firstNumber = parseInt(input / 1000);
// let secondNumber = parseInt(input / 100) % 10;
// let thirdNumber = parseInt(input / 10) % 10;
// let lastNumber = input % 10;
// if (firstNumber % 2 == 0 && secondNumber % 2 == 0 && thirdNumber % 2 == 0 && lastNumber % 2 == 0) {
//     console.log("yes");
// } else {
//     console.log("no");
// }




// const { Ask } = require("asfk");
// Ask(["4 reqemli eded daxil edin:"]).then(([a]) => {
//     a = parseInt(a);
//     let firstNumber = parseInt(a / 1000);
//     let secondNumber = parseInt(a / 100) % 10;
//     let thirdNumber = parseInt(a / 10) % 10;
//     let lastNumber = a % 10;
//     if (firstNumber % 2 == 0 && secondNumber % 2 == 0 && thirdNumber % 2 == 0 && lastNumber % 2 == 0) {
//         console.log("yes");
//     } else {
//         console.log("no");
//     }
// });








//Task 3
//4 reqemli eded verilir.onun ard-arda 3 ve 7 reqemleri varsa yes eks halda no cap edin,meselen input=1378 outpu=yes;input=3875 output=no;
// var input = Number(prompt("4 reqemli eded girin:"));
// let firstNumber = parseInt(input / 1000);
// let secondNumber = parseInt(input / 100) % 10;
// let thirdNumber = parseInt(input / 10) % 10;
// let lastNumber = input % 10;
// if (firstNumber == 3 && secondNumber == 7 || secondNumber == 3 && thirdNumber == 7 || thirdNumber == 3 && lastNumber == 7) {
//     console.log("yes");
// } else {
//     console.log("no");
// }





// const { Ask } = require("asfk");
// Ask(["4 reqemli eded daxil edin:"]).then(([a]) => {
//     a = parseInt(a);
//     let firstNumber = parseInt(a / 1000);
//     let secondNumber = parseInt(a / 100) % 10;
//     let thirdNumber = parseInt(a / 10) % 10;
//     let lastNumber = a % 10;
//     if (firstNumber == 3 && secondNumber == 7 || secondNumber == 3 && thirdNumber == 7 || thirdNumber == 3 && lastNumber == 7) {
//         console.log("yes");
//     } else {
//         console.log("no");
//     }
// });







// Task 4
//4 reqemli eded verilir. onda en azi bir tek eded varsa yes eks halda no cap edin.meselen,input=2345 outpu=yes; input=8824 output=no;
// var input = Number(prompt("4 reqemli eded yazin:"));
// let firstNumber = parseInt(input / 1000);
// let secondNumber = parseInt(input / 100) % 10;
// let thirdNumber = parseInt(input / 10) % 10;
// let lastNumber = input % 10;
// if (firstNumber % 2 == 1 || secondNumber % 2 == 1 || thirdNumber % 2 == 1 || lastNumber % 2 == 1) {
//     console.log("yes");
// } else {
//     console.log("no");
// }





// const { Ask } = require("asfk");
// Ask(["4 reqemli eded daxil edin:"]).then(([a]) => {
//     a = parseInt(a);
//     let firstNumber = parseInt(a / 1000);
//     let secondNumber = parseInt(a / 100) % 10;
//     let thirdNumber = parseInt(a / 10) % 10;
//     let lastNumber = a % 10;
//     if (firstNumber % 2 == 1 || secondNumber % 2 == 1 || thirdNumber % 2 == 1 || lastNumber % 2 == 1) {
//         console.log("yes");
//     } else {
//         console.log("no");
//     }
// });







//Task 5
// 4 reqemli eded verilir eger input=2727 output=yes; input=6677 output=yes; input=1221 outpu=yes; input=2224 output=no;
// var input = Number(prompt("4 reqemli eded yazin:"));
// let firstNumber = parseInt(input / 1000);
// let secondNumber = parseInt(input / 100) % 10;
// let thirdNumber = parseInt(input / 10) % 10;
// let lastNumber = input % 10;
// if (firstNumber == thirdNumber && secondNumber == lastNumber || firstNumber == secondNumber && thirdNumber == lastNumber || firstNumber == lastNumber && secondNumber == thirdNumber) {
//     console.log("yes");
// } else {
//     console.log("no");
// }








// const { Ask } = require("asfk");
// Ask(["4 reqemli eded girin:"]).then(([a]) => {
//     a = parseInt(a);
//     let firstNumber = parseInt(a / 1000);
//     let secondNumber = parseInt(a / 100) % 10;
//     let thirdNumber = parseInt(a / 10) % 10;
//     let lastNumber = a % 10;
//     if (firstNumber == thirdNumber && secondNumber == lastNumber || firstNumber == secondNumber && thirdNumber == lastNumber || firstNumber == lastNumber && secondNumber == thirdNumber) {
//         console.log("yes");
//     } else {
//         console.log("no");
//     }
// });








//Task 6
// yariscilar yumru masada toplandi.yariscilar stola tortu qoymaq isdeyirler ve tort duzbucaqlidir.belelikle bir sual yaranir
// bu tort stola sigisacaq yoxsa yox. input=38,40,60; output=yes 1 ci reqem stolun radiusu 2 ci tortun eni 3 cu ise tortun uzunlugudur.
// var r = Number(prompt("Stolun radiusunu yazin:"));
// var w = Number(prompt("tortun enini yazin:"));
// var l = Number(prompt("tortun uzunlugunu yazin:"));
// let d = r * 2;
// if ((d ** 2) >= ((w ** 2) + (l ** 2))) {
//     console.log("yes");
// } else {
//     console.log("no");
// }




// const { Ask } = require("asfk");
// Ask(["stolun radiusunu yazin:", "tortun enini yazin:", "tortun uzunlugunu yazin:"]).then(([r, w, l]) => {
//     r = parseInt(r);
//     w = parseInt(w);
//     l = parseInt(l);
//     let d = r * 2;
//     if ((d ** 2) >= ((w ** 2) + (l ** 2))) {
//         console.log("yes");
//     } else {
//         console.log("no");
//     }
// });