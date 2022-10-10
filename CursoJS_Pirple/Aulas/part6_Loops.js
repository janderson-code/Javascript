//Loops
//Quick and easy way to do something repeatedly

//while loop

let numberOfLoops = 0;

while(numberOfLoops < 10){
	console.log("I am Looping");
	numberOfLoops+=1;
}

let num1 = 0;
let num2 = 0;

while(num < 100){
	num1 += 5;
	num2 += num1;
	loopDeLoop();

}

function loopDeLoop(){
	console.log("I am Looping");
} 

const names =["Chris","Bob","Joe"];
console.log(names[2]);

while(true){

  let index = 0;

  if (names[index]=== "Joe") {
  	console.log(names[index]);
  	break;
  }
  index+=1;
}

function nameLooper(arr){
	let index = 0;
	while(index < arr.length){
		if (arr[index]==="Crhis") {
			console.log(arr[index]);
			break;
		}
		index+=1;
	}
}

nameLooper(names);

// Do while

let shoudRunOnlyOnce = false;

do {
	console.log("Looping");
	shoudRunOnlyOnce = false;

}while(shoudRunOnlyOnce);


	// FOR IN LOOP

	const users = {
		1:"Sally",
		2:"Billy",
		3:"Ashley",
		4:"Timmy"
	};

//Imprime as keys 1 a 5 do objeto users
	for(let prop in users){
		console.log(prop);
	}

//Imprime valores do objeto users
	for (let prop in users){
		console.log(users[prop]);
	}

	//Substitui os 5 valores por Janderson do objeto users
	for (let prop in users){
		let newUser = users[prop];
		newUser = "Janderson";
		console.log(newUser);
	}

	//Troca o valor Sally por zé do objeto users
	for (let prop in users){
		if(users[prop] === "Sally"){
			users[prop] ==="Zé";
			}
		console.log(users[prop])
	}	

//------------------------------------------------
	const drinks = ["coffe","sprite","tea","coke","pepsi"];

 // Imprime os index 0 a 4 da variavel array drinks
	for (let d in drinks){
		console.log(d);
	}

	//Imprime os valores do variavel array drinks

	for (let d in drinks){
		console.log(drinks[d]);
	}

	//Imprime os valores do variavel array drinks forma 1
	drinks.forEach(function(d){
		console.log(d);
	});

//Imprime os valores do variavel array drinks forma 2 
	drinks.forEach((d)=>{
		console.log(d);
	});

// ao encontrar o valor janderso ele para o loop
	for(let d in drinks){
		if(drinks[d] === "Janderson"){
			break;
		}
		console.log(drinks[d]);
	}

	// imprimindo o que ante e tem depois diferente de Janderson

	for(let d in drinks){
		if(drinks[d] === "Janderson"){
			continue;
		}
		console.log(drinks[d]);
	}

//------------------------------------------------

const drinks = ["coffe","sprite","tea","coke","pepsi"];

//Imprime os valores não o index
for(const d of drinks){
	console.log(d);
}
// Imprimi os valores até encontrar o valor tea printa coffe e sprite)
for(const d of drinks){
	if(d ==="tea"){
		break;
	}
	console.log(d);
}
//---------------------------------

const myString = "HELLO";
//Imprime cada caractere da string 
for(const letra of myString){
		console.log(letra);
}

//---------------
//Imprime cada valor do array + 10
 const originalArray=[10,15,20,25,30];

 for (let num of originalArray) {
 			num += 10;
 			console.log(num);
 }

 //versão com function

 function Incremento(arr,numToInc) {
 		for (let num of arr) {
 			num += numToInc;
 			console.log(num);
	  }
 }

 Incremento(originalArray,10);
 //-------------------------------

const originalArray2 = ["JB","JB","Yuna","Yuna"];

const UniqueSetName = new Set(originalArray2);

//Imprime todos valoresd do array
for (const n of originalArray2){
		console.log(n);
}


//Imprime e descarta valores duplicados de um array
for (const n of uniqueSetName){
		console.log(n);
}

