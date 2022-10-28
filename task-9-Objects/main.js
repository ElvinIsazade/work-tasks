// Task 1
// n'den büyük olmayan tüm pozitif tam sayıların karelerini artan sırada yazdırın.
// 10
// cavab cixsin : 1 4 9
// 20
// cavab cixsin : 1 4 9 16



// let input = Number(prompt(""));
// let newInput = input;
// while (input > 1) {
//     input--;
//     if (input ** 2 < newInput) {
//         console.log(input ** 2);
//     }
// }
// for (let i = 1; i < input; i++) {
//     if (i ** 2 < input) {
//         console.log(i ** 2);
//     }
// }





// const { Ask } = require("asfk");
// Ask(["Ededi daxil edin:"]).then(([a]) => {
//     a = parseInt(a);
//     for (let i = 1; i < a; i++) {
//         if (i ** 2 < a) {
//             console.log(i ** 2);
//         }
//     }
// });









// Task 2
// Dört sayı a, b, c, d verilmiştir. Aralarındaki maksimumu bulun.
// 1 2 3 4
// cavab cixsin : 4

// let input = prompt("");
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
//             max = arr[i];
//         }
//     }
//     console.log(max);
// });



// const { Ask } = require("asfk");
// Ask(["Ededleri daxil edin:"]).then(([a]) => {
//     a = parseInt(a);
//     let max = 0;
//     while (a > 0) {
//         let sonReqem = a % 10;
//         if (sonReqem > max) {
//             max = sonReqem;
//         }
//         a = parseInt(a / 10);
//     }
//     console.log(max);
// });







// Task 3
// Boş olmayan bir tamsayı dizisi verildiğinde, her öğe biri hariç iki kez görünür. O tek kişiyi bulun.
// [2,2,1]
// cavab cixsin 1
// [4,1,2,1,2]
// cavab cixsin 4


// let input = prompt("");
// let arr = input.split(" ").map(Number);
// let obj = {};
// for (let i = 0; i < arr.length; i++) {
//     if (obj[arr[i]]) {
//         obj[arr[i]]++;
//     } else {
//         obj[arr[i]] = 1;
//     }
// }
// for (let key in obj) {
//     if (obj[key] == 1) {
//         console.log(key);
//     }
// }




// const { Ask } = require("asfk");
// Ask(["Ededleri daxil edin :"]).then(([arr]) => {
//     arr = arr.split(" ").map(Number);
//     let obj = {};
//     let newArr = [];
//     for (const el of arr) {
//         if (obj[el]) {
//             obj[el]++;
//         } else {
//             obj[el] = 1;
//         }
//     }
//     for (const key in obj) {
//         if (obj[key] == 1) {
//             newArr.push(key);
//         }
//     }
//     console.log(newArr.join(""));
// });






// Task 4
// n boyutunda bir dizi numarası verildiğinde, çoğunluk öğesini döndürün.
// [3,2,3]
// cavab cixsin 3

// [2,2,1,1,1,2,2]
// cavab cixsin 2




// let input = prompt("");
// let arr = input.split(" ").map(Number);
// let obj = {};
// let newArr = [];
// for (const el of arr) {
//     if (obj[el]) {
//         obj[el]++;
//     } else {
//         obj[el] = 1;
//     }
// }
// for (const key in obj) {
//     newArr.push(obj[key]);
// }
// let max = Math.max(...newArr);
// for (const key in obj) {
//     if (obj[key] == max) {
//         console.log(key);
//     }
// }




// const { Ask } = require("asfk");
// Ask(["Ededleri daxil edin :"]).then(([arr]) => {
//     arr = arr.split(" ").map(Number);
//     let obj = {};
//     let newArr = [];
//     for (const el of arr) {
//         if (obj[el]) {
//             obj[el]++;
//         } else {
//             obj[el] = 1;
//         }
//     }
//     for (const key in obj) {
//         newArr.push(obj[key]);
//     }
//     let max = Math.max(...newArr);
//     for (const key in obj) {
//         if (obj[key] == max) {
//             console.log(key);
//         }
//     }
// });








// Task 5
// Bir Dizedeki İlk Benzersiz Karakter
// Bir s dizesi verildiğinde, içindeki tekrarlanmayan ilk karakteri bulun ve dizinini döndürün. Mevcut değilse, -1 döndürün.
// "leetcode"
// cavab cixsin : 0
// "loveleetcode"
// cavab cixsin : 2






// let input = prompt("");
// let obj = {};
// for (const el of input) {
//     if (obj[el]) {
//         obj[el]++;
//     } else {
//         obj[el] = 1;
//     }
// }
// let tekrar = false;
// for (const key in obj) {
//     if (obj[key] == 1) {
//         var index = input.indexOf(key);
//         console.log(index);
//         tekrar = true;
//         break;
//     }
// }
// if (!tekrar) {
//     console.log(-1);
// }







// const { Ask } = require("asfk");
// Ask(["Cumleni daxil edin :"]).then(([str]) => {
//     let obj = {};
//     for (const el of str) {
//         if (obj[el]) {
//             obj[el]++;
//         } else {
//             obj[el] = 1;
//         }
//     }
//     let firstIndex = false;
//     for (const key in obj) {
//         if (obj[key] == 1) {
//             var index = str.indexOf(key);
//             firstIndex = true;
//             console.log(index);
//             break;
//         }
//     }
//     if (!firstIndex) {
//         console.log(-1);
//     }
// });





// Task 6
// 5
// correct wronganswer correct correct timelimit wronganswer correct timelimit correct timelimit
// cavab cixsin 4  correct=3 wronganswer=1, timelimit=1         novbeti 5 ci correct=2, timelimit=2, wronganswer =1; bunlarin ortag cavab vermesi ucun minimumu tapmag lazimdir. yeni correct= 2 , timelimit= 1  , wronganswer= 1 bunlarin cemi= 4






// const { Ask } = require("asfk");
// Ask(["", ""]).then(([a, b]) => {
//     a = parseInt(a);
//     b = b.split(" ");
//     let arr1 = [];
//     let arr2 = [];
//     for (let i = 0; i < a; i++) {
//         arr1.push(b[i]);
//     }
//     for (let i = a; i < b.length; i++) {
//         arr2.push(b[i]);
//     }
//     for (let i = 0; i < b.length; i++) {

//     }
//     let obj1 = {};
//     let obj2 = {};
//     for (const el of arr1) {
//         if (obj1[el]) {
//             obj1[el]++;
//         } else {
//             obj1[el] = 1;
//         }
//     }
//     for (const el1 of arr2) {
//         if (obj2[el1]) {
//             obj2[el1]++;
//         } else {
//             obj2[el1] = 1;
//         }
//     }
//     let newArr = [];
//     for (let key in obj1) {
//         newArr.push(Math.min(obj1[key], obj2[key]));
//     }
//     let cem = 0;
//     for (let i = 0; i < newArr.length; i++) {
//         cem += newArr[i];
//     }
//     console.log(cem);
// });





// nullish coalescing operators

// let count = 0;
// let text = "";

// let qty = count || 42;
// let message = text || "hi!";
// console.log(qty);     // 42 and not 0
// console.log(message); // "hi!" and not ""


// const nullValue = null;
// const emptyText = ""; // falsy
// const someNumber = 42;

// const valA = nullValue ?? "default for A";
// const valB = emptyText ?? "default for B";
// const valC = someNumber ?? 0;

// console.log(valA); // "default for A"
// console.log(valB); // "" (as the empty string is not null or undefined)
// console.log(valC); // 42


