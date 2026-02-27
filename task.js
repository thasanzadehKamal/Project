//!Task-1
// let username = "Kamal"
// function isActiveNow (username) {
// console.log (username);
// isActiveNow ();
// }

// isActiveNow() (() => {
//     console.log("is active now");
// })
// ----------------------------------------------------------
// funtion myFunc (username) {
//     console.log (username , "is active now");
// }

// myFunc("Jeffrey Epstein");
// myFunc("Jeffrey Epstein");
// myFunc("Jeffrey Epstein");
// myFunc("Jeffrey Epstein");
// myFunc("Jeffrey Epstein");

//!Task-2
// function numFuncs(a ,b,c) {
//     if (a >= b && a >= c) {
//         console.log("Ən böyük qiymət:", a);
//     }
//     else if (b >= a && b >= c) {
//         console.log("Ən böyük qiymət:", b);
//     }
//     else {
//         console.log("Ən böyük qiymət:", c);
//     }

// }
// numFuncs(20 , 40, 60);
// numFuncs ( 10 , 90 ,91);
// numFuncs (200000, 4000, 9999999);

//!Task-3
// function func (rubl,usd) {
// let result = rubl + (usd * 75);
// console.log (`Bütün depozitlər üzrə məbləğ: ${result}`);
// }
// func (1000,10);

//!Task-4
// function numberToText(n) {
//     let ones = {
//     "" , "bir" , "iki" , "uc" , "dord" ,
//     "alti" , "yeddi" , "sekkiz" , "doqquz"
//     }
//     let tens = {
//         "", "on" , "iyirmi" , "otuz" , "qirx" , "elli" , "altmis" , 
//         "yetmis" , "seksen" , "doxsan"
//     }

//     if (n < 1 || n < 99) {
//         console.log("Please 1 ile 99 arasinda count enter");
//         return;
//     }
// }

//!Task-5
// function min(a,b) {
//     if (a <= b) {
//  return a;
//     } else{
//         return b;
//     }
// }

// console.log(min(5,15));

//!Task-6
// function calc(a,b,c) {
//     switch (c) {
//         case "+":

//             return (a+b);
//     case "-":
//        return (a-b);

//        case "/":
//         return (a/b);

//         case "*":
//             return (a*b);

//         default:
//             return("please enter a count");
//     }
// }

// console.log(calc (10,20,"+"));
// console.log(calc (47,60,"-"));
// console.log(calc (100,20,"/"));
// console.log(calc (99,909,"*"));

//! Task-8
// function captalizeWords(txt) {
//     let nigga = txt.split(" ")
//     let result = ""
//     for (let i = 0; i < words.length; i++) {

//     } console.log(word[i][0].toUpperCase() + words[i].slice(1));

//     console.log(result);


// }

// captalizeWords(`Hello my name is Ishowspeed`);



//!Task 9
// function isEven () {
//     return n % 2 === 0;
// }

// isEven (30);
// isEven (40);
// isEven (10);


//! Task 10

// function isInvalidNumber(phone) {
// return /^\+7\d{10}$/.test(phone);
// }

// isValidNumber("+7123456789");
// isValidNumber("+73536236");
// isValidNumber("+123857345");
// isValidNumber("+1111543");



//! Task 11
// function numCounter(txt) {
// const letters = txt.match(/[a-zA-Z]/g);
//   return letters ? letters.length : 0; 
// }

//! Task 12
// function isPrime(n) {
//     if (n <= 1) {
//         return false;
//     }
//     for (let i = 2; i < Math.sqrt(n); i++) {
//         if (n % i === 0) {
//             return false;
//         }
        
//     }
//     return true;

// }

//! Task 13
// function sumOfDigits(num) {
// let sum = 0;

// while (num > 0) {
//     sum+= num % 10;
//     num = Math.floor(num/10);
// }
//     return sum;
// }

// sumOfDigits(1234);

//! Task 14
// function isPalindrome(txt) {
//     return txt === txt.split ("").reverse().join("");
    
// }

// console.log(isPalindrome("level"));
// console.log(isPalindrome("hello"));



//! Arr tasklari
 1.
// let arr = ["kamal","john","doe"];
// arr[1] = "Classfied";
// console.log(arr);
// ------------------------------
2.
// let arr = ['New Hope', 'The Empire Strikes Back', 'Return of the Jdi'];
// for (let i = 0; i < arr.length; i++) {
//     console.log("Episode", i+4, arr [i]);
// }
// arr.forEach((x,y) => {
//     console.log(`Episode ${y + 4}: ${x}`);
// });
// ---------------------------------------------
3.
// let salary = [
//     [60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60],
//     [75, 75, 75, 75, 75, 75, 70, 77, 75, 75, 70, 75],
//     [150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 180],
//     [65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65],
//     [80, 80, 80, 80, 80, 80, 80, 105, 105, 105, 105, 105],
//     [65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65],
//     [80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 120],
//     [65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65],
//     [80, 80, 80, 80, 80, 80, 80, 90, 90, 90, 90, 90],
//     [75, 75, 75, 74, 73, 78, 75, 75, 75, 75, 70, 75],
// ];
//  function getQuarterSalary(num) {
//     let start = (num -1) * 3;
//     let end = num * 3
//     let totalSalary = 0;
//     for (let i = 0; i < salary.length; i++) {
//         console.log(i, "-ci user", salary[i]);
//        for (let j = start; j < end; j++) {
//          totalSalary += salary[i][j]
        
//        }
//     }
//     return totalSalary;
//  }

// console.log(getQuarterSalary(2));  
// ----------------------------
4.
// let nums = "2,1,6,7,3".split(",");
// let minimum = nums[0]
// for (let i = 1; i < nums.length; i++) {
//     if (minimum > nums[i]){
//         minimum = nums[i]

//     }; 
// }
// console.log(minimum);
// --------------------------------------
5.
// let str = `32, 31, 34, 36, 31`;
// let arr = str.split(", ");
// console.log(arr.join("; "));
//----------------------------------------
6.
// let arr = ["kamal","john","doe"];
// arr.push("Murad");
// arr.shift();
// console.log(arr);
// ----------------------------------------
7.
// let nums = [1,2,3,5,8,9,11,76,15,10];
// let max = Math.max(...nums);
// console.log("Max Num is: ",max);
// ----------------------------------------
8.
// let nums = [1,2,3,4,5];
// let copy = [...nums];
// let double = copy.map(nums => nums * 2);
// console.log("Orginal Nums" , nums);
// console.log("Ikiqat artirilmis", double);
// ----------------------------------------
9.
// let employees = [
//   ['Jaylee Macy', 'marketing'],
//   ['John Smith', 'management'],
//   ['Blossom Hartley', 'design'],
//   ['Austin Carpenter', 'marketing'],
//   ['Joan Knowles', 'development'],
//   ['Sally Nunez', 'management'],
//   ['Laurel Ward', 'development'],
//   ['Lark Simon', 'marketing'],
//   ['Jane Stone', 'management'],
//   ['Courtney Olson', 'development'],
// ];

// let development = [];

// for (let i = 0; i < employees.length; i++) {
//     if (employees[i][1] === 'development') {
//         development.push(employees[i]);
//     }
    
// }

// console.log(development);
//------------------------------------
// 10.
// let quee = ["Kamal","Nigga","Bro"]
// console.log(quee);


// 11. 
// let Nums = [1,2,6,9,-1,-5,-2,5,5,1]
// function Nums() {
    
// }



// 19.
// function countEvensAndOdds(nums){
//     let tek = 0;
//     let cut = 0;

//     for (let nums of arr){
//         if (num % 2 === 0){
//         cut++;
//         }
//         else {
//             tek++;
//         }
//     }
//     return `${cut} ve ${tek} ededler `
// }
// console.log(countEvensAndOdds([1,2,5,7,8,4,3]));


// 20.
//  function sortArray(arr) {
//     return arr.sortArray((a,b) => a - b);
    
// }
// console.log(sortArray([5,2,1,6,8,5,3,4,7,]));

// 21.
// let arr = ["1","2","3","4","5","6","7","8","9","10"]
// let [a, b, ...others] = arr;
// console.log(others);


//! Object tasklari

// 1.
// let user = {
//     name:"Oscar",
//     gender: "Man",
// bday:"2009-03-25"
// setAge: 17
// getYearsBeforeRetirement(){
//     const Age = 65 - this.age;
//     return `${Age} il qalir`;
// }

// }
// user.age = 17;
// delete user.bday;
// console.log(user);

// let user = {
//     name: "Maqa",
//     gender: "Man",
//     birthday: "08.10.2006",
//     age: "20",
//     pnsAge: "65",
//     getYearsBeforeRetirement: function () {
//         return this.pnsAge - this.age;
//     }
// };
// delete user.birthday
// user.age = 30

// console.log(user.getYearsBeforeRetirement());


// const client = {
//     fullName: "Oscar Piastri",
//     creditLimit: 5000,
//     balans: -1000,
//     precentOfMinPayment: 10,
//     getBalance(){
//         if (this.balans >= 0){
//             return `Balans: ${this.balans} AZN`;
//         }
//         else{
//             return `Borcunuz: ${-1 * this.balans} AZN`;
//         }

//     },
//     getMinPayment(){
//         if (this.balans >= 0){
//             return "Sizin borcunuz yoxdur";
//         }
//         else{
//             const debt = Math.abs(this.balans);
//             const minPay = (debt * this.precentOfMinPayment) / 100;
//             return `«Minimum ödənişiniz ${minPay}`;
//         }
//     }
//     withdraw(param){

//     }
    
// }
// console.log(client.getMinPayment());


// const item = document.querySelectorAll("li");
// item.forEach(li => {
//     li.style.backgroundColor = "black"
//     li.style.color = "#fff"
// })
// console.log(item);






















// Eliye bilmediyim tasklar
// 
