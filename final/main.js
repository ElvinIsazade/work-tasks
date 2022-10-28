

// const {Ask}=require("asfk");
// Ask(["",""]).then(([n,a])=>{
//     n=parseInt(n);
//     a=a.split(" ");
//     let newArr=[];
//     let arr=[]
//     for(let i=0;i<n;i++
//         ){
//         newArr.push(a.splice(0,n));
//     }
//     for(let i=0;i<newArr.length;i++){
//         for(let j=0;j<newArr.length;j++){
//             if(parseFloat(newArr[i][j])>3.5 && newArr[i][j]=="A" || newArr[i][j]=="B"){
//                 arr.push(1);
//             }else if(parseFloat(newArr[i][j])<3.5 && newArr[i][j]!=="A"|| newArr[i][j]!=="B"){
//                 arr.push(0);             
//             }
//         }
//     }
//     let arr1=[];
//     for(let i=0;i<arr.length;i++){
//         if(!arr1.includes(arr[i])){
//             arr1.push(arr[i]);
//         }
//     }
//     console.log(...arr1);
// });







// Task 1
// By the vowel letters in the Latin alphabet are the letters A, E, I, O and U. The remaining letters are consonants. Write a program counting the number of vowels in the text.
// const { Ask } = require("asfk");
// Ask(["cumleni daxil edin :"]).then(([a]) => {
//     let count = 0;
//     a = a.split("");
//     for (let i = 0; i < a.length; i++) {
//         if (a[i] == "A" || a[i] == "E" || a[i] == "I" || a[i] == "O" || a[i] == "U") {
//             count++;
//         }
//     }
//     console.log(count);
// });






// Task 2
// m natural ədədi n ədədinin o zaman bərabər böləni adlanır ki, n-nin m-ə bölünməsindən alınan tam və qalıq bərabər olsun. Verilmiş n natural ədədinə görə onun bərabər bölənlərinin sayını tapın.
// 20 
// cavab cixsin 2 yeni 20 /9 ve 20 / 19


// const {Ask}=require("asfk");
// Ask(["ededi daxil edin :"]).then(([a])=>{
//     let count=0;
//     for(let i=1;i<a;i++){
//         if(parseInt(a/i)==a%i){
//             count++;
//         }
//     }
//     console.log(count);
// });





// Task 3
// Hər hansı bir natural n ədədini götürək. Onu növbəti şəkildə dəyişdirəcəyik: Əgər ədəd cütdürsə, onda onu 2-ə bölək, əgər təkdirsə ona 1 əlavə edək. Bir neçə belə dəyişmədən sonra həmişə 1 alacağıq. Məsələn, 11 ədədindən 12 ədədi alınır, sonra 6, 3, 4, 2 və sonda 1. Beləliklə, 11-dən 1 almaq üçün 6 dəyişiklik etmək lazımdır.

// Verilmiş natural ədədə görə 1 alınana qədər onun dəyişmələrinin sayını tapın.
// 11
// cavab cixsin 6


// const {Ask}=require("asfk");
// Ask(["ededi daxil edin :"]).then(([a])=>{
//     a=parseInt(a);
//     let count=0;
//     while(a>0){
//         if(a%2==0){
//             a=a/2;
//         }else{
//             a++;
//         }
//         count++;
//         if(a==1){
//             break;
//         }
//     }
//     console.log(count);
// });




// Task 4
// Natural ədədin onluq yazılışında rəqəmləri eyni olan və bu ədədin onluq yazılışının mərkəzinə nəzərən simmetrik yerləşən cütlüklərin sayını həmin ədədin simmetriya dərəcəsi adlandıracağıq. Əgər ədəddə hər hansı rəqəm onluq yazılışda ortada yerləşirsə, onu da özü ilə bir cütlük kimi saymaq lazımdır. n ədədinin simmetriya dərəcəsini tapın.
// 123322
// cavab cixsin 2 yeni 1==2 yox, 2==2 he, 3==3 he demeli cavab 2


// const {Ask}=require("asfk");
// Ask(["ededi daxil edin :"]).then(([a])=>{
//     a=a.split("");
//     let count=0;
//     let reqem=a.length-1;

//     for(let i=0;i<a.length;i++){
//         if(i>reqem){
//             break;
//         }
//         if(a[i]==a[reqem]){
//             count++;
//         }
//         reqem--;
//     }
//     console.log(count);
// });
