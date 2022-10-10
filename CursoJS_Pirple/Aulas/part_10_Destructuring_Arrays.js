
/*/
LINKS

https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment

*/



//Destructuring

/*- "The Destructuring assignment syntax is a 
  	JavaScript expression that makes is possible
  	to extract data from arrays or objects into
  	distinct variables"
  - Desctructuring syntax can be used on left-hand
    side of assignments

 

 */

//---------------------------------------
//Aula 01 Lecture: Destructuring Arrays
//---------------------------------------

const myArray = [1,2,3,4,5];
const [x,y,z,a,b] = myArray;
console.log(x,y,z,a,b); // 1 2 3 4 5



const mySecondArray = ["Janderson","Naruto","Goku"] ;

let name1,name2,name3,name4;

[name1,name2,name3,name4="I'm a Default"] = mySecondArray;

console.log(name1,name2,name3,name4);


//Swap two variables
 let aa = 100;
 let bb = 250;
 let cc = 500;

 console.log(aa,bb,cc);

 [bb,cc] = [cc,bb];

 console.log(aa,bb,cc);


// use with functions

function returnArray(){
	return ["donuts","chocolate","candy","gummy bears"];

}

function foodFilter(arr,term){
	return arr.filter((t)=> t === term);

}

const [donuts,chocolate,candy,gummybears]= returnArray();
console.log(chocolate);


const[result] = foodFilter(["chicken","fish","tofu"],"chicken");
const[result2] = foodFilter(["pizza","fish","tofu"],"pizza");
console.log(result);


//Can ignore some values

const anotherArr = [10,20,50,100,1000,30];
const [numA,numB, ,numC, ,NumD] = anotherArr;
console.log(`First :${numA},second:${numB},third:${numC},fourth:${NumD}`)

//Can use rest pattern

function sayHi(first,...rest){

	console.log(`Hi ${first}`);
	console.log(rest);
}

sayHi("Chris",30,"Fuck");

const yetAnotherArr = ["dogs","cats","birds","snakes","lyon"];
const [dog,cat,...otherAnimals] = yetAnotherArr;

console.log(dog);
console.log(cat);
console.log(otherAnimals);

console.log(otherAnimals.filter((t)=>{
	return t === "snakes";
}));



//---------------------------------------
//Aula 02 Lecture: Destructuring Objects
//---------------------------------------


const myObj = {firstName:"Janderson",lastName:"Barbosa",age:16, height:"6ft"};

//const{ firstName,lastName,age,height} = myObj;

//Retirando um mesmo assim funciona no console.log
//Trocando ordem funciona tbm, tem que ter o mesmo nome
const{lastName,age,height,firstName} = myObj;

console.log(firstName,lastName,age,height);

console.log(age,height);


console.log(firstName,age,height,lastName); //também funciona

//------------/



let myVar1,myVar2;

const myObj2 = {myVar1:"a",myVar2:"b"};

/*Os parênteses ( ... ) ao redor da declaração 
de atribuição é uma sintaxe necessária  
quando se utiliza a atribuição via 
desestruturação de objeto literal sem uma declaração.*/

({myVar1,myVar2} = myObj2); //******

console.log(myVar1,myVar2);


//------------/

//---Assigning new variable names
const myObj3 = {a:"cool",b:"yeah",c:"nice",d:"awesome fuck"};
const{a:cool,b:yeah,c:nice,d:awesome}= myObj3;
console.log(awesome);


const myObj4={uuid:1234,userName:"jjj",log: new Date()};
const{uuid:userID,userName:name,log:lastLog} = myObj4;
console.log(name + lastLog);



//---DEFAULTS

//--se tirar o e1 imprime 50
const myObj5 = {a1:10,b1:20,c1:30,d1:40,e1:100};
const {a1,b1,c1,d1,e1 = 50} = myObj5; 
console.log(e1); // Imprime 100



function stateUser({user="Bob",memberType}){
	console.log(`Username: ${user}, member:${memberType}`);
}

stateUser({memberType :"Free"}); // Imprime bob no user
stateUser({user:"Steve", memberType:"premium"});



function stateUser2(obj){
	const {user = "Bob",memberType} = obj
	console.log(`Username: ${user}, member:${memberType}`);
}

stateUser2({memberType:"Plus"});

const member1  = {user:"Steve",memberType:"premium"};
const member2 = {user:"Jane Doe",memberType:"free"}
const member3 = {memberType:"Black"};
stateUser2(member2);
stateUser2(member3);


function stateUser3(obj){
	const {user = null,memberType} = obj

	if (!user) {
		console.log("Error ! No user name");
	}else{
		
		console.log(`Username: ${user}, member:${memberType}`);
	}
	
}

stateUser3(member3);

//-------------------

function sayIfValid({prop:s}){
	console.log(s);
}


function sayIfValid2({prop, a111}){
	console.log(prop,a111);
}

// Constroi e imprime objeto ver no console.log
function sayIfValid3({prop,a111}){
	const internalObj = {
		prop: prop,
		a111:a111,
		constructed : true
	}
	return internalObj
}

// Apenas a chave,mesmo restul de cima, também funciona
function sayIfValid4({prop,a111}){
	const internalObj = {
		prop,
		a111,
		constructed : true
	}
	return internalObj
}

// Mudando o nome da chave ,mesmo result de cima, também funciona
function sayIfValid5({prop,a111}){
	const internalObj = {
		newKey: prop,
		newKey2:a111,
		constructed : true
	}
	return internalObj
}

const myObj6 = {
	prop :"I'm valid",
	proop:"I'm not Valid",
	a111:"I'm also not Valid"
}

sayIfValid(myObj6); // Imprime "I m valid"
sayIfValid2(myObj6); // imprime "I'm valid" I'm also not Valid"
console.log(sayIfValid3(myObj6));
console.log(sayIfValid4(myObj6));
console.log(sayIfValid5(myObj6));


const myContructedObj = sayIfValid5(myObj4);
const{constructed} = myContructedObj;

const myObj7 = {
	title:"My address book",
	entries:[
		{
			name:"Bob",
			number:"555-555",
			address:"123 Fake street",
			other:{
				cell:"555-333",
				email:"bob@gmail.com"
			}
		},

		{
			name:"Janderson",
			number:"666-666",
			address:"Brazil",
			other:{
				cell:"666-333",
				email:"janderson@gmail.com"
			}
		},

		{
			name:"Naiara",
			number:"777-777",
			address:"Bahia",
			other:{
				cell:"5777-333",
				email:"Naiara@gmail.com"
			}

		}

	],
	myphone: "666-111"
}

// Extraindo o valor do objeto dentro do key array
// const {title,entries:[{address}]} = myObj7;
// console.log(address);



// const {title,entries:[{name:nnn}]} = myObj7;
// console.log(nnn); // Imprime Bob


// const {title,entries:[{name:nnn,address}]} = myObj7;
// console.log(nnn,address);

// Percorrendo os objetos de mesmo key do array com valor obj com mesmo key
const {title,entries} = myObj7;

for (const{name,address} of entries) {
	console.log(`Name:${name}, address:${address} `);
}

for (const{name:n,address:a} of entries) {
	console.log(`Name1:${n}, address:${a} `);
}

for (const{name,address,other:{cell}} of entries) {
	console.log(`Name2:${name}, address:${address},cell:${cell}`);
}



const myObj8 = {
	myprop1:"Ahh",
	myprop2:[20,50]
}

const {myprop1,myprop2:[xx,yy]} = myObj8;
console.log(xx,yy) // Imprime 20 ,50

// const {myprop1,myprop2:[,,yy]} = myObj8;
// console.log(yy); // imprime 50






