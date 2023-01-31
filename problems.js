/* // harrys mom gave him money and asked him to buy some orange and apples,write a programme to help harr calculate how much money the shopkeeper will return */

var harrysMomGiven = 1100;
var orangePrice = 700;
var applePrice = 100;

if (harrysMomGiven > orangePrice+applePrice) {
    // console.log (  harrysMomGiven- (orangePrice+applePrice)  );
}
else{
    // console.log("not enough money to buy orange");
}

/* Write a program to calculate the average marks of Mathematics, Biology, Chemistry, Physics, and
Bangla of a student.

Sample Input:
75.25, 65, 80, 35.45, 99.50

*/
    
var  Mathematics = 75.25;
var  Biology = 65;
var  Chemistry = 80;
var  Physics = 35.45;
var  Bangla = 99.50;
 var totalMarks = Bangla+Physics+Chemistry+Biology+Mathematics;

var average = totalMarks / 5;

//  console.log(average.toFixed(2)); 


 
/* John’s teacher gave him two variables. Each variable contains a string. John’s teacher asked him to
combine these two strings and print them in one line. Help John write the program. 

Sample Input:
I am going to be
an awesome web developer

*/

var a = "i am going to be"
var b = "an awesome web developer"

var c = a +" "+ b;
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

var fruits = ['Apple', 'Banana', 'Orange'];

var indexBanana = fruits.indexOf("Banana");


//  console.log("index of banana is" + " " + indexBanana);

 fruits[1] = "Mango"
//  console.log(fruits);

 fruits.pop()
 fruits.push("Watermelon")
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

if ( TotalScore  >= 80){
    // console.log("you got A grade");
}
else if (TotalScore >=60 && TotalScore <80){
    // console.log("you got B grade");
}
else if (TotalScore >= 50  && TotalScore <60){
    // console.log("you got C grade");
}
else if( TotalScore >= 40 && TotalScore< 50 ){
    // console.log("you got D grade");
}
else {
    // console.log("fail vai");
}

/* 
You are given three numbers 13, 79, and 45. Write a program that will print the
largest number using if-else.
 */
 var a = 13;
 var b = 79;
 var c = 45;

 if ( a > b && a > c){
    // console.log("a is largest");
 }
 else if (b > a && b > c ){
    // console.log("b is largest");
 }
 else  {
    // console.log("c is largest");
 }

 /* 
 You are given a triangle with the sides 9, 8, 9. Write a program to check whether a
triangle is Isosceles or not using if-else.
 */
 var side1 = 9;
 var side2 = 8;
 var side3 = 10;

 if(side1==side2 || side1==side3 || side2==side3) {
    // console.log("triangle is isoceles");
 }
 else{
    // console.log("triangle is not isoceles");
 }

/* 
display ajke amr mon valo nei 98 times
d*/

var haha = "aske amr mon valo nei"
for (var i=1; i<= 98; i++ ){
    // console.log(haha);
}


/* Unit Convert Inch to Feet, miles to kilometer with funtion */

/* iches to feet */
function converter(inches){
    const feet = inches /12 ;
    return feet;
}

const rohanInches = 144;
const ahadInches = 100;
const tamjidIches = 120;

 var feetResult = converter(tamjidIches);
//  console.log( "feet:", feetResult);

/* miles to km */
function mileToFeet (mile){
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

function evenOdd (number){
   const reminder = number % 2;
    if (reminder===0){
        return "even";
    }
    else{
        return "odd";
    }
}

const cheackNumber = evenOdd(5)
// console.log(cheackNumber);


function isLeapYear (year){
    const reminder = year %4;
    if(reminder===0)
    return true;
    else{
        return false;
    }
}

const input = 1953;
var results = isLeapYear(input);
console.log(results);
