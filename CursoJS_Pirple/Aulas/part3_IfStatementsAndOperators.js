//-----------------------------------
// IF STATEMENT AULA 01
//-----------------------------------
// TELL THA CODE : IF THIS THING IS TRUE, RUN MORE CODE
// IF(EXPRESSION)


// IF
const shouldSayHi = true;

if (shouldSayHi == true) {
    console.log("Hi there")
}
//-----------------------------------
// LECTURE : COMPARISON OPERATORS AULA 02
//-----------------------------------

/*Variables */
const numberFive = 5; // se for 4 dá false
const stringFive = "5";
console.log(typeof numberFive); // number

console.log(typeof stringFive); //string

console.log(numberFive === stringFive); //false
console.log(numberFive == stringFive); // true
console.log(numberFive + stringFive); // 55

const stringConversion = parseInt(stringFive);
console.log(numberFive + stringConversion); // 10

if (numberFive === stringFive) {
    console.log("Ola"); // não imprime olá
}


/*Arrays*/

const myArray = [1, 2, 3];
const myOtherArray = [1, 2, 3];

console.log(myArray === myOtherArray); // false
console.log(myArray == myOtherArray); // false

/*Objects*/

const myObject = { name: "Janderson" };
const myOtherObject = { name: "Bob" };

console.log(myObject === myOtherObject); //false

/*Operators*/

const bank = 123;
const item = 123;
const item2 = "123"
const tax = 0.50;
const canSpendMoney = true;
const hasCreditCard = true;
const hasCardLimit = false;

if (bank >= item) {
    console.log("You can purchase this item");

}
if (bank <= item) {
    console.log("You cannot purchase this item");
}
if (bank !== item) {
    console.log("diferente"); //false
    console.log(bank != item2); //false
    console.log(bank !== item2); //true

    if (bank !== item + item2) {
        console.log("I am running"); // imprime
    }

}
//-----------------------------------
// Lecture: Nested If Statements // Declarações Aninhadas AULA 03
//-----------------------------------

if (bank >= item) {
    console.log("ok")
    if (tax >= 0.50) {
        console.log("Tax amount too high");
        if (100 === 100) {
            console.log("kajajajaj"); // o decima dever ser true
        }
        if (100 == 100) {
            console.log("I'm Firing too");
        }
    }

}


//-----------------------------------
// Lecture: Logical Operators Aula 04
//-----------------------------------

if (bank >= item && canSpendMoney == true && item < 150) {
    console.log("You can purchase this item");

}

if (bank >= item || canSpendMoney == true && item < 150) {
    console.log("You can purchase this item");

}
if ((bank >= item) || (canSpendMoney == true && item < 150)) {
    console.log("You can purchase this item");
}

if (!hasCreditCard) {
    console.log("nâo tem ")
}
if ((bank >= item) || (hasCreditCard && !hasCardLimit)) {
    console.log("Congrats! You can make this purchase");
}
//-----------------------------------
// Lecture: Else and Else if Aula 05
//-----------------------------------

if (bank >= item) {
    console.log("Congrats : You can pay for this with cash");
} else {
    if (hasCreditCard && hasCardLimit) {
        console.log("Congrats : You can pay for this with credit");
    } else {
        console.log("Sorry, can't afford");
    }
}

if (bank >= item) {
    console.log("Congrats, you can pay this item with cash");
} else if (hasCreditCard && !hasCardLimit) {
    console.log("You can pay for this with credit")
} else {
    console.log("Sorry, you cannot purchase this item");
}