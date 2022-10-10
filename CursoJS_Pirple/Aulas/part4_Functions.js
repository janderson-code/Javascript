//Lecture: Introduction to Functions
//-----------------------------------
// LECTURE : Introduction to Functions // aula 04 
//-----------------------------------
//Functions

//Declarando Função

// const MyName ="Janderson";

// function sayHi(username, lastname){
// 	console.log("HI" + " " + MyName + " " +lastname);
// }
// // não precisa tipar os parametros com C++ string firstname , int age

// function sayBye(firstname,age){
// 	console.log("Bye" + " " + firstname + "you are" + " " +age);
// }
// //chamando função
// sayHi("Janderson","Barbosa");
// sayHi("josé","Joaquino");
// sayHi("Maria","Madalena");


// const billy = "Billy";
// const Janderson = "Janderson";
// const sally = "sally";


// sayBye(billy,20);
// sayBye(Janderson,25);
// sayBye(sally,10);

// function numberDoubler(num){
// 	 // console.log(num *2);
// 	 const doubledValue = num *2;
// 	 //return num *2
// 	 return doubledValue;
// }


// //numberDoubler(10);
// console.log(numberDoubler(10));

// const numTwoDoubled = numberDoubler(2);
// const numFiveDoubled = numberDoubler(5);
// console.log(numTwoDoubled); //4
// console.log(numFiveDoubled); //10
// console.log(numTwoDoubled + numFiveDoubled);//14

// function numberAdder(num1,num2){
// 	return num1 + num2;
// }

// console.log(numberAdder(numFiveDoubled,numTwoDoubled);//14


// const myName - "Chris";

// //25:00

// function sayHi(){
// 	if (!myName) {
// 		var myName ="Bob";
// 	}
// 	console.log("Hi " + MyName);
// }

//sayHi("Janderson");

// var sayHi = function(myName){
// 	if (!myName) {
// 		var myName ="Bob";
// 	}
// 	console.log("Hi " + MyName);
// }

// sayHi("Janderson"); // Não funcina

//29:28

// const squarednumber = function (num){
// 	return num * num;
// }

// const numberAdder = function (num1,num2){
// 	return num1 + num2
// }
// const numberAdder = function (squarer,num2){
// 	const squared = squarer(4);// função nativa 4^4
// 	return squared + num2;
// }
// console.log(numberAdder(squarednumber(4),10))//26

// //34:17

// let myNumber = 100;
// let myString = "Eu sou uma string"

// function add20(num){
// 	return num + 20
// }
// function addHello(string){
// 	return "Ola" + "" + string;
// }

// console.log(add20(myNumber));//120
// console.log(addHello(myString));


// //36:35
// const myInfo = {name: "Janderson",age:25};

// function chageAgeTo100(myObj){
// 	myObj.age = 100;
// }
// console.log(myInfo); //25
// chageAgeTo100(myInfo);
// console.log(myInfo);//100

// const myNumbers=[1,2,3,4];

// function addToArray(myArr){
// 	myArr.push(6);
// }
// console.log(myNumbers);
// addToArray(myNumbers);
// console.log(myNumbers);

// //Lecture: 

//-----------------------------------
// LECTURE :Nested Functions (Closures) aula 2
//-----------------------------------

// function squareAndMultiply(num1,num2){

// 	let testLet = "I am a test";

// 	function squarer(X){
// 		console.log(testLet); //imprime
// 		return x*x;
// 	}
// 	function multiplyBy10(y){
// 		return y *10;
// 	}
// 	return squarer(num1) * multiplyBy10(num2);//squarer(num2);
// }

// console.log(squareAndMultiply(4,4));//640
//  const first = squareAndMultiply(4,4);
//  const second = squareAndMultiply(5,5);
//  const third = squareAndMultiply(4,200);

//  console.log(second);



// aula 04 

//Lecture: Introduction to Functions

//Functions

//Declarando Função

// const MyName ="Janderson";

// function sayHi(username, lastname){
// 	console.log("HI" + " " + MyName + " " +lastname);
// }
// // não precisa tipar os parametros com C++ string firstname , int age
// function sayBye(firstname,age){
// 	console.log("Bye" + " " + firstname + "you are" + " " +age);
// }
// //chamando função
// sayHi("Janderson","Barbosa");
// sayHi("josé","Joaquino");
// sayHi("Maria","Madalena");


// const billy = "Billy";
// const Janderson = "Janderson";
// const sally = "sally";


// sayBye(billy,20);
// sayBye(Janderson,25);
// sayBye(sally,10);

// function numberDoubler(num){
// 	 // console.log(num *2);
// 	 const doubledValue = num *2;
// 	 //return num *2
// 	 return doubledValue;
// }


// //numberDoubler(10);
// console.log(numberDoubler(10));

// const numTwoDoubled = numberDoubler(2);
// const numFiveDoubled = numberDoubler(5);
// console.log(numTwoDoubled); //4
// console.log(numFiveDoubled); //10
// console.log(numTwoDoubled + numFiveDoubled);//14

// function numberAdder(num1,num2){
// 	return num1 + num2;
// }

// console.log(numberAdder(numFiveDoubled,numTwoDoubled);//14


// const myName - "Chris";

// //25:00

// function sayHi(){
// 	if (!myName) {
// 		var myName ="Bob";
// 	}
// 	console.log("Hi " + MyName);
// }

//sayHi("Janderson");

// var sayHi = function(myName){
// 	if (!myName) {
// 		var myName ="Bob";
// 	}
// 	console.log("Hi " + MyName);
// }

// sayHi("Janderson"); // Não funcina

//29:28

// const squarednumber = function (num){
// 	return num * num;
// }

// const numberAdder = function (num1,num2){
// 	return num1 + num2
// }
// const numberAdder = function (squarer,num2){
// 	const squared = squarer(4);// função nativa 4^4
// 	return squared + num2;
// }
// console.log(numberAdder(squarednumber(4),10))//26

// //34:17

// let myNumber = 100;
// let myString = "Eu sou uma string"

// function add20(num){
// 	return num + 20
// }
// function addHello(string){
// 	return "Ola" + "" + string;
// }

// console.log(add20(myNumber));//120
// console.log(addHello(myString));


// //36:35
// const myInfo = {name: "Janderson",age:25};

// function chageAgeTo100(myObj){
// 	myObj.age = 100;
// }
// console.log(myInfo); //25
// chageAgeTo100(myInfo);
// console.log(myInfo);//100

// const myNumbers=[1,2,3,4];

// function addToArray(myArr){
// 	myArr.push(6);
// }
// console.log(myNumbers);
// addToArray(myNumbers);
// console.log(myNumbers);

// //Lecture: Nested Functions (Closures) aula 2

// function squareAndMultiply(num1,num2){

// 	let testLet = "I am a test";

// 	function squarer(X){
// 		console.log(testLet); //imprime
// 		return x*x;
// 	}
// 	function multiplyBy10(y){
// 		return y *10;
// 	}
// 	return squarer(num1) * multiplyBy10(num2);//squarer(num2);
// }

// console.log(squareAndMultiply(4,4));//640
//  const first = squareAndMultiply(4,4);
//  const second = squareAndMultiply(5,5);
//  const third = squareAndMultiply(4,200);

//  console.log(second);

// // funcoes aninhadas ok
// function personFormatter(firstName,lastName,age){

// 	function formatNames(arg1,arg2){
// 		return arg1 + " " + arg2;
// 	}
// 	function dataFormatter(fullName,num){
// 		const formattedData = {
// 			name : fullName,
// 			age : num,
// 		}
// 		return formattedData;
// 	}
// 	const formattedName = formatNames(firstName,lastName);
// 	//return formattedName;
// 	return dataFormatter (formattedName,age);
// }
// console.log(personFormatter("Janderson","Barbosa",25));

// funções formatnames e dataformatter fora do person funcionam no top  

// Concatenates strings to one string
// function formatNames(arg1,arg2){
// 		return arg1 + " " + arg2;
// 	}

// // Formats data into an object, with an age value
// function dataFormatter(fullName,num){
// 	const formattedData = {
// 		name : fullName,
// 		age : num,
// 		}
// 	return formattedData;
// }

// // Formats data into object by invoking other functions
// function personFormatter(firstName,lastName,age){

// 	const formattedName = formatNames(firstName,lastName);

// 	//return formattedName;
// 	//return dataFormatter (formattedName,age);
// 	const formattedData = dataformatter(formattedName,age);
// 	return formattedData;
// }
// console.log(personFormatter("Janderson","Barbosa",25));


//-----------------------------------
// LECTURE : Lecture: Advanced Functions // aula 05
//-----------------------------------

/* Arrow Functions*/

var sayHi = () => {
    console.log("Hi, I'm using an arrow function");

}

sayHi();


// const multiplier = function(num1, num2) => {
//     return num1 * num2;
// }

// console.log(multiplier(5, 10));

const users = [
    { name: "Chris", age: 20 },
    { name: "Janderson", age: 25 },
    { name: "Naiara", age: 24 }
];
///O método map() invoca a função callback passada por argumento para cada elemento do Array e devolve um novo Array como resultado.

const userNameList = users.map(function(user) {
    return user.name; // retorna somente o paramentro nome
});
console.log(userNameList);



function mapUserNames(myArr) {

    //O método map() invoca a função callback passada por argumento para cada elemento do Array e devolve um novo Array como resultado.
    const userNameList = myArr.map(function(user) {
        return user.name; // retorna somente o parâmetro nome
    });
    return userNameList;
}

function mapUserNames(myArr) {

    //O método map() invoca a função callback passada por argumento para cada elemento do Array e devolve um novo Array como resultado.
    const userNameList = myArr.map((user) => {
        return user.name; // retorna somente o parâmetro nome
    });
    return userNameList;
}

const mapUserNames = (myArr) => {

    //O método map() invoca a função callback passada por argumento para cada elemento do Array e devolve um novo Array como resultado.
    const userNameList = myArr.map((user) => {
        return user.name; // retorna somente o parâmetro nome
    });
    return userNameList;
}

const mapUserNames = (myArr) => myArr.map((user) => {

    return user.name;
});

const mapUserNames = (myarr) => myarr.map((user) =>
    user.name
);


const mapUserNames = (myArr) => myArr.map((user) => user.name);

const mapUserNames = (myArr) => myArr.map((user) => user.age);


console.log(mapUserNames(users));

/*----------------------9:40--------------------------------*/

// sem chaves não se coloca return 
const multiplier2 = (x, y) => x * y;

// com chaves  coloca return 
const multiplier3 = (x, y) => { return x * y; };

// com paratenses
const squarer = (num) => num * num;
// sem chaves e sem paratenses
const squarer2 = num => num * num;

const sayHi = () => {
    console.log("Say hi");
}

console.log(multiplier2(2, 3)); //imprime ok
sayHi();
//--------------------------------------------------------------

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const filteredNumbers = numbers.filter(function(num) {
    return num === 5;
    return num % 2 === 0;
    return num % 2 !== 0;
});
//Outra forma sem  o return e sem chaves
const filteredNumbers2 = numbers.filter((num) =>
    num % 2 == 0
);


console.log(filteredNumbers);

const doubledNumbers = (num) => {
    const numberContainer = [];
    num.forEach((n) => {
        const doubled = n * 2;
        numberContainer.push(doubled);
    });
    return numberContainer;
}

console.log(doubledNumbers(numbers));

//---------25:00------------//

function numberMultplier(x, y) {
    return x * y
};
console.log(numberMultplier(5)); //retorna NAN


function numberMultplier(x, y) {

    x = x || 5;

    y = y || 50;

    return x * y
};
console.log(numberMultplier()); // vazio retorna 50 com valores retorna result com valores


function numberMultplier(x = 5, y = 10) {
    // caso o valor não for definido na chamada da função
    // então sera os valores que estao no parametro
    //caso console.log(numberMultiplier()) retorna 5 *10
    return x * y
};
console.log(numberMultplier(3, 6)) // retorna 3*6



function stringSplitter(str) {

    return str.split("");
    // O método split() divide uma string em um array de strings de acordo com algum separador; 
    //por exemplo, o espaço em branco neste caso.
}

console.log(stringSplitter("Hi, there"));
// retorna ["Hi", "there"]
// separa os espaços e valores de array



function stringSplitter(str = "How are you") {

    return str.split("");
    // O método split() divide uma string em um array de strings de acordo com algum separador; 
    //por exemplo, o espaço em branco neste caso.
}

console.log(stringSplitter());
// retorna ["How", "are","you"]

const initialString = "HOW ARE YOU?"


function stringSplitter(str = initialStrings) {

    return str.split("");
    // O método split() divide uma string em um array de strings de acordo com algum separador; 
    //por exemplo, o espaço em branco neste caso.
}

console.log(stringSplitter());
// retorna ["How", "are","you"]


const bankAccount = {
    canSpendMoney: true,
    hasCreditCard: true,
    balance: 100
}

function canPurchaseItem(price, acct = bankAccount) {

    if (acct.canSpendMoney) {
        acct.balance -= price;
        if (acct.balance <= 0) {
            acct.canSpendMoney = false;
        }
        return true;
    } else {
        return false;
    }


}

function logAllArguments(x, y, z) {
    console.log(arguments); //   no caso imprime todos
    console.log(arguments[0]); // no caso imprime 4 ou primeiro valor de objeto
    // body...
}
logAllArguments(4, 5, 6) // cria objeto com esses valores


function logAllArguments(x) {

    console.log(x);

}
logAllArguments(4, 5, 6) // imprime apenas o primeiro


function logAllArguments(z) {
    // body...
    const args = Array.prototype.slice.call(arguments, logAllArguments.length);
    console.log(args);

}
logAllArguments(1, 2, 3, 4, 5, 6);

function multiply(multiplier, ...nums) {
    return nums.map((n) => multiplier * n)
        // body...
}
console.log(multiply(10, 5, 2, 3));

//funciona com construtor
function Dog(years, breed) {
    this.age = years;
    this.type = breed;
}

// cria objetos conforme função acima
const spike = new Dog(3, "Golden Retriever");
const fido = new Dog(5, "Poodle");
console.log(spike);
console.log(fido);

function Dog(years, breed) {
    const that = this;
    that.age = years;
    that.type = breed;

    setInterval(function() {
            that.age += 1;
            console.log(that);
        }, 1000)
        // body...
}
/*A instrução acima indica que a cada segundo a função " será executada.*/
function Dog(years, breed) {

    this.age = years;
    this.type = breed;
    /*O setInterval serve para executar uma função ou instrução várias vezes em um determinado intervalo de tempo.*/
    setInterval(function() {
            this.age += 1;
            console.log(this);
        }, 5000 /*valor em milesimos*/ )
        // esse vai dar erro por que tem a palavra function
}

function Dog(years, breed) {

    this.age = years;
    this.type = breed;
    /*O setInterval serve para executar uma função ou instrução várias vezes em um determinado intervalo de tempo.*/
    setInterval(() => {
            this.age += 1;
            console.log(this);
        }, 5000 /*valor em milesimos*/ )
        // body...
}
const fido2 = new Dog(5, "Poodle");
const spike2 = new Dog(3, "Golden Retriever");