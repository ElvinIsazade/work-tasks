//ClassWork Loops
//Task 1
// ededin reqemlerinin cemini tapin,meselen input=321 output=6;
// var input = Number(prompt("eded yazin:"));
// let cem = 0;
// while (input > 0) {
//     let lastNumber = input % 10;
//     cem += lastNumber;
//     input = parseInt(input / 10);
// }
// console.log(cem);


// const { Ask } = require('asfk');

// Ask(["Ededi yazin:"]).then(([a]) => {
// a=parseInt(a);
//     let cem = 0;
//     while (a > 0) {
//         let last_number = a % 10;
//         cem += last_number;
//         a = parseInt(a / 10);
//     }
//     console.log(cem);
// });








// Task 2
//tam ededin 2 ci reqemini tapmali, meselen input=43568 output=3;
// var input = Number(prompt("Ededi daxil edin:"));
// while (input > 100) {
//     input = parseInt(input / 10);
// }
// console.log(input % 10);



// const { Ask } = require('asfk');

// Ask(["Ededi yazin:"]).then(([a]) => {
//     a = parseInt(a);
//     while (a > 100) {
//         a = parseInt(a / 10);
//     }
//     console.log(a % 10);
// });







//Task 3
//ededin birinci ve sonuncu reqemlerinin cemini tapin,meselen input=2345 output=7;
// var input = Number(prompt("ededi yazin:"));
// let last_number = input % 10;
// while (input >= 10 || input <= -10) {
//     input = parseInt(input / 10);
// }
// console.log(input + last_number);



// const { Ask } = require('asfk');

// Ask(["Ededi yazin:"]).then(([a]) => {
//     a = parseInt(a);
//     let last_number = a % 10;
//     while (a >= 10 || a<=-10) {
//         a = parseInt(a / 10);
//     }
//     console.log(last_number + a);
// });





//Task 4
// ededin reqemlerinin sayini hesablayin,meselen input=12343 output=5;
// let input = Number(prompt("Ededi yazin:"));
// let count = 0;
// while (input > 0) {
//     input = parseInt(input / 10);
//     count++;
// }
// console.log(count);




// const { Ask } = require('asfk');

// Ask(["Ededi yazin:"]).then(([a]) => {
//     a = parseInt(a);
//     let count = 0;
//     while (a > 0) {
//         a = parseInt(a / 10);
//         count++;
//     }
//     console.log(count);
// });







// Task 5
// n natural ədədi verilmişdir. Həmin ədəddən öz rəqəmlərinin cəmini çıxaq. Alınan ədəddən də yenə öz rəqəmlərinin cəmini çıxaq və s. Bu prosesi nə qədər ki, alınan ədəd müsbətdir davam etdirəcəyik. Verilmiş əməliyyatı neçə dəfə icra edəcəyik?
// 21 
// cavab 3 cixsin, yeni 21-3=18, 18-9=9, 9-9=0;

// const { Ask } = require("asfk");
// Ask(["Ededi daxil edin :"]).then(([a]) => {
//     a = parseInt(a);
//     let cem = 0;
//     let say = 0;
//     while (a > 0) {
//         let s = String(a);
//         for (let i = 0; i < s.length; i++) {
//             cem += parseInt(s[i]);
//         }
//         a -= cem;
//         say++;
//     }
//     console.log(say);
// });





// const { Ask } = require("asfk");
// Ask([""]).then(([n]) => {
//     n = parseInt(n);
//     let say = 0;
//     while (n > 0) {
//         let cem = 0;
//         let s = String(n);
//         for (let el of s) {
//             cem += parseInt(el);
//         };
//         n -= cem;
//         say++;
//     };
//     console.log(say);
// });






//Task 6
//ardicil sayin,meselen input=1 output=1; input=4 output=1 2 3 4;
// var input = Number(prompt("reqem daxil edin:"));
// while (input > 0) {
//     console.log(input);
//     input--;
// }





// const { Ask } = require('asfk');

// Ask(["Reqemi daxil edin:"]).then(([a]) => {
//     a = parseInt(a);
//     while (a > 0) {
//         console.log(a);
//         a--;
//     }
// });





// Task 7
// ededin 11 e bolunme elameti.ededdeki tek ve cem yerde duran reqemleri ayriliqda cemleyirik.eger cemlerin hasili
// 11 e bolunurse demeli bu eded 11 e bolunur.bu cemlerin hasilini tapin.input=27 output=14;input=2821 output=36; input=10001 output=0;
// var input = Number(prompt("Reqemi daxil edin:"));
// let teklerincemi = 0;
// let cutlerincemi = 0;
// let tek = true;
// while (input > 0) {
//     let sonReqem = input % 10;
//     if (tek) {
//         teklerincemi += sonReqem;
//         tek = false;
//     } else {
//         cutlerincemi += sonReqem;
//         tek = true;
//     }
//     input = parseInt(input / 10);

// }
// console.log(teklerincemi * cutlerincemi);





// const { Ask } = require('asfk');

// Ask(["Reqemi daxil edin:"]).then(([a]) => {
//     a = parseInt(a);
//     let teklerincemi = 0;
//     let cutlerincemi = 0;
//     let tek = true;
//     while (a > 0) {
//         let sonReqem = a % 10;
//         if (tek) {
//             teklerincemi += sonReqem;
//             tek = false;
//         } else {
//             cutlerincemi += sonReqem;
//             tek = true;
//         }
//         a = parseInt(a / 10);
//     }
//     console.log(teklerincemi * cutlerincemi);
// });










// Task 8
// n ededi verilmisdir.n den kicik olan tek ededleri artma ardicilliginda  cap edin.
// var input = Number(prompt("Reqem daxil edin:"));
// while (input > 0) {
//     if (input % 2 == 1) {
//         console.log(input);
//     }
//     input--;
// }







// const { Ask } = require('asfk');

// Ask(["Reqemi daxil edin:"]).then(([a]) => {
//     a = parseInt(a);
//     while (a > 0) {
//         if (a % 2 == 1) {
//             console.log(a);
//         }
//         a--;
//     }
// });




