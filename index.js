
//1 Create a var that stores the name that user enter via prompt.

var name = prompt("What is your name?");

//2 Capitalise the first letter of their name.

//a Isolate the first char
var firstChar = name.slice(0,1);

//b Turn the first char to upper case
var upperCaseFirstChar = firstChar.toUpperCase();

//c Isolate the rest of the name
var restOfName = name.slice(1, name.length);

//d Change the rest of the name to lower case
restOfName = restOfName.toLowerCase();

//e Concatenate the first char with the rest of the char
var capitalisedName = upperCaseFirstChar + restOfName;

//3 We use the capitalised version of their name to greet them using an alert.
alert("Hello " + capitalisedName);

// Hello Gabriel


var dogAge = prompt("How old is your dog?");
var humanAge = ((dogAge-2)*4)+21;
alert ("Your dog is " + humanAge + " years old in human years.");



function main(){
    goInCircle();
    goInCircle();
}

function goInCircle () {
   move();
   turnLeft();
   move();
   turnLeft();
}

function main () {
    move();
    move();
    move();
    move();
    turnLeft();
    move();
    move();
    move();
    move();
 
 }

 function main () {
    moveFourTimes();
    turnLeft();
    moveFourTimes();
 
 }
 
 function moveFourTimes() {
     move();
    move();
    move();
    move();
 }

 function main () {
    putBeeper();
    fiveTimes();
 }
 
 function moveDiag(){
    move();
    turnLeft();
    move();
    putBeeper();
    turnRight();
 }
 
 function fiveTimes (){
    moveDiag();
    moveDiag();
    moveDiag();
    moveDiag();
 }


 function main () {
    firstLine();
    firstLine();
    putBeeper();
    left();
    right();
    left();
    right();   
 }
    
 function left() {
    turnLeft();
    move();
    turnLeft();
    move();
    putBeeper();
    move();
    move();
    putBeeper();
    move();
    }
    
 function right() {
    turnRight();
    move();
    putBeeper();
    turnRight();
    move();
    move();
    putBeeper();
    move();
    move();
    putBeeper();
    }
 
 function firstLine() {
    putBeeper();
    move();
    move();
 }
   

 function getMilk(money) { 
    console.log("leaveHouse");
    console.log("moveRight");
    console.log("moveRight");
    console.log("moveUp");
    console.log("moveUp");
    console.log("moveUp");
    console.log("moveUp");
    console.log("moveRight");
    console.log("moveRight");
    
    var numberOfBottles = Math.floor(money /1.5);
    console.log("buy " + numberOfBottles + " bottles of milk");
    
    console.log("moveLeft");
    console.log("moveLeft");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveLeft");
    console.log("moveLeft");
    console.log("enterHouse");
    return money % 1.5;
    }

    var change = getMilk(4);
    console.log(change);
\


function getMilk(money) { 
    console.log("buy " + calcBottles(money, 1.5) + " bottles of Milk");
    return calcChange(money, 1.5);
    
}

function calcBottles(startingMoney, costPerBottle) {
    var numberOfBottles = Math.floor(startingMoney/costPerBottle);
    return numberOfBottles;
}

function calcChange(startingAmount, costPerBottle) {
    var change = startingAmount % costPerBottle;
    return change;
}

console.log("Hello master, here is your " + getMilk(5) + " change");

//Console: buy 3 bottles of Milk
//         0.5


function getMilk(money, costPerBottle) { 
    console.log("buy " + calcBottles(money, 2.5) + " bottles of Milk");
    return calcChange(money, costPerBottle);
    
}

function calcBottles(startingMoney, costPerBottle) {
    var numberOfBottles = Math.floor(startingMoney/costPerBottle);
    return numberOfBottles;
}

function calcChange(startingAmount, costPerBottle) {
    var change = startingAmount % costPerBottle;
    return change;
}

console.log("Hello master, here is your " + getMilk(10, 3) + " change");


//Create your function below this line.
function bmiCalculator(weight, height) {
    var bmi = weight / (height * height);
    return bmi;
}


/* If my weight is 65Kg and my height is 1.8m, I should be able to call your function like this:

var bmi = bmiCalculator(65, 1.8);

bmi should equal around 20 in this case.

*/
var bmi = weight / Math.pow(height, 2);
console.log(bmi);

return Math.round(bmi);


var n= Math.random();
var n= n*6;
n = Math.floor(n) +1;
console.log(n);


var name = prompt("What is your name?");
var love = prompt("What is their name?");

var loveScore= Math.random() * 100;
loveScore = Math.floor(loveScore) +1;
console.log(loveScore);

alert(("Hello ") + name + (" ,") + (" your love score is ") + loveScore + ("%"));

if(loveScore > 70) {
   alert(("Hello ") + name + (" ,") + (" your love score is ") + loveScore + ("%") + "You love each other like Kanye loves Kanye.");
} else {
   alert(("Hello ") + name + (" ,") + (" your love score is ") + loveScore + ("%"));
}

var a = 1;
var b = "1";

typeof(a);
//Console: "number"
typeof(b);
//Console: "string"
if (a===b) {
   console.log("yes");
}
else {
   console.log("no");
}
//Console: no


if(loveScore > 70) {
   alert(("Hello ") + name + (" ,") + (" your love score is ") + loveScore + ("%") + "You love each other like Kanye loves Kanye.");
}
if (loveScore > 30 && loveScore <=70){
   alert(("Hello ") + name + (" ,") + (" your love score is ") + loveScore + ("%"));
}

if (loveScore <= 30) {
   alert(("Hello ") + name + (" ,") + (" your love score is ") + loveScore + ("%") +("You go together like oil and water"));
}

var guestList = ["Angela", "Jack", "Pam", "James", "Lara", "Jason"];
var guestName = prompt("What is your name?");
if (guestList.includes(guestName)) {
    alert("Welcome");
}
else {
    alert("Sorry, maybe next time.")
}

var output = []; // Array
output.push(1); // Adauga nr 1 in array
output.push(2); // Adauga la sfarsit nr 2 in array
output.push(3); // Adauga la sfarsit nr 3 in array
output.pop(); // Sterge ultimul item din array
console.log(output);
//Console (2) [1, 2]


var output = [];
var count = 1;

function fizzBuzz() {
output.push(count);
count++; // Adauga +1 de fiecare data cand apelam functia
    console.log(output);
}

fizzBuzz(); //Apelarea functiei



var output = [];
var count = 1;

function fizzBuzz() {
    if(count % 3 === 0) {
        output.push("Fizz");
    } else {
        output.push(count);
    }

count++;
    console.log(output);
   }


var output = [];
var count = 1;

function fizzBuzz() {
    if(count % 3 === 0 && count % 5 === 0) {
        output.push("FizzBuzz");
    }
    else if(count % 3 === 0) {
        output.push("Fizz");
    } 
    else if(count % 5 === 0) {
        output.push("Buzz");
    }
    else {
        output.push(count);
    }

count++;
    console.log(output);
   }

   fizzBuzz();


//    While

var output = [];
var count = 1;

function fizzBuzz() {
    while(count <= 100) {
    if(count % 3 === 0 && count % 5 === 0) {
        output.push("FizzBuzz");
    }
    else if(count % 3 === 0) {
        output.push("Fizz");
    } 
    else if(count % 5 === 0) {
        output.push("Buzz");
    }
    else {
        output.push(count);
    }

count++;
    console.log(output);
   }
}
   fizzBuzz();



//    For

var output = [];

function fizzBuzz() {
    for(var count = 100; count > 1; count--) {
    if(count % 3 === 0 && count % 5 === 0) {
        output.push("FizzBuzz");
    }
    else if(count % 3 === 0) {
        output.push("Fizz");
    } 
    else if(count % 5 === 0) {
        output.push("Buzz");
    }
    else {
        output.push(count);
    }

    console.log(output);
   }
}
   fizzBuzz();