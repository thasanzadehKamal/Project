// Task 1
//console.log("My name is Klamal");

// Task 2
//const firstName = "Klamal";
//console.log(firstName);

// Task 3
//let user2 = "John"; // Invalid variable name
//let c@rt = "nigga"; // Invalid variable name
//let person = "Doe"; // Valid variable name
//let title color = "mr.santaclaus"; // Invalid variable name
//let console = "log"; // Invalid variable name
//let $add = "100"; // Valid variable name

// Task 4
//let bookAmount = 40;
//let bookPrice = 200;
//let totalCost = bookAmount * bookPrice;
//console.log(totalCost);

// Task 5
//let kmh = 300;
//let ms = (kmh * 1000) / 3600;
//console.log(ms);

// Task 6
//let bdYear = 4000;
//let currentYear = new Date();
//let age = currentYear - bdYear;
//let daysLived = age * 365;
//console.log(age);

// Task 7
//let num = 60;
//console.log(num ** 3);
//console.log(num % 3);

// Task 8
//let firstName = "Charles";
//let lastName = "Leclerc";
//console.log(` Sizin adınız ${firstName}  Tanışlığımıza şad deyilem!!! ${lastName}.`);

// Task 10
//let FullName = "Christian Bale";
//let spaceIndex = FullName.indexOf(" ");
//console.log(FullName[4]);

// Task 11
//let FullName = "Lewis Hamilton";
//console.log(FullName[0,6]);

// Task 12
//let fullName = prompt("Enter your full name!!!!");
//console.log(fullName);

// Task 13
//var name = prompt("Enter your name:");
//console.log("Hello, ${name}!");

// Task 14
//const num1 = parseFloat(prompt("birinci ededi daxil et"));
//const num2 = parseFloat(prompt("ikinci ededi daxil et"));

//let num = num1 + num2;
//let num = num1 - num2;
//let num = num1 * num2;
//let num = num1 / num2;

//console.log("Toplama: " + (num1 + num2));
//console.log("Çıxma: " + (num1 - num2));
//console.log("Vurma: " + (num1 * num2));
//console.log("Bölmə: " + (num1 / num2));

// Task 24
//let userage = prompt("Please enter your age:");
//if (userage < 18)
//{
//   alert("Access denied.");
//}
//else
//{
//   alert("Access granted.");
//}

// Task 25
/*let 45 = Number(prompt ("Birinci ikirəqəmli ədədi daxil edin:"));
let 46 = Number(prompt ("İkinci ikirəqəmli ədədi daxil edin:"));
let 47 = Number(prompt ("Üçüncü ikirəqəmli ədədi daxil edin:"));

if (a === b || a === c || b === c) {
    console.log("Xəta: Eyni ədədlər daxil edilib.");
}
else if ((a > b && a < c) || (a < b && a > c)) {
     console.log("Ortancıl ədəd:", a);
}
else if ((b > a && b < c) || (b < a && b > c)) {
        console.log("Ortancıl ədəd:", b);
    }
    else {
        console.log("Ortancıl ədəd:", c);
    }*/

// Task 26
/*let year = Number(prompt("İl daxil edin:"));
if (year $ 4 === 0) {
     console.log("İl uzun ildir");}
     else {
        console.log("İl uzun il deyil");
     }*/

// Task 27
//Standart If Else
/*let id = prompt("enter product id:");
 if (id === "1") { alert("Available 10 pcs."); }
  else if (id === "2") { alert("Available 256 pcs."); } 
  else if (id === "3") { alert("Available 53 pcs."); }
   else if (id === "4") { alert("There are 3 available."); }
    else { alert("Out of stock"); } */

//Switch Case
/*let id = prompt("enter product id:");
 switch (id) {
     case "1":
         alert("Available 10 pcs.");
         break;
     case "2":
         alert("Available 256 pcs.");
         break;
     case "3":
         alert("Available 53 pcs.");
         break;
     case "4":
         alert("There are 3 available.");
         break;
     default:
         alert("Out of stock");
         break;
 }*/



/*Math obyektində mövcud olan bəzi daxili ədəd sabitləri bunlardır :

PI ədədi:  Math.PI  təxminən 3.14159-a bərabərdir

Euler ədədi:  Math.E  , təxminən 2.718-ə bərabərdir

2-nin natural loqarifmi:  Təxminən 0.693-ə bərabər olan Math.LN2

Yuvarlaqlaşdırma üsulları
Bunlara aşağıdakılar daxildir:

 Math.ceil()  - ən yaxın tam ədədə qədər yuvarlaqlaşdırın

 Math.floor()  - ən yaxın tam ədədə yuvarlaqlaşdırın

 Math.round() - əgər onluq kəsr 0,5 və ya daha yüksəkdirsə,  ən yaxın tam ədədə qədər yuvarlaqlaşdırır   ; əks halda, ən yaxın tam ədədə qədər yuvarlaqlaşdırır

 Math.trunc()  - onluq kəsri kəsir, yalnız tam ədədi saxlayır

Arifmetik və hesablama metodları
Math obyektində mövcud olan bəzi ümumi hesab və hesablama metodlarının qeyri-müəyyən siyahısı   :

Math.pow(2,3) - 2  ədədini  3-ün  dərəcəsinə qədər  hesablayır , nəticə  8- dir 

Math.sqrt(16) - 16-  nın kvadrat kökünü hesablayır  , nəticə  4- dür 

Math.cbrt(8) - 8-  in kub kökünü tapır  , nəticə  2- dir 

Math.abs(-10)  - mütləq dəyəri qaytarır, nəticə  10- dur 

Loqarifmik metodlar:  Math.log() ,  Math.log2() ,  Math.log10() 

Bütün giriş verilənlərinin minimum və maksimum dəyərlərini qaytarır:  Math.min(9,8,7) 7  qaytarır  ,  Math.max(9,8,7) 9  qaytarır  .

Triqonometrik metodlar:  Math.sin() ,  Math.cos() ,  Math.tan() və s.

Loqarifmik Metodlar
Math.log(x) - x-in natural loqarifmini (e əsaslı) qaytarır.

Math.log2(x) - x-in 2 əsaslı loqarifmini qaytarır.

Math.log10(x) - x-in 10 əsaslı loqarifmini qaytarır.

Loqarifmik Metodlar
Math.log(x) - x-in natural loqarifmini (e əsaslı) qaytarır.

Math.log2(x) - x-in 2 əsaslı loqarifmini qaytarır.

Math.log10(x) - x-in 10 əsaslı loqarifmini qaytarır.

//Qısaca

🔁 Yuvarlaqlaşdırma metodları

Ədədi tam ədədə çevirir:

Math.ceil(4.2) → 5 (yuxarı)

Math.floor(4.9) → 4 (aşağı)

Math.round(4.5) → 5

Math.trunc(4.9) → 4 (sadəcə kəsir)

➕ Arifmetik / Hesablama metodları

Math.pow(2, 3) → 8 (2³)

Math.sqrt(16) → 4 (kvadrat kök)

Math.cbrt(8) → 2 (kub kök)

Math.abs(-10) → 10 (mütləq dəyər)

📊 Min / Max tapmaq

Math.min(9,8,7) → 7

Math.max(9,8,7) → 9

📐 Triqonometrik metodlar

Bucaqlarla işləyir (radian ilə):

Math.sin(x)

Math.cos(x)

Math.tan(x)*/




let text = "Hello bro wasup";
let list = text.match(/[a-zA-Z]+/g);
console.log(list.join("").length);

// If Else
for (let i = 1; i <= 15; i++)
  if (i === 1) {
    console.log("Gold medal");
  } else if (i === 2) {
    console.log("Silver medal");
  } else if (i === 3) {
    console.log("Bürünc medal");
  } else {
    console.log(i);
  }

// Switch
for (let i = 1; i <= 20; i++) {
  switch (i) {
    case 1:
      console.log("Gold medal");
      break;
    case 2:
      console.log("Silver medal");
      break;
    case 3:
      console.log("Bürünc medal");
      break;
    default:
      console.log(i);
  }
}

// Obyekt

var storeManager = {};

storeManager.movementRange = 3;
storeManager.socialSkills = 8;
storeManager.streetSmarts = 6;
storeManager.help = 10;


function arrayBuilder (one,two,three) {
  var arr = [];
  arr.push(one);
  arr.push(two);
  arr.push(three);
  return arr;
}   

//Cheat List
Here's a list of all the methods covered in this cheat sheet:

charAt() 

concat() 

indexOf() 

lastIndexOf() 

split() 

toUpperCase() 

toLowerCase()  


