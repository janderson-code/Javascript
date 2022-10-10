//---------------------------------------
//Aula 01 Lecture: Introduction to OOP
//---------------------------------------

/* Links:

http://webacademico.canoas.ifrs.edu.br/~rcpinto/IFRS/php/JS-4-OO/js-oo.html

https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects




*/

/*
 - OOP : basic idea is that you use objects to represent 
 real world things.Objects have own properties and function
 (methods)

 - Objects can contain data and other code to represet info
 about what you're trying to model

 - Data /methods inside the object is encapsuled
 - In classic OOP, class is defined then when an instane of 
 that class is created, all the properties and methods are
 copied(!!!) over to the instance

 - Javascript is dynamic and does not provide a tradional
   class implementation per se.

 - JavaScript inheritance is prototype based 
 - Each object has a private property called the prototype
 - The prototype can have a prototype of its own 
 - Nearly all objects in JavaScript are instances of object
   which sits on top of the prototype chain.
 - The prototype property's value in an object
 - Think of it as a bucket to store properties and methods
 - Prototype as a template and can have prototype properties of its own
 - "The prototype property is where inherited members are defined"



*/

//Pretend this is a class:
function Ship(){
	this.floats = true;
	this.material = "steel";
	this.whatAmI = function(){
		console.log("I am made of: " + this.material);
	}
}

const myShip = new Ship();

myShip.whatAmI();

const myObj = 
{
	a:1,
	b:2
}

console.log(myObj.valueOf());
//Does myObj have a method  called valueOf()?
//NO
//Does Object prototype have a method called valueOf()?
//YES
// myObj > Object



const myString = "hello";
console.log(myString.charAt(0)); // print h
//Does myString have a method  called charAt()?
//NO
//Does String prototype have a method called valueOf()?
//YES
// myString > String 

console.log(myString.valueOf());
//Does myString have a method  called valueOf()?
//NO
//Does String prototype have a method called valueOf()?
//NO
//Does Object prototype have a method called valueOf()?
//YES
// myString > String > Object


const name1 ={
	name:"janderson",
	age:20,
	sayName:function(){
		console.log(`My name is ${this.name}`);
	}
}

const name2 = Object.create(name1);
name2.name = "Jane Doe";

const name3 = Object.create(name2);
name3.sayName();

console.log(name2.hasOwnProperty("age"));//false
//alterado na linha 100 então fica true
console.log(name2.hasOwnProperty("name"));//true



// //Apostila k19
// var curso = {
// 	sigla:"KK",
// 	curso:"Programação"
// }
// var obj = Object.create(curso);

// obj.sigla = "ggg"
// curso.sigla = "jjj";
// obj.versao ="prime";

// console.log(obj.sigla);
// console.log(obj.versao); // Undefined
// //Apostila k19


//---------------------------------------
//Aula 02 Lecture: Object Constructors
//---------------------------------------

function Animal(name,age,breed){
	const obj = {};
	obj.name = name;
	obj.age = age;
	obj.breed = breed;
	// this.sayBreed = function(){
	// 	console.log(`My breed is : ${this.breed}`);
	// }

	// return obj
	
}

//Verificar console estara uma camada de prototype 
// e qualquer objeto criado pelo prototipo animal
// vai herdar função sayBreed

Animal.prototype.sayBreed = function () {
	console.log(`My breed is : ${this.breed}`);
}


const dog1 = new Animal("Spike",3,"Labrador");
/*dog1 inherits from prototype Animal,which inherits 
/from prototype Objects*/

const dog2 = new Animal("Spot",2,"Golden Retriever");
console.log(dog1.name);
console.log(Animal.hasOwnProperty("sayBreed"));//false
console.log(Animal.prototype.hasOwnProperty("sayBreed"));//true




// Criando um prototipo direto do Object

Object.prototype.sayHello = function(){
	console.log("Hello");
}

//qualquer objeto criado vai herdar a função acima

const abc = {};
abc.sayHello();


//---------------------------------------
//Aula 03 Lecture: Object Inheritance
//---------------------------------------

//Função construtora de objeto Pai
function Animal2(name,age){
	this.name = name;
	this.age = age;
	
}


Animal2.prototype.makeNoise = function(){
	console.log(`generic animal noise`);
}




function Dog(name, age,breed){
	Animal2.call(this,name,age);
	this.breed = breed;
}

//Dessa forma conseguimos pegar o método makeNoise
Dog.prototype = Object.create(Animal2.prototype);
Dog.prototype.constructor = Dog;


Dog.prototype.makeNoise = function(){
	console.log("bark bark woof");
}

const barky = new Dog("Barky",1,"Chihuahua");

barky.makeNoise(); // printa "bark bark woof"




function Cat(name,age,coloration){
	Animal2.call(this,name,age);
	this.coloration = coloration;
}

Cat.prototype = Object.create(Animal2.prototype);
Cat.prototype.constructor = Cat;
Cat.prototype.scrathPost = function(){
	console.log("Cat hat scratched  the post");

}

const kitty = new Cat("kitty",1,"tabby");
kitty.makeNoise();
kitty.scrathPost();
console.log(kitty instanceof Cat); // true;



function Kitten(name,age,coloration,litter){
	Cat.call(this,name,age,coloration);
	this.litter = litter;
}

Kitten.prototype = Object.create(Cat.prototype);
Kitten.prototype.constructor = Kitten;

const tinyKitty = new Kitten("Spot",0,"Orange",1);

console.log(tinyKitty.coloration);
console.log(tinyKitty instanceof Kitten);//true
console.log(tinyKitty instanceof Cat);//true
console.log(tinyKitty instanceof Animal2);//true



// Usando SetProtype of em vez do ObjectCreate
//Herança por Delegação

var obj1 = {a:1,b:2};
var obj2 = {};
var obj3 = {c:30,d:40};
Object.setPrototypeOf(obj3,obj2);// obj 2 proto de 3
Object.setPrototypeOf(obj2,obj1);// obj 1 prto de 2
console.log(obj3,obj2.a,obj1);
console.log(obj3.a);

//Herança por Concatenação com Construtores


function MeuObj1(){
	this.a = 10;
	this.b = 20;
}


function MeuObj2(){
	MeuObj.call(this);//
	this.c = 30;
	this.d = 40;
}

//Herança por delegação com construtores
//Função Construtora Não é objeto e o prototipo é vazio
function MeuObj3(){
	this.a = 10;
	this.b = 20;
}


function MeuObj4(){
	this.c = 30;
	this.d = 40;
}

//Definindo prototipo da função MeuObj
//o prototipo dele será um objeto criado pelo construtor Meuobj
MeuObj3.prototype = new MeuObj3();

//O prototipo de Meuobj4 é o prototipo do Meuobj3
Object.setPrototypeOf(MeuObj4.prototype,MeuObj3.prototype);

