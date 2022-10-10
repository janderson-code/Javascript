
// SITE
// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Operators/Spread_syntax


// Spread Syntax

/*
	Can be used in places where (e.g) functions
	expect multiple arguments,multiple elements,or 
	multuple variables

*/

function myFunction(x, y, z) { }
var args = [0, 1, 2];
myFunction.apply(null, args);

//Com a sintaxe de espalhamento, o código acima pode ser escrito assim:

function myFunction(x, y, z) { }
var args = [0, 1, 2];
myFunction(...args);



function spreadFunction(...multipleArgs){

console.log(multipleArgs);

}

spreadFunction(1,2,3,4,5,"janderson"); //printa


const myArray = [1,2,3,4];
const mySecondArray = [6,7,8,9];
const myThirdArray = [...myArray,...mySecondArray];

console.log(myThirdArray);


function sayHello(x,y,z){
	console.log(`Hello ${x} , ${y},  ${z}`);

}

const helloArray = ["Bob","Peter","Janderson"];
sayHello(helloArray); // printa helloArray em string como primeiro index
sayHello.apply(null,helloArray); // printa apenas helloarray como unico item

// spread Sintax away:
// printa apenas helloarray como unico item
sayHello(...helloArray);




// const arr1 = [10,20,30];
// const arr2 = [40,50,60];
// arr1.push(arr2);
// console.log(arr1);
// arr1.push.apply(arr1,arr2);
// console.log(arr1);

const arr1 = [60,70,80];
const arr2 = [90,100,110];
arr1.push(...arr2);
// console.log(arr1);


//concat()

const myArr = ["Jelly beans"];
const myArr2 = ["donuts","chocolate"];
const myArr3 = ["pie","lemonade"];
const newMyArr = myArr.concat(myArr2,myArr3);
// console.log(newMyArr);

const newMyArr2 = [...myArr,...myArr2,...myArr3];



const listOfCarParts = ["gasket","tires","radiator","muffler"];
const listOfPartsToInsert = ["wipers","headlights"];


listOfCarParts.splice(0,1);
console.log(listOfCarParts);



function listInserter(arr1,arr2,index){
	const firstPartOfArray = arr1.slice(0,index);
	const secondPartOfArray = arr1.slice(index);
	//const assembledCar = firstPartOfArray.concat(arr2,secondPartOfArray);
	const assembledCar = [...firstPartOfArray,...arr2,...secondPartOfArray];
	console.log(assembledCar);
}

listInserter(listOfCarParts,listOfPartsToInsert,2);


const anotherArr =   [10,1203123,1203,1049];
const yetAnotherArr =[...anotherArr];
yetAnotherArr.push(10000);
console.log(anotherArr,yetAnotherArr);


// vs rest operator

function hasManyArgs(x,y,...restOfArgs){
	console.log(x,y);
	for(const prop of restOfArgs){
		console.log(prop +10);
	}
}

hasManyArgs("hi","hello",1,50,123,6452,1232,243);

//Method definitions
//Pre-ES6 in object literals, methods are defined as function expressions

const myObj ={
	id:10,
	sayHi: function(){
		console.log("hi");
	}
}

// Es6 has method definitions for creating methods

const myES6Obj = {
	id:11,
	sayHi(){
		console.log("Es6 is cool");
	},
	sayBye(){
		console.log("Bye now");
	}
}

myES6Obj.sayHi();
myES6Obj.sayBye();



const anotherObj = {
	greet(arg1){
		console.log(`Hey ${arg1}!`); // Hey Tim
	},
	anotherMethod(...args){
		this.greet(args[0]);
		console.log(`I have ${args.length} arguments`);
	}
}
 anotherObj.anotherMethod("Tim",1,false,true,[123],61);
