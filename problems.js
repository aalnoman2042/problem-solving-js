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
  console.log( "price of tickets" , numberoftickets);