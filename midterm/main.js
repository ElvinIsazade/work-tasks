//Midterm
//Task1
//Ikireqemli ededin reqemlerinin cemini tapin,meselen input=23 output=5;
// var input = Number(prompt("ikireqemli ededi daxil et:"));
// let firstDigit = parseInt(input / 10);
// let lastDigit = input % 10;
// console.log(firstDigit + lastDigit);


// const { Ask } = require('asfk');

// Ask(["ikireqemli eded daxil edin:"]).then(([a]) => {
//     a = parseInt(a);
//     let firstDigit = parseInt(a / 10);
//     let lastDigit = a % 10;
//     console.log(firstDigit + lastDigit);
// });






//Task 2
// Ucreqemli natural eded verilmisdir.onun reqemlerinin yerini ele deyisdirinki alinmis eded en boyuk olsun
//sonra bu ededin kvadratini tapin,meselen input=327 output=535824;
// var input = Number(prompt("3 reqemli eded daxil edin:"));
// let a = parseInt(input / 100);
// let b = parseInt(input / 10) % 10;
// let c = input % 10;
// let abc = input;
// let acb = a * 100 + c * 10 + b;
// let bac = b * 100 + a * 10 + c;
// let bca = b * 100 + c * 10 + a;
// let cba = c * 100 + b * 10 + a;
// let cab = c * 100 + a * 10 + b;
// if (abc > acb && abc > bac && abc > bca && abc > cba && abc > cab) {
//     console.log(abc ** 2);
// } else if (acb > bac && acb > bca && acb > cba && acb > cab) {
//     console.log(acb ** 2);
// } else if (bac > bca && bac > cba && bac > cab) {
//     console.log(bac ** 2);
// } else if (bca > cba && bca > cab) {
//     console.log(bca ** 2);
// } else if (cba > cab) {
//     console.log(cba ** 2);
// } else {
//     console.log(cab ** 2);
// }







// const { Ask } = require('asfk');
// Ask([""]).then(([eded]) => {
//     eded = parseInt(eded);
//     let a = parseInt(eded / 100);
//     let b = parseInt(eded / 10) % 10;
//     let c = eded % 10;
//     let abc = eded;
//     let acb = a * 100 + c * 10 + b;
//     let bac = b * 100 + a * 10 + c;
//     let bca = b * 100 + c * 10 + a;
//     let cab = c * 100 + a * 10 + b;
//     let cba = c * 100 + b * 10 + a;
//     if (abc > acb && abc > bac && abc > bca && abc > cab && abc > cba) console.log(abc**2);
//     else if (acb > bac && acb > bca && acb > cab && acb > cba) console.log(acb**2);
//     else if (bac > bca && bac > cab && bac > cba) console.log(bac**2);
//     else if (bca > cab && bca > cba) console.log(bca**2);
//     else if (cab > cba) console.log(cab**2);
//     else console.log(cba**2);
// });







//Task 3
//hec olmasa iki eyni reqem meselen input=12345 output=no input=63246 output=yes;
// var input = Number(prompt("5 reqemli eded girin:"));
// let a = parseInt(input / 10000);
// let b = parseInt(input / 1000) % 10;
// let c = parseInt(input / 100) % 10;
// let d = parseInt(input / 10) % 10;
// let e = input % 10;
// if (a == b || a == c || a == d || a == e || b == c || b == d || b == e || c == d || c == e || d == e) {
//     console.log("yes");
// } else {
//     console.log("no");
// }




// const { Ask } = require('asfk');
// Ask([""]).then(([n]) => {
//     a = parseInt(n / 10000);
//     b = parseInt(n / 1000) % 10;
//     c = parseInt(n / 100) % 10;
//     d = parseInt(n / 10) % 10;
//     e = n % 10;
//     if (a == b || a == c || a == d || a == e || b == c || b == d || b == e || c == d || c == e || d == e) console.log("YES");
//     else console.log("NO");
// });



// Task 4
// n in natural tek bolenlerini tapin,meselen input=12,output=1 3;
// var input = Number(prompt("eded daxil edin:"));
// let eded = input;
// while (input > 0) {
//     if (eded % input == 0 && input % 2 == 1) {
//         console.log(input);
//     }
//     input--;
// }




// const { Ask } = require('asfk');

// Ask([""]).then(([a]) => {
//     a=parseInt(a);
//     let inputNumber=a;
//     while(a>0){
//         if(inputNumber%a==0 && a%2==1){
//             console.log(a);
//         }
//         a--;
//     }
// });


// bu meseleni for ile etmek ucun:

// const { Ask } = require('asfk');

// Ask([""]).then(([a]) => {
//     a=parseInt(a);
//     for(let i=1;i<=a;i++){
//         if(a%i==0 && i%2==1){
//             console.log(i);
//         }
//     }
// });





//Task 5
// bir ededden digerine qeder yalniz tek ededlerin cemini yazdirin,meselen input=2,5 output=8; input= -15,10 output=39;
// var input1 = Number(prompt("1 ci ededi daxil edin:"));
// var input2 = Number(prompt("2 ci ededi daxil edin:"));
// let cem = 0;
// while (input2 >= input1) {
//     if (input2 % 2 !== 0) {
//         cem += input2;
//     }
//     input2--;
// }
// console.log(cem);






// bu meseleni for ile etmek ucun:
// const { Ask } = require('asfk');

// Ask(["",""]).then(([a,b]) => {
//     a=parseInt(a);
//     b=parseInt(b);
//     let cem=0;
//     for(let i=a;i<=b;i++){
//         if(i%2!==0){
//             cem+=i;
//         }
//     }
//     console.log(cem);
// });
































