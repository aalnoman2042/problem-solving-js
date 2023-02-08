/* // harrys mom gave him money and asked him to buy some orange and apples,write a programme to help harr calculate how much money the shopkeeper will return */

var harrysMomGiven = 1100;
var orangePrice = 700;
var applePrice = 100;

if (harrysMomGiven > orangePrice + applePrice) {
  // console.log (  harrysMomGiven- (orangePrice+applePrice)  );
} else {
  // console.log("not enough money to buy orange");
}

/* Write a program to calculate the average marks of Mathematics, Biology, Chemistry, Physics, and
Bangla of a student.

Sample Input:
75.25, 65, 80, 35.45, 99.50

*/

var Mathematics = 75.25;
var Biology = 65;
var Chemistry = 80;
var Physics = 35.45;
var Bangla = 99.5;
var totalMarks = Bangla + Physics + Chemistry + Biology + Mathematics;

var average = totalMarks / 5;

//  console.log(average.toFixed(2));

/* John’s teacher gave him two variables. Each variable contains a string. John’s teacher asked him to
combine these two strings and print them in one line. Help John write the program. 

Sample Input:
I am going to be
an awesome web developer

*/

var a = "i am going to be";
var b = "an awesome web developer";

var c = a + " " + b;
// console.log(c);

/* Sarah’s mother is teaching her mathematics. She gave Sarah a number and asked her what the
remainder would be if she divided the number by 5. Help Sarah write the program.

Sample Input:
119
*/

var number = 119;
var haveToDivideWith = 5;

var reminderAns = number % haveToDivideWith;

// console.log(reminderAns);

/* 
You are given an array:

var fruits = ['Apple', 'Banana', 'Orange'];

a) Find the index of ‘Banana’ and replace ‘Banana’ with ‘Mango’.
b) Remove ‘Orange’ and add ‘Watermelon’.
*/

var fruits = ["Apple", "Banana", "Orange"];

var indexBanana = fruits.indexOf("Banana");

//  console.log("index of banana is" + " " + indexBanana);

fruits[1] = "Mango";
//  console.log(fruits);

fruits.pop();
fruits.push("Watermelon");
//  console.log(fruits);

/* 
You and your friends Tom, Jane, Peter and John got their final exam results. Your total
score is 85, Tom’s total score is 66, Jane’s total score is 95, Peter’s total score is 56
and John’s total score is 40. The grading chart is
80 or above A grade
60 or above B grade
50 or above C grade
40 or above D grade
39 or less => F grade
*/

var TotalScore = 0;

if (TotalScore >= 80) {
  // console.log("you got A grade");
} else if (TotalScore >= 60 && TotalScore < 80) {
  // console.log("you got B grade");
} else if (TotalScore >= 50 && TotalScore < 60) {
  // console.log("you got C grade");
} else if (TotalScore >= 40 && TotalScore < 50) {
  // console.log("you got D grade");
} else {
  // console.log("fail vai");
}

/* 
You are given three numbers 13, 79, and 45. Write a program that will print the
largest number using if-else.
 */
var a = 13;
var b = 79;
var c = 45;

if (a > b && a > c) {
  // console.log("a is largest");
} else if (b > a && b > c) {
  // console.log("b is largest");
} else {
  // console.log("c is largest");
}

/* 
 You are given a triangle with the sides 9, 8, 9. Write a program to check whether a
triangle is Isosceles or not using if-else.
 */
var side1 = 9;
var side2 = 8;
var side3 = 10;

if (side1 == side2 || side1 == side3 || side2 == side3) {
  // console.log("triangle is isoceles");
} else {
  // console.log("triangle is not isoceles");
}

/* 
display ajke amr mon valo nei 98 times
d*/

var haha = "aske amr mon valo nei";
for (var i = 1; i <= 98; i++) {
  // console.log(haha);
}

/* Unit Convert Inch to Feet, miles to kilometer with funtion */

/* iches to feet */
function converter(inches) {
  const feet = inches / 12;
  return feet;
}

const rohanInches = 144;
const ahadInches = 100;
const tamjidIches = 120;

var feetResult = converter(tamjidIches);
//  console.log( "feet:", feetResult);

/* miles to km */
function mileToFeet(mile) {
  const feet = mile * 1.60934;
  return feet;
}

const myOfiiceToHome = 100;
var convertedKm = mileToFeet(myOfiiceToHome);

//  console.log(convertedKm);

/* Peter's school teacher asked him to write a program that would return true if a number is even and false if a number
is odd. Help Peter write the program.
Input:
The first and second input lines contain the numbers.
Output:

 Print true if the number is an even number and false if the number is an odd number.
 */

function evenOdd(number) {
  const reminder = number % 2;
  if (reminder === 0) {
    return "even";
  } else {
    return "odd";
  }
}

const cheackNumber = evenOdd(5);
// console.log(cheackNumber);

/* leap year cheacking function */
function isLeapYear(year) {
  const reminder = year % 4;
  if (reminder === 0) return true;
  else {
    return false;
  }
}

const input = 1953;
var results = isLeapYear(input);
// console.log(results);

/* sum of an array */

function getSumOfAnArray(numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    const index = i;
    const element = numbers[index];
    sum = sum + element;
    // console.log(element,sum );
  }
  return sum;
}
var myNmumbers = [12, 13, 14, 15, 16, 17, 18];
getSumOfAnArray(myNmumbers);

/* sum of odd numbers of an array */
function getOddNumbersOfAnArray(numbers) {
  const oddNumbers = [];
  for (let i = 0; i < numbers.length; i++) {
    const index = i;
    const element = numbers[index];
    if (element % 2 !== 0) {
      // console.log(index, element);
      oddNumbers.push(element);
    }
  }
  return oddNumbers;
}
var myNmumbers = [12, 13, 14, 15, 16, 17, 18];
const oddNumbers = getOddNumbersOfAnArray(myNmumbers);
var oddNumberSum = getSumOfAnArray(oddNumbers); /* previous function */

// console.log( "odd number sum" , oddNumberSum);

/* factorial of number 7 */
function factorial(number) {
  let result = 1;
  for (let i = 1; i <= number; i++) {
    result = result * i;
  }
  return result;
}

const ans = factorial(7);
// console.log(ans);

/* factorial of number 7 in reverse way*/
function factorial(number) {
  let result = 1;
  for (let i = number; i >= 1; i--) {
    result = result * i;
  }
  return result;
}

const answer = factorial(7);
//  console.log(answer);

/* remove dublicate items froman array */

const names = [
  "abul",
  "tabul",
  "abul",
  "babubl",
  "cabul",
  "jorina",
  "karina",
  "sokina",
  "jorina",
];

function removeDuplicate(names) {
  const unique = [];
  for (var i = 0; i < names.length; i++) {
    const name = names[i];
    // console.log(name);
    if (unique.includes(name) === false) {
      unique.push(name);
    }
  }
  return unique;
}

const uniqueName = removeDuplicate(names);
//  console.log(uniqueName);

/* show 1-50
=> if the number is divisible by 3 then instead  of the number show "foo" 
=> if the number is divisible by 5 then instead  of the number show "foo" 
=> if the number is divisible by 3 and 5 then instead  of the number show "foo" */

for (var i = 1; i <= 50; i++) {
  if (i % 5 === 0 && i % 3 === 0) {
    // console.log("foo bar");
  } else if (i % 3 === 0) {
    // console.log("foo");
  } else if (i % 5 === 0) {
    // console.log("bar");
  } else {
    // console.log(i);
  }
}

/* 
fixed : per items wood requirments
1. chair --> 3 cft 
1.table --> 10 cft 
1. bed --> 50 cft 

vary : quantity
*/

function woodCalculation(chairQuantity, tableQuantity, bedQuantity) {
  const perTableWood = 10;
  const perChairWood = 3;
  const perBedWood = 50;

  const chairWood = chairQuantity * perChairWood;
  const tableWood = perTableWood * tableQuantity;
  const bedWood = perBedWood * bedQuantity;

  const totalwood = chairWood + tableWood + bedWood;
  return totalwood;
}
const totalwood = woodCalculation(2, 2, 5);
// console.log("total wood required", totalwood);


 /* finding cheapest phone in an array and inside of a object */
const phones = [
 { name : "samsung",
  camera : 12,
  storage : "32gb",
  price : 36000,
  color : "silver"} ,


  { name : "nokia",
  camera : 12,
  storage : "32gb",
  price : 36000,
  color : "silver"},


  { name : "walton",
  camera : 12,
  storage : "32gb",
  price : 12000,
  color : "silver"},

  { name : "oppo",
  camera : 12,
  storage : "32gb",
  price : 10000,
  color : "silver"},

  { name : "xiaomi",
  camera : 12,
  storage : "32gb",
  price : 8000,
  color : "silver"}

]

function cheapestPhone(phones){
  let cheapest = phones[0];

  for ( var i =0; i < phones.length; i++ ){
    const phone = phones[i]
    if(phone.price < cheapest.price) {
      cheapest = phone;
    }
  } 
 return cheapest;
}

const myselection = cheapestPhone(phones)
// console.log(myselection);



/* total of all shopping by function */
const shoppinCart = [
  {
    name : "shoe",
    price : 1200,
    quantity : 2
  },

  {
    name: "shirt",
    price : 2200,
    quantity : 5
  },

  {
    name: "pant",
    price : 3700,
    quantity : 3
  },

  {
    name: "belt",
    price : 200,
    quantity : 4
  }

]
  function totalCost(cost) {
     var sum =0;
    for(var i = 0; i < cost.length; i++){
        const shopping = cost[i];
        const productTotal = shopping.price * shopping.quantity;
         sum = productTotal + sum;
   
    }
return sum;
  } 

  const mySopping = totalCost(shoppinCart);
  // console.log(mySopping);


  /* 
  1. if ticket number is less then 100 , per ticket price : 100 
  2. if ticket number is more then 100 , but less than 200. first 100 tickets will be 100/ticket rest tickets will be 90 taka per price 
  3.if you purchase more than 200 tickets first 100 ---> 100
  101 -200 ---> 90tk
  200+ ----> 70tk
  */

  function ticket(num) {
      

      if ( num > 200) {
        var ticketsMoreThan100 = num - 100;
        var ticketsMoreThan200 = num -200;
        var priceOf100 = 100*100;
        var priceOf100_200 = ticketsMoreThan100*90
        var priceOfMoreThan200 = ticketsMoreThan200*70
         var totalPriceOfTickts = priceOf100 + priceOf100_200 + priceOfMoreThan200;
         return totalPriceOfTickts;
      }
    else if (num > 100 && num <= 200){
      var tickets = num - 100;
      var priceOf100 = 100*100;
       var totalPriceOfTickts = priceOf100 + tickets*90;
       return totalPriceOfTickts;
    }
    else {
      var ticketprice = 100;
      var totalPriceOfTickts  = ticketprice * num;
      return totalPriceOfTickts;
     }

  }

  const numberoftickets = ticket(250)
  // console.log( "price of tickets" , numberoftickets);


  /* feet to inch converter with function */
   function  feetToInch(feet){

      var result = feet * 12;

      return result;
  
   }

   const givingFeet = feetToInch(5.7)
    //  console.log(givingFeet);



    /* centimeter to meter with function */
    function centimeterToMeter(cm){
      var result = cm / 100;

      return result;
    }
    const cmGiven = centimeterToMeter(200);
    // console.log(cmGiven);


    /* 
    আরেকটা ফাংশন লিখবে যেটার নাম লিখবে। যেই ফাংশনের নাম হবে paperRequirements এই ফাংশনের প্যারামিটার হিসেবে তিনটা প্যারামিটার হবে। প্রথম প্যারামিটার হবে তুমি প্রথম বই কত কপি ছাপাতে চাও। সেকেন্ড প্যারামিটার হবে তুমি সেকেন্ড বই কত কপি ছাপাতে চাও। আর থার্ড প্যারামিটার হবে তুমি থার্ড বই কত কপি ছাপাতে চাও। অর্থাৎ কোন বই এর কত কপি ছাপানো হবে সেটাই প্যারামিটার হিসেবে নিবে। 

এইবার ভালো করে খেয়াল করো। 

প্রথম বই ছাপানোর জন্য পৃষ্ঠা লাগবে ১০০ টা 

সেকেন্ড বই ছাপানোর জন্য পৃষ্ঠা লাগবে ২০০ টা 

তৃতীয় বই ছাপানোর জন্য পৃষ্ঠা লাগবে ৩০০ টা 
    */


function paperRequirements(book1 , book2, book3 ){

  firstBookPage = book1 *100;
  secondBookPage = book2 * 200;
  thirdBookPage = book3 * 300;

  totalPagesNeed = firstBookPage + secondBookPage + thirdBookPage;

  return totalPagesNeed;
}

const myBookNumbers = paperRequirements(1, 2, 1);
// console.log(myBookNumbers);


/*  একটা ফাংশন লিখবে। এই ফাংশনের নাম হবে bestFriend তারপর সেই ফাংশনে ইনপুট প্যারামিটার হিসেবে একটা array নিবে। সেই array এর মধ্যে তোমার সব ফ্রেন্ডের নাম থাকবে। এখন তোমার কাজ হচ্ছে যে ফ্রেন্ড এর নাম সবচেয়ে বড় সেই ফ্রেন্ড এর নাম রিটার্ন করে দেয়া। এই ক্ষেত্রে তুমি নামটা অর্থাৎ ফ্রেন্ডের নাম (স্ট্রিং) রিটার্ন করতে হবে।  */

function bestFriend(names){
  let convert = names.toString()
   let name = convert.split(',')
   let bigName = [""];
   
  for(let i = 0; i <name.length; i++){
    let element = name[i]
     if( element.length > bigName.length ){
      bigName = element;
    }
  }
return bigName.toString();

}

const friendsName = ["rahee", "riko", "mahin", "ahad", "tamjid", "faruk", "fahad", "adullah"]
const allNames = bestFriend(friendsName);
console.log(allNames);
console.log(typeof(allNames));







/* . একটা array এর মধ্যে অনেকগুলা সংখ্যা থাকবে। তোমার কাজ হচ্ছে সংখ্যা গুলা একটার পর একটা করে চেক করা। এবং সংখ্যা গুলা যদি পজিটিভ সংখ্যা হয়। অর্থাৎ শূন্য বা শূন্যের চাইতে বড় হয় তাহলে সেগুলাকে কোন একটা array এর মধ্যে রাখবে। আর যদি নেগেটিভ সংখ্যা হয়। তাহলে লুপটা স্টপ করে দিবে। এবং লুপ বন্ধ করার আগ পর্যন্ত যতগুলা পজিটিভ সংখ্যা পাওয়া গেছে। সেগুলা রিটার্ন করে দিবে। */

function positiveNumbers(numbers) {
    let result = []
    for (let i = 0; i < numbers.length; i++ ){
      let index = numbers[i]
      if (index > 0){
        result.push(index)
      }
      else if( index < 0){
        break
      }
    }
    return result;
}
const allNumbers = [10, 20, -86, 60, -68, 78, -35, -92]
const callingFunc = positiveNumbers(allNumbers)
// console.log(callingFunc);

                                                            /* problem 1 */
 /* তোমাকে একটা function দেওয়া হবে called mindGame(” যা ইনপুট হিসেবে একটা positive number নিবে।")
এখন তোমার task : তোমাকে সেই নাম্বার এর সাথে 3 গুন করে, তারপর 10 যোগ করে, তারপর 2 দিয়ে ভাগ করে, তারপর 5 বিয়োগ করে, যা আউটপুট আসবে তা return করতে হবে */
function mindGame(num) {
  if (typeof num != "number") {
    return "please enter a number type data";
  } else {
    num = (num * 3 + 10) / 2 - 5;

    return num;
  }
}

//  const inputNumber = mindGame(33);
// console.log(inputNumber);

                                                        /* problem 02 */
/* তোমাকে একটা function দেওয়া হবে called evenOdd(). এটা ইনপুট হিসেবে একটা string নিবে। 



এখন তোমার task: String এ total কয়টা character আছে তার উপর ভিত্তি করে আউটপুট দিতে হবে। আউটপুট হবে ‘even’ অথবা ‘odd’  */
function evenOdd(string) {
  if (typeof string != "string") {
    return "please enter a number type data";
  }

  let char = string.length;

  if (char % 2 === 0) {
    return "even";
  } else {
    return "odd";
  }
}

//  const stringGiven = evenOdd("phero")
//  console.log(stringGiven);

                                            /* problem 03 */
/* তোমাকে একটা function দেওয়া হবে called “isLGSeven()”. এটা ইনপুট হিসেবে একটা number নিবে।  



এখন তোমার task: তোমাকে ইনপুট ভ্যালু এবং ৭ এর মধ্যে পার্থক্য বের করতে হবে। যদি এই পার্থক্য ৭ এর চেয়ে ছোট হয়, তখন তোমাকে return করতে হবে সেই বিয়োগফল। নাহলে তোমাকে return করতে হবে double of the input। মানে যে সংখ্যা ইনপুট হিসেবে নিয়েছো সেটির দ্বিগুণ। */
function isLGSeven(number) {
  if (typeof number != "number") {
    return "please enter a number type data";
  }

  let substracted = number - 7;

  if (substracted < 7) {
    return substracted;
  } else {
    let multiplication = number * 2;

    return multiplication;
  }
}

// const takenNumber = isLGSeven(6)
// console.log(takenNumber);

                                            /* problem 04 */
  /* 
  তোমাকে একটা function দেওয়া হবে called findingBadData(). এটা ইনপুট হিসেবে একটা array নিবে। array তে যেকোনো সংখ্যক কতগুলো number থাকবে। number গুলো negative number (less than zero) ও হতে পারে, আবার positive number (greater than or equal to zero) ও হতে পারে। কোনও number যদি negative হয় সেটাকে আমরা বলব “Bad Data”. কোনও number যদি positive হয় সেটাকে আমরা বলব “Good Data”. 

এখন তোমার task: array তে কতগুলো Bad data আছে সেটা খুঁজে বের করতে হবে এবং সেই নাম্বার টা return করতে হবে।

 */
function findingBadData(data) {
  if (typeof data != "object") {
    return "please enter a Array type data";
  }

  let badData = [];

  for (let i = 0; i < data.length; i++) {
    let indexValue = data[i];
    if (indexValue < 0) {
      badData.push(indexValue);
    }
  }

  let totalBadData = badData.length;

  return totalBadData;
}

// const mixedData =[20, -40, 15, -9, 17, 0, -3, 9];
// const result = findingBadData(mixedData);
// console.log(result);

                                                /* problem 05 */
/* 
তোমাকে একটা function দেওয়া হবে called gemsToDiamond(). এটা ইনপুট হিসেবে তিনটা number ( তোমাদের ৩ বন্ধুর gems এর সংখ্যা ) নিবে। 

১ম বন্ধুর প্রতি gems এর ক্ষমতা = 21

২য় বন্ধুর প্রতি gems এর ক্ষমতা = 32

৩য় বন্ধুর প্রতি gems এর ক্ষমতা = 43

[ gems এর ক্ষমতা বলতে একটা gems কে কয়টা diamond এ convert করা যাবে সেটা বুঝানো হচ্ছে। ]

এখন তোমার task: সব বন্ধুর gems মিলিয়ে total কতটি diamond পাবে সেটা বের করতে হবে। total diamond এর সংখ্যা যদি 1000 এর দিগুন এর উপর হয়ে যায় সেক্ষেত্রে total diamond থেকে 2000 বাদ দিয়ে যতগুলো diamond অবশিষ্ট থাকবে, ততগুলো তোমরা পাবে।
*/
function gemsToDiamond(frnd1, frnd2, frnd3) {
  if (
    (typeof frnd1 != "number",
    typeof frnd2 != "number",
    typeof frnd3 != "number")
  ) {
    return "please enter number type some data";
  }

  let frnd1Diamod = frnd1 * 21;
  let frnd2Diamod = frnd2 * 32;
  let frnd3Diamod = frnd3 * 43;
  let totaldiamond = frnd1Diamod + frnd2Diamod + frnd3Diamod;

  if (totaldiamond <= 1000 * 2) {
    return totaldiamond;
  } else {
    let substracted = totaldiamond - 2000;
    return substracted;
  }
}

// const gems = gemsToDiamond(100,5,1)
// console.log(gems);
