/************************************************************** Task 1: Warm-up! **************************************************************/
//Task a: declare a variable called votingAge, console log true if age > 18 (no function required)

var votingAge = 20;
if (votingAge > 18) {
    console.log("true");
}

//Task b: declare a variable and then use a conditional to change the value of that variable based on the value assigned to a second variable (no function required)

var firstVar = 2;
var secondVar = 3;
if (firstVar === 2) {
    firstVar = firstVar + secondVar;
} else {
    console.log("ERROR");
}
console.log(firstVar);

//Task c: Convert string ("1999") to integer (1999)  (no function required) // hint look up the Number method

let string = "1999";
console.log(Number(string));

//Task d: Write a function to multiply a*b 

let product = (a, b) => {
    return a * b
}
console.log(product(2, 3));

/************************************************************** Task 2 **************************************************************/
//Age in Dog years
//write a function that takes your age and returns it to you in dog years - they say that 1 human year is equal to seven dog years 

let dogYears = myAge => {
    return myAge * 7
}
console.log(dogYears(29));

/************************************************************** Task 3 **************************************************************/
//Dog feeder 
//takes weight in pounds and age in years (note if the dog is a puppy the age will be a decimal) and returns the number of pounds of raw food to feed in a day.

//feeding requirements
// adult dogs at least 1 year 
// up to 5 lbs - 5% of their body weight
// 6 - 10 lbs - 4% of their body weight 
// 11 - 15 lbs - 3% of their body weight 
// > 15lbs - 2% of their body weight 

// Puppies less than 1 year
// 2 - 4 months 10% of their body weight age > 1mo && < 4
// 4 - 7 months 5% of their body weight 
// 7 - 12 months 4% of their body weight

// when you are finished invoke your function with the weight of 15 lbs and the age of 1 year - if your calculations are correct your result should be 0.44999999999999996

const feedingReq = (age, weight) => {
    if (age >= 1) {
        if (weight <= 5) {
            return weight * .05
        } else if (weight >= 6 && weight <= 10) {
            return weight * .04
        } else if (weight >= 11 && weight <= 15) {
            return weight * .03
        } else if (weight > 15) {
            return weight * .02
        } else {
            console.log("ERROR");
        }
    }
    if (age < 1) {
        if (age < .33) {
            return weight * .1
        } else if (age < .58) {
            return weight * .05
        } else if (age < 1) {
            return weight * .04
        } else {
            console.log("ERROR");
        }
    }
}
console.log(feedingReq(1, 15))

/************************************************************** Task 4 **************************************************************/
// Rock, Paper, Sissors
// Your function should take a string (either rock paper or sissors)
// it should return you won or you lost based on the rules of the game (you may need to look up the rules if you have not played before)
// use math.random to determine the computers choice 
// hint while you can complete this with only conditionals based on strings it may help to equate choice to a number 

//-- Get User Input
let getUserInput = (userInputFunc) => {
    return userInputFunc
}
//-- Get Com Input
let getComInput = () => {
    comInputFunc = Math.floor(Math.random() * 3);
    switch (comInputFunc) {
        case 0:
        return "rock";
        break;
        case 1:
        return "paper";
        break;
        case 2:
        return "scissors";
        break;
    }
}
//-- Get Winner
let getWinner = (userInput, comInput) => {
    if (userInput === comInput) {
        return "It's a tie..."
    } else if (userInput === "rock") {
        if (comInput === "paper") {
        return "Com won!"
        } else {
        return "You won!"
        }
    } else if (userInput === "paper") {
        if (comInput === "rock") {
        return "You won!"
        } else {
        return "Com won!"
        }
    } else {
        if (comInput === "rock") {
        return "Com won!"
        } else {
        return "You won!"
        }
    }
}
//-- Play Game
let playGame = (choice) => {
    let userInput = getUserInput(choice);
    let comInput = getComInput();
    let winner = getWinner(userInput, comInput);
    console.log(`Your move: ${userInput}`);
    console.log(`Coms move: ${comInput}`);
    console.log(winner);
}
playGame("paper")
  
/************************************************************** Task 5 **************************************************************/
//Metric Converter
//a. KM to Miles - should take the number of kilometers and convert it to the equal number of miles

let convertToMiles = km => {
    return km * 0.621371
}
console.log(convertToMiles(5))

//b. Feet to CM - should take the number of feet and convert it to the equal number of centimeters

let convertToCM = feet => {
    return feet * 30.48
}
console.log(convertToCM(5))

/************************************************************** Task 6 **************************************************************/
// 99 bottles of soda on the wall
// create a function called annoyingSong
// the function should take a starting number as an argument and count down - at each iteration it should log (number) bottles of soda on the wall, (number) bottles of soda, take one down pass it around (number left over) bottles of soda on the wall`

function annoyingSong(num) {
    for (let i = num; i >= 1; i--) {
        let num2 = num - 1;
        console.log(`${num} bottles of soda on the wall, ${num} bottles of soda, take one down pass it around ${num2} bottles of soda on the wall`);
        num = num2;
    }
}
annoyingSong(5)

/************************************************************** Task 7 **************************************************************/
//Grade Calculator
//write a javaScript program that takes a mark out of 100 and returns a corisponding letter grade 
//90s should be A 
//80s should be B 
//70s should be Cs 
//60s should be D 
//and anything below 60 should be F

function gradeCalc(num) {
    if (num >= 90) {
        console.log("A");
    } else if (num >= 80 && num < 90) {
        console.log("B");
    } else if (num >= 70 && num < 80) {
        console.log("C");
    } else if (num >= 60 && num < 70) {
        console.log("D");
    } else {
        console.log("F");
    }
}
gradeCalc(100)

/************************************************************** Stretch **************************************************************/
//Create a function that counts the number of vowels within a string. It should handle both capitalized and uncapitalized vowels.
// Hint - you may need to study tomorrow's traning kit on arrays 
// try looking up the .includes() method





/************************************************************** Stretch **************************************************************/
//Take Rock, Paper, Sissors further
//update your rock papers sissors code below to take a prompt from a user using the window object





