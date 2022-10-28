//Task 1
//Mişa uşaklarla futbol oynamaq qərarına gəldi və evdən çixmağa hazırlaşırdı ki, bu zaman anası onu yaxaladı və dedi ki, nə qədər ki, Mişa ona ev işlərində kömək etməsə, futbol oynamağa getməyəcək. Seçim üçün anası Mişaya üç işdən birini görməsini təklif etdi: ya qabları yummalı, ya tozsoran ilə mənzili təmizləməli, ya da anası dükana gedənə qədər kiçik bacısı Mariya ilə oyunculu. Mişa hər bir reklamın ər vaxt alabilmesini hesabladı:

// Qabların yuyulmasına t1 saniyə
// Mənzilin tozsoran ilə təmizlənməsinə t2 saniyə
// Mariya ilə oynamaq t3 saniyə vaxt alacaq
// Aydındır ki, Mişa ən az vaxt alacaq işi seçir. Boyut proqram Mişanın anasının tapşırığını yerinə yetirməsi üçün minimal vaxtı hesablamalıdır.
//31 15 40
//15

// var input = prompt("Ededleri daxil edin:");
// let arr = input.split(" ").map(Number);
// console.log(Math.min(...arr));



// const { Ask } = require("asfk");
// Ask(["Ededleri daxil edin:"]).then(([a]) => {
//     let arr = a.split(" ").map(Number);
//     console.log(Math.min(...arr));
// });





//Task 2
//Birinci, yoxsa aksincı?
// Üçrəqəmli ədədədilmiştir. Onun rəqəmlərindən hansının - birincinin, yoxsa axırıncının böyük olduğunu müəyyənləşdirin.

// Giriş
// Yeganə sətirdə üçrəqəmli ədəd verilir.

// Çıktı
// Çıxışa göstərilən rəqəmlərdən böyüyünü sağlayın. Onlar bərabər olduqda "=" işarəsini (dırnaqsız) verin.
//328
//8
// 832
//8


// var input = prompt("Ededi daxil edin:");
// let arr = input.split("").map(Number);
// if (arr[0] == arr[arr.length - 1]) {
//     console.log("=");
// } else {
//     console.log(Math.max(arr[0], arr[arr.length - 1]));
// }



// const { Ask } = require("asfk");
// Ask(["3 reqemli eded daxil edin:"]).then(([arr]) => {
//     arr = arr.split("").map(Number);
//     if (arr[0] == arr[arr.length - 1]) {
//         console.log("=");
//     } else {
//         console.log(Math.max(arr[0], arr[arr.length - 1]));
//     }
// });




//Task 3
//Pənah məktəbdə yalnız iki və beş qiymətlər alır. Hansı qiymətin daha çox olduğunu təyin edin.

// Giriş
// Tək sətirdə Pənahın qiymətləri verilir. Məlumdur ki, yalnız iki və beş qiymətlər, qiymətlər boşluqsuz verilib və onlar için 1000-i aşmır.

// Çıktı
// Beşlərin sayı ikilərin sayından çoxdursa, 5 çap edin. İkilərin sayı beşlərin sayından çoxdursa, 2 çap edin. Əgər ikilərin sayı beşlərin sayına bərabərdirsə, '=' simvolunu çap edin.
//255222
//2
//555522
//5
//525522
//=



// var input = prompt("Ededi daxil edin:");
// let arr = input.split("").map(Number);
// let count1 = 0, count2 = 0;
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] == 2) {
//         count1++;
//     } else if (arr[i] == 5) {
//         count2++;
//     }
// }
// if (count1 > count2) {
//     console.log(2);
// } else if (count2 > count1) {
//     console.log(5);
// } else {
//     console.log("=");
// }



// const { Ask } = require("asfk");
// Ask(["Ededi daxil edin:"]).then(([a]) => {
//     let arr = a.split("").map(Number);
//     let count1 = 0, count2 = 0;
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] == 2) {
//             count1++;
//         } else if (arr[i] == 5) {
//             count2++;
//         }
//     }
//     if (count1 > count2) console.log(2);
//     else if (count2 > count1) console.log(5);
//     else console.log("=");
// });





// const { Ask } = require("asfk");
// Ask(["Ededi daxil edin:"]).then(([a]) => {
//     a = a.split("").map(Number);
//     let obj = {};
//     for (let i = 0; i < a.length; i++) {
//         if (obj[a[i]]) {
//             obj[a[i]]++;
//         } else {
//             obj[a[i]] = 1;
//         }
//     }
//     let arr = [];
//     for (const key in obj) {
//         arr.push(obj[key]);
//     }
//     let max = Math.max(...arr);
//     for (const key in obj) {
//         if (obj[key] == max) {
//             console.log(key);
//         }
//     }
// });







//Task 4
//Verilmiş mətn fraqmentində cümlələrin sayını müəyyənləşdirin.
// Hello world!
// 1
//Hii!!!
//1
// Hi World
//2





// var input = prompt("Cumle daxil edin:");
// let arr = input.split(" ");
// let count = 0;
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i].charAt(0) === arr[i].charAt(0).toUpperCase()) {
//         count++;
//     }
// }
// console.log(count);





// const { Ask } = require('asfk');

// Ask(["Cumle daxil edin:"]).then(([arr]) => {
//     arr = arr.split(" ");
//     let count = 0;
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i].charAt(0) === arr[i].charAt(0).toUpperCase()) {
//             count++;
//         }
//     }
//     console.log(count);
// });






//Task 5
//Verilmiş hesabi ifadədə toplama (+), çıxma (-) və vurma (*) əməllərinin ümumi sayını müəyyənləşdirin.
//-1+2*3+a
//3
//+5-2+4-m/n*2:4
//3




// var input = prompt("");
// let arr = input.split("");
// let newArr = [];
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] == "+" || arr[i] == "-" || arr[i] == "*") {
//         if (!newArr.includes(arr[i])) {
//             newArr.push(arr[i]);
//         }
//     }
// }
// console.log(newArr.length);




// const { Ask } = require('asfk');

// Ask(["+,* ve - sayini bilmek ucun simvollari daxil edin:"]).then(([arr]) => {
//     arr = arr.split("");
//     let newArr = [];
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] == "+" || arr[i] == "-" || arr[i] == "*") {
//             if (!newArr.includes(arr[i])) {
//                 newArr.push(arr[i]);
//             }
//         }
//     }
//     console.log(newArr.length);
// });







// Task 6
//Verilmiş mətn fraqmentində sözlərin sayını müəyyənləşdirin.
//Hello world!
//2
// Hello world! Hello,    country!
//4

// let input = prompt("sozler daxil edin:");
// let arr = input.split(" ");
// let count = 0;
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] !== "") {
//         count++;
//     }
// }
// console.log(count);




// const { Ask } = require('asfk');

// Ask(["Soz daxil edin:"]).then(([arr]) => {
//     arr = arr.split(" ");
//     let count = 0;
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] !== "") {
//             count++;
//         }
//     }
//     console.log(count);
// });





// Task 7
//kpkkp
// 2
// kpkkkkp
//4


// const { Ask } = require("asfk");
// Ask([""]).then(([s]) => {
//     let result = s.split("");
//     let count = 0;
//     let max = 0;

//     for (let i = 0; i < result.length; i++) {
//         if (result[i] == "k") {
//             count++;
//             if (count > max) {
//                 max = count;
//             }
//         }else{
//             count = 0;
//         }
//     }
//     console.log(max)
// });










//Task 8
//Mətnlərin emalına aid sadə məsələlərdən biri sətirdəki hər bir sözün birinci hərfini baş hərfə çevirməkdir. Bir və ya bir neçə boşluqla ayrılmış kiçik hərflərdən ibarət sətir verilmişdir. Eyni sətri, hər sözün birinci hərfini baş hərfə çevirərək çap edin.
//introduction to algorithms
//Introduction To Algorithms




// var input = prompt();
// let arr = input.split(" ");
// let newArr = [];
// for (let i = 0; i < arr.length; i++) {
//     newArr.push(arr[i].charAt(0).toUpperCase() + arr[i].slice(1))
// }
// console.log(...newArr);






// const { Ask } = require("asfk");
// Ask(["Bir metn girin:"]).then(([a]) => {
//     let arr = a.split(" ");
//     let newArr = [];
//     for (let i = 0; i < arr.length; i++) {
//         newArr.push(arr[i].charAt(0).toUpperCase() + arr[i].slice(1));
//     }
//     console.log(newArr.join(" "));
// });








//Task 9
// s sətri və c hərfi verilmişdir. Bu hərfə sətirdə neçə dəfə rast gəlinir?

// Input
// İlk sətirdə uzunluğu 100 simvolu aşmayan s sətri verilir. İkinci sətirdə kicik c latın hərfi verilir.

// Output
// c hərfinin s sətrində rast gəlmə sayını çap edin. Baş və kiçik hərf eyni sayılır. Yəni 'a' və 'A' eyni hərflərdir.
//Programming Principles 1
//P
//3
//This is a cat sitting on a table
// t
// 5



// var input1 = prompt();
// var input2 = prompt();
// let arr = input1.split("");
// let capitalize = input2.toUpperCase();
// let lower = input2.toLowerCase();

// let count = 0;
// for (let i = 0; i < arr.length; i++) {
//     if (input2 == arr[i] || capitalize == arr[i] || lower == arr[i]) {
//         count++;
//     }
// }
// console.log(count);






// const { Ask } = require("asfk");
// Ask(["Cumleni daxil edin:", "Herfi daxil edin:"]).then(([a, b]) => {
//     let arr = a.split("");
//     let count = 0;
//     let upper = b.toUpperCase();
//     let lower = b.toLowerCase();
//     for (let i = 0; i < arr.length; i++) {
//         if (b == arr[i] || upper == arr[i] || lower == arr[i]) {
//             count++;
//         }
//     }
//     console.log(count);
// });






// let s="hello world";
// let c="l";
// function letterCount(string,char){
//     let count=0;
//     for(let i=0;i<string.length;i++){
//         if(string[i]===char){
//             count++;
//         }
//     }
//     return count;
// }
// console.log(letterCount(s,c));









//Task 10
//Verilmiş sətirdə birinci və sonuncu boşluq işarəsinin indekslərini çap edin. Nəzərə alın ki, sətrin ilk simvolunun indeksi 0-dan başlayır.
//I am programming on Python.
// 1 19
//iamprogrammingonpython
//-1


// var input = prompt("cumleni daxil edin:");
// let arr = input.split("");
// let index;
// let newArr = [];
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] == " ") {
//         index = i;
//         newArr.push(index);
//     }
// }
// if (newArr.length == 0) {
//     console.log(-1);
// } else {
//     let max = newArr[0];
//     let min = newArr[0];
//     for (let i = 0; i < newArr.length; i++) {
//         if (newArr[i] > max) {
//             max = newArr[i];
//         }
//     }
//     for (let i = 0; i < newArr.length; i++) {
//         if (newArr[i] < min) {
//             min = newArr[i];
//         }
//     }
//     console.log(min, max);
// }








// const { Ask } = require("asfk");
// Ask([""]).then(([a]) => {
//     let arr = a.split("");
//     let index;
//     let newArr = [];
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] == " ") {
//             index = i;
//             newArr.push(index);
//         }
//     }
//     if (newArr.length == 0) {
//         console.log(-1);
//     } else {
//         let max = newArr[0];
//         let min = newArr[0];
//         for (let i = 0; i < newArr.length; i++) {
//             if (newArr[i] > max) {
//                 max = newArr[i];
//             }
//         }
//         for (let i = 0; i < newArr.length; i++) {
//             if (newArr < min) {
//                 min = newArr[i];
//             }
//         }
//         console.log(min, max);
//     }
// });














