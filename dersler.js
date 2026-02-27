//! Use Strict ifadeleri
// "Use Strict"-mueyyen sertler altinda isleme
// eval("")-icinde ne yazilirsa js kodu kimi qebul edir,istifadesi azdir tehlukesizlik cehetden)

//! Tip Cevirmeleri
// let a = 5;
// let b = "25";
// console.log(a + b);

//? String
// let a = 12;
// a = String(a);
// console.log(typeof a);

// let b = (22).toString();
// console.log(typeof a);

//? Number
// let c = ("20")
// c = Number(c);
// console.log(typeof c);
//"parseInt" number kimi stringden numbere cevirir lakin ededin tam hissesine baxir
// "parseFloat" kesr hissenide getirir
// let a = 146.29;
// console.log(parseFloat(a));
// console.log(parseInt(a));
// "NaN"-not a number demekdir,"isNaN" ise (number deyil mi?) methodudur. /true,false
// let userName = "bro"
// console.log(isNaN(userName));
// let a = 123;
// console.log(isNaN(a));

//? Boolean
// let a = 1;
// a = Boolean(a);
// console.log(typeof a);
// console.log(a);

//? Split,Arr,Join
// Metni parcalara ayirir bosluqlari bele
// let txt = "Hello World :)"
// txt = txt.split(" ");
// txt = txt.split("l");
// txt = txt.split("o");
// console.log(a);

// let a = ["Hello","World",":)"];
// a = a.join("");
// "Join" Stringe geri cevirir ne deyer verilirse onu metn ile birlesdirir

//? Json-stringfly,
// Array icerisinde {}-obyekt var.
// let teams = [{
//     teamName: "Ferrari",
//     country: "Italy"

// },
// {
//     teamName: "RedBull Racing",
//     country: "Austria"
// }
// ]
// clubs = JSON.stringify(teams);
// console.log(teams);
// Obyekti Json halina getiririk "stringify"
// Jsonu Obyekt halina getiririk "purse"

// ------------------------------------------------------------

//! Template Literals
// ``-backtick dinamik deyer edir
// let firstName = "John Doe"
// let msg = `${firstName} + will became a WORLD CHAMPION!!!!!`
// console.log(msg);

//! Tasklar
// 1. console.log("Hello World");
// ----------------------------
// 2. const txt = ("Hello World");
//  txt += ("Hello Mars");
// ----------------------------
//  3. let a = 15;
//  a += 25;
// ----------------------------
// 4. var win = true;
// var lose = false;
// console.log(lose);
// ----------------------------
// 5. let a = "hello"
// a = Number(a)
// console.log(a);
// ----------------------------
// 6. let userName = "Kamal"
// console.log(alert(userName));
// ----------------------------
// 7. let res = confirm("Siz Telebesiniz?");
// console.log(res);
// console.log(typeof res );
// let a = 20;
// let b = 30;
// let c = 40;
// console.log(a < b || c > b);
// console.log(a < b && c < b);
// console.log(a < b || c == a);
// -----------------------------
// 8. let res = prompt("Eded ve ya reqem daxil et");
// res = Number(res)
// console.log(res * 15);
// let total = res * 15;
// alert(total)
// ------------------------------
// 9.let txt = prompt("adinizi daxil edin");
// let res = "sizin adiniz: " + txt;
// console.log(res);
// let msg = `sizin adiniz: ${txt}`

//! Conditonal Structrs "IF-ELSE"
// let a = 24;
// let b = 920;
// let c = 1500;
//true  |if (a > 20 && b < 1000) {
//     console.log(a**b);
// }
// true |else if (c === 1500) {
//     console.log(b*a);
// }
// else{
//     console.log("thisiswrongnigga");
// }
// Eyer If True-dirse "else if, else"-ye dusmur.
// Eyer If False-dirse "else if,else"-ye dusur.

//! IF-ELSE tasklari.
1;
// let a = 22;

// if (a % 2 === 0) {
//     console.log(`${a} cut ededdir`);
// }
// else{
//     console.log("tekdir");
// }

2;
// let userName = "ishowspeed_69";
// let pass = "ishowMEAT123";

// if (userName === "ishowspeed_69" && pass === "ishowMEAT123") {
//     console.log(userName ,"Welcome!");
//     document.getElementById("resetpassLink").hidden = true;
// } else {
//    document.getElementById("resetpassLink").hidden = false;
// }

3;
// let temp = 20;
// if ( temp >= 40) {
//     console.log("Hava Dehset Istidir");
// }
// else if ( temp < 40 && temp >= 20){
// console.log("Hava Normaldir");
// }
// else if (temp <= 20){
//     console.log("hava soyugdur");
// }

4;
// let score = 80;
// if (score >= 81 && score <= 100) {
// console.log("5 qiymet");
// }
// else if (score <= 81 && score >= 61) {
//     console.log("4 qiymet");
// }
// else if (score <= 61 && score >= 41) {
//     console.log("3 qiymet");
// }
// else if (score <= 41 && score >= 0) {
//     console.log("2 qiymet");
// }

5;
// let age = 0;

// if (age > 10 && age <= 18){
//     console.log("Bu gencdir");
// }
// else if (age <= 10){
//     console.log("Bu usagdir");
// }
// else if (age > 18 && age <= 30){
//     console.log("Bu yetiskindir");
// }
// else if (age > 30) {
//     console.log("qocalib olub gedib ");
// }

6;
// let num = 0;

// if (typeof num === "number"){

// if (num < 0 ){
//     console.log( "Bu menfidir");
// }
// else if (num >= 0){
//     console.log( "Bu musbetdir");
// }
// else if (num === 0){
//     console.log("eded 0 a beraberdir");
// }

// }else{
//     console.log("error");
// }
// ------------------------------------------

//! Switch Case
// If else kimidir daha manual version

// let number = Number(prompt("Bir EDED daxil edin"));

// switch (number % 2) {
//     case 0:
//         console.log(`${number}  cut ededdir`);
//         break;
//     case 1:
//         console.log(`${number}  tek ededdir`);
//         break;
//     default:
//         console.log("no entry");
//         break;
// }

2.
// let amount  = Number(prompt("Please enter your amount"));
// let msg = `Please enter currency
//     USD
//     EUR
//     KWD`
// let currency = prompt(msg).toUpperCase();
// let USD = 0.58;
// let EUR = 0.49;
// let KWD = 0.17 
//  switch (currency) {
//     case "USD":
//         console.log(`${amount * USD}`);
//         break;
//  case "EUR":
// console.log(`${amount * EUR}`);
//  break;
//  case "KWD":
//     console.log(`${amount * KWD}`);
//  break;
//     default:
//         console.log("Enter Your Amount");
//         break;
//  }


//! Dovurler for,while

// for (let i = 10; i >= 1; i--) {
    
//     console.log(i);
// }

//! For task
1.
// let number = Number(prompt("Eded daxil edin"))
// let fact = 1;
// for (let i = 1; i <= number; i++) {
//     fact *= i;
    
// }
// alert(`${number} ededinin faktoriali ${fact}`)

2.
// let number = Number(prompt("Eded daxil edin"));

// for (let i = 1; i <= number; i++) {
    
//     for (let j = 1; j < number; j++) {
        
//         console.log(i * j);
//     }
// }

//!While
// let n = 1;
// while (n <= 10) {
//     console.log(n);
//     n++;
// }

// -----------------------
//? Tek
// let i = 1;
// while (i <= 100) {
//     if (i % 3 === 0){
//         console.log(i);
//     }
//     i++;
// }
// -----------------------
//? Cut
    // let i = 1;
    // while (i <= 100) {
    //     if (i % 2 === 0){
    //         console.log(i);
    //     }
    //     i++;
    // }

//! While Tasks
// let userNum = null;

// let total = 0;

// while(userNum !== 0){
//     userNum =  parseInt(prompt("eded daxil et"), 10);
//    total = total + userNum;
// }
// alert(`Daxil edilen ededlerin cemi ${total}  edir`)



//! DO WHILE
//? birinci kod sonra sert gelir
// let number = Number(prompt("reqem daxil edin"));
//  let total = 0;
//  do {
//     if (number % 2 === 0) {
//         total *= number;
//     }
    
//     number--;
//  } while (number > 0);
//  alert(`umumi netice ${total}` );


//! Break Continue
// 1. for (let i = 0; i <= 10; i++) {
//     if (i === 3) {
//         continue;
//     }
    
// }


// 2. for (let i = 0; i <= 10; i++) {
//     if (i === 3) {
//         break;
//     }
    
// }


//! Function
// 1.
// function Kamal(bro) {

//     let a = 20;
//     let b = 30;
//     for (let i = 0; i <= 20; i++) {
//         let res = i;
//         console.log(a * b * i);
//     }
    
    
    
// }


// Kamal()

2.
// function hesap(a,b) {
//     let c = a * b;
//     console.log(c);
    
// }


// hesap(5523,10220)


//? Return

// function myFunc(a) {
//     let res = a * a * a * a;
//     return res;
// }


// let res = myFunc(9999);
// console.log(res);



//?
// 1. Declaration
// function greet() {
//     console.log("Hello bro");
// }


// 2. Expression
// let myFunc = function greet(){
//     console.log("wassup nigga");
// }

// 3.
// console.log(nums()); 
// function nums(a = 20,b = 999) {
//     c = a * b
//     return c;
// }

// 4.
// console.log(typeof prompt("YAZ")); 
// let string = function customToString(){
//     return "Hello World";
// }


// 5.

// function kamal() {
//     return "hi";
//     function num(){
//         return 11;

//     }
// }
// console.log(kamal());