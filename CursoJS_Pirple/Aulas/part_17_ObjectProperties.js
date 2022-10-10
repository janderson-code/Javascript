//Lecture: Object Property Shorthands


const a = 10;
const b = 20;
const c = 30;
const d = {
	a:a,
	b:b,
	c:c,
}

console.log(d.a); // printa 10

const e ={
	a,
	b,
	c,
}



console.log(e.c); // Printa 30


const{b:anotherB} = e;
console.log(anotherB); // printa 20



const f ={
	a,
	bee:b,
	c,
}

const {bee} = f;
console.log(bee); // printa 20



function objectBuilder(x,y,z,numTimes){
	const allObjects = [];
	for(let i = 0;i< numTimes;i += 1){
		const newObj ={
			x:i+1,
			y,
			z
		}
		allObjects.push(newObj);

	}
	return allObjects;
}

const bob = objectBuilder(10,"Bob",false,10);
const{x:bobId} = bob[0];
console.log(bobId);

console.log(objectBuilder(10,"Bob",false,10));


//Lecture: Computed Property Keys

/* allows user of [] which will 
   evaluate(a.k.a compute) as the property name*/

 let myID = 1;
 const idParam = "userId";
 const computedObj = {
 	[myID]:"10003",
 	[idParam + myID]:"5555",
 	[idParam + (myID += 1)]:"6666",
 	[idParam + ++myID]:"7777",
 	[idParam + ++myID]:"8888",
 	["param" + "eter"+10]:false

 }

 console.log(computedObj.myID); //undefined
 console.log(computedObj); //Imprime => { '0': '10003', userId0: '5555' }

 
 function capitalizer(word){
 	const a = word.charAt(0).toUpperCase();
 	const b = word.slice(1).toLowerCase();
 	return a + b;
 }

 const obj111 = {
 	[capitalizer("hello")]:"Something",
 	[capitalizer("ALLCAPS")]:"fuck"
 }

 console.log(obj111);


 function dataFormat(arr){
 	return arr.map(n =>{
 		return{
 			["userId" + n.x]:n, 	
 		}
 	});
 }

  function dataFormat2(arr){
 	const formattedObj = {};
 	for(const prop of arr){
 		formattedObj["userID" + prop.x] = prop;

 	}
 	return formattedObj;
 }



 console.log(dataFormat(bob));
 console.log(dataFormat2(bob));