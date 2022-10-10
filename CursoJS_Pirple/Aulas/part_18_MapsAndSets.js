//Map Object

/*
 - Used for simple key/value pairs
 - Any value can be used for either a key or value
   (i.e object , string, function)
 - Reasons for using Map over Object:
   -- Object prototyṕe has default keys that might conflict with
   own keys
   -- Keys of map can be anything, where as with objects,have to be
   string of symbol
   -- Can  easily get the size of Map 
*/


const myMap = new Map();
const firstKey = "FirstKey :D";
const firstVal = "First Value :D";
const secondKey = {};
const thirdKey = function(){}


//myMap.set("Key","value");
myMap.set(firstKey,firstVal);
console.log(myMap.get(firstKey)); //"First Value"


myMap.set("AnotherKey","AnotherValue");
console.log(myMap.get("AnotherKey"));//AnotherValue


myMap.set("AnotherKey2","AnotherValue2");
console.log(myMap.get("Janderson"));//Undefined
console.log(myMap.has("Janderson"));//false


myMap.set(secondKey,"AnotherValue3");
myMap.set(thirdKey,"AnotherValue4");


//myMap.clear();
console.log(myMap);
console.log("Map Size "+ myMap.size);

myMap.forEach((val)=> console.log(val));



// Iterating
// keys(),values, entries()


for(const key of myMap.keys()){
	console.log(`Key: ${key}`);
}

for(const value of myMap.values()){
	console.log(`Value : ${value}`);
}


for(const [key,value] of myMap.entries()){
	console.log(`Key: ${key} => Value : ${value}`);
}




const myMapData = [["keyA","Value one",],["keyB","Value two"]];
const anotherMap = new Map(myMapData);

const anotherMap2 = new Map([
	["entry1","Value1"],
	["entry2","value2"],
]);

console.log(anotherMap);
console.log(anotherMap2);

//-----------------------------------

// Set Object

/*
	- Lets you store unique values of any type
	- Each Element is unique
	 Não printa nem seta valor duplicado
*/

const mySet = new Set();
const obj123 = {a:1,b:2}
const Obj456 = {x:1,y:2,z:3};
const myString = "Hello there :D";
const aBool = true;
mySet.add("Bob");
mySet.add(true);
mySet.add("Bob"); // Não printa nem seta valor duplicado


mySet.add(obj123);
mySet.add(Obj456);
mySet.add(myString);
mySet.add(aBool);
console.log(mySet);
console.log(mySet.size); //5

mySet.delete(obj123);

console.log("--forEach--");

mySet.forEach((s)=>{
	console.log(s);
});

mySet.forEach((s)=>{
	console.log(`Set item ${s}`);
});

mySet.forEach((s)=>{
	if (typeof s === "object") {
		console.log("Got object");
	}else{
		console.log(`Set item ${s}`);
	}
});


for(const val of mySet.values()){
	console.log(val);
}

for(const keys of mySet.keys()){
	console.log(keys);
}


for(const [keys,value] of mySet.entries()){
	console.log(`Key => ${keys} and values => ${value}`);
}



//Convert set to Array and vice versa

const arrFromSet = Array.from(mySet);
arrFromSet.push(myString);
console.log(arrFromSet);

const arrFromMap = Array.from(anotherMap2);
console.log(arrFromMap); // Line 78

const arrFromString = Array.from("Hello there");
console.log(arrFromString);


//Array to set

const myArr123 = [1,2,3,4,5];
const myArr456 = ["janderson",false,{a:3},4,5];
const myArr111 = [1,1,1,1,2];
const anotherSet = new Set(myArr123);
const anotherSet2 = new Set(myArr456);
const anotherSet3 = new Set(myArr111);
console.log(anotherSet);
console.log(anotherSet2);
console.log(anotherSet3);// Não printa nem seta valor duplicado
console.log(anotherSet3.has(41));//false

