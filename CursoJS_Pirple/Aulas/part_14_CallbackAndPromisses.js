
 /*
		Links:

		Callback
		https://developer.mozilla.org/pt-BR/docs/Glossary/Callback_function

		Promisses
		https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Promise


 */



//---------------------------------------
//Aula 01 Lecture: Callbacks
//---------------------------------------


//Callback:

/*

- A callback function is a function that is 
  passed to another function as a paramater

- This inner function is called at some point during
  the execution of the containing function

- In other words, it's "called back" at some specified
  point inside the containing function's body
*/


function shouldGoFirst(callback){
	setTimeout(()=>{
		console.log("I should always go first");
		callback();
	},1000);
}

function shouldGoSecond(){
	console.log("I should always go second");
}

shouldGoFirst(shouldGoSecond);




function sumUpNumbers(num1,num2,cb){
	const summedvalue = num1 + num2;
	cb(summedvalue);
}

function logSummedValue(val){
	console.log(`The summed total is ${val}`);
}

sumUpNumbers(100,150,logSummedValue);


//Calback function

function sayWhenDone(){
	console.log("Done !!")	;
}


// Parent Function

function looper(number, cb){

	for(let i=0; i< number; i+=1){
		console.log(i);
	}
	cb();
}

looper(6,sayWhenDone);

//-------------------------------

//Calback function

function sayWhenDone2(loopCount){
	console.log(`Done Capitalized ${loopCount} times`);
}


// Parent Function

function looper2(arr, cb){
	let i = 0;
	for(i; i < arr.length; i+=1){
		const name = arr[i];
		const capitalizedName = name.charAt(0).toUpperCase() + name.slice(1);
		arr[i] = capitalizedName;
	}
	cb(i);
}

const myNames = ["janderson","jane","Angela"];

looper2(myNames,sayWhenDone2);
console.log(myNames);



function anotherLogger(num1,num2,cb){

	const squaredAndSummedNums = (num1 * num1) + (num2 * num2 );
	console.log(squaredAndSummedNums);
	cb();
}

anotherLogger(10,50,function(){
	console.log("Hey");
});


function anotherLogger2(num1,num2,somethingElse){

	const squaredAndSummedNums = (num1 * num1) + (num2 * num2 );
	console.log(squaredAndSummedNums);
	if(somethingElse && typeof(somethingElse)==="function"){
		somethingElse(squaredAndSummedNums);
	}
}



anotherLogger2(10,50,function(p){
	console.log(`Squared and summed ${p}`);
	console.log("Hey");
});
//----------------------------------

// const myDiv = document.getElementById("main");
// const myButton = myDiv.querySelector("button");
// const fakeData ={
// 	text:"texto de teste"
// };

// const myPara = document.getElementById("content");

// myButton.addEventListener("click",function(){
// 	requestData(populateDOM);
// });

// function requestData(cb){
// 	let data = "loading.....";
// 	cb(data);
// 	setTimeout(() =>{
// 		//Response from server;
// 		const data = fakeData.text;
// 		cb(data);
// 	},2000);
// }	


// function populateDOM(data){
// 	myDiv.innerHTML +=`<p>${data}</p>`;
// 	myPara.innerText = data;
// }

// function counter(){
// 	setTimeout(()=>{
// 		console.log("First");
// 		setTimeout(()=>{
// 			console.log("Second");
// 			setTimeout(()=>{
// 				console.log("Third");
// 				setTimeout(()=>{
// 					console.log("Fourth");
// 				},400);
// 			},600);
// 		},800);
// 	},1000);
// }

// counter();

//---------------

function numCruncher1(num,cb){
	const newNum = num*num;
	cb(newNum);

}

function numCruncher2(num,cb){
	const anotherNewNum = num/100;
	cb(anotherNewNum);
}

function totalSum(a,b,cb) {
	cb(a+b);
}

function crunchNumbers(a,b,cb1,cb2,cb3){

	cb1(a,function(x){
		cb2(b,function(y){
			cb3(x,y,function(result){
				console.log(result);
			});
		});
	});
}

crunchNumbers(5,10,numCruncher1,numCruncher2,totalSum);



//---------------------------------------
//Aula 02 Lecture: Promisses
//---------------------------------------

/*
	-Promise é um objeto usado para processamento assíncrono.
		Um Promise (de "promessa") representa um valor que pode estar disponível agora, 
		no futuro ou nunca.
	-Um Promise está em um destes estados: 
		pending (pendente): Estado inicial, que não foi realizada nem rejeitada.
		fulfilled (realizada): sucesso na operação.
		rejected (rejeitado):  falha na operação.

	- Can associate a handler with an async action
	
*/


const testPromise = new Promise((resolve, reject)=>{
		if(Math.random() >0.5){
			reject("Promise no good! rejected");
		}
		setTimeout(()=>{
			resolve("Promise Ok");
		},1000);
});

testPromise.then((resolveMessage)=>{
	console.log(`Look Likes :${resolveMessage}`);
}).then(()=>{
	console.log("I should run after the Promise is resolved");
}).then(()=>{
	console.log("Promises are awesome");
}).catch((rejectMessage)=>{
	console.log(`Error : ${rejectMessage}`);
});


function numAdder(n1,n2){

	return new Promise((resolve,reject)=>{
		 const addedNums = n1+n2;
		 //reject("not today"); não passa do reject
		 setTimeout(()=>{
		 	resolve(addedNums);
		 },500);
	});
}

function numSquarer(num){
	return new Promise((resolve,reject)=>{
		if(Math.random() > 0.5){
			reject("Nope");
		}
		setTimeout(()=>{
			resolve(num*num);
		},800);
	});
}


numAdder(100,23).then((data)=> console.log(`Added total : ${data}`));

numAdder(10,10)
	.then((data)=> numSquarer(data))
	//.then((data)=>{return numSquarer(data);})
	.then((moredata)=> console.log(moredata))
	//.then((moredata)=>{console.log(moredata)});
	.catch(err => console.log(err));


//----------18:45---------------------//

Promise.resolve("a string")
	.then((data)=> console.log(data));


function alwaysResolves(){
	return Promise.resolve("I love resolving :D");
}

alwaysResolves().then(data=> console.log(data));

const prom = Promise.resolve([10,20,30]);
prom
	.then(nums => nums.map(num => num * 10))
	.then(transformedNums => console.log(transformedNums));


const anotherProm = Promise.resolve({text:"resolved:D"});

anotherProm.then(data => console.log(data.text))



//-------------23:00--------------------//

Promise.reject()
	.then(()=> console.log("ok"))
	.catch(()=> console.log("caught reject promise"))


Promise.reject()
	.then(
		res =>{
			console.log("not reject");
		},
		err =>{
			console.log("rejected"); // printa aqui
		}
	).catch(data => console.log(data));



	Promise.resolve()
	.then(
		res =>{
			return Promise.reject("rejected inner promise");// printa aqui
		},
		err =>{
			console.log("rejected"); 
		}
	).catch(data => console.log(data));

//--------------------------------------------------


Promise.resolve()
	.then(
		res =>{
			return Promise.reject();// printa aqui
		},
		err =>{
			console.log("rejected"); 
		}
	).then(
		res =>{
			console.log("cool");
		},
		err =>{
			console.log("Inner promise rejected"); // printa aqui
		}
	).catch(data=> console.log(data));


//--------------------29:00-------------------------//

function timeLogger(message,time){
	return new Promise((resolve,reject)=>{
		setTimeout(()=>{
			resolve(message);
		},time);
		if(typeof message !== "string"|| typeof time !== "number"){
			reject();
		}
	});
}


timeLogger("first",1000)
	.then(message => console.log(message))
	.catch(err=> console.log(err));


timeLogger("first",1000)
	.then(message => {
		console.log(message)
		return timeLogger("second",800);
	}).then(message =>{
		console.log(message);
		return timeLogger("third",100);
	}).then(message =>{
		console.log(message);
		return timeLogger("fourth",300);
	}).then(message =>{
		console.log(message);
	}).catch(err=> console.log("Incorrect input"));

//-----------------35:00---------------------------------


Promise.resolve("Hi 1")
	.then(string => {
		//Effectively same as saying return Promise.resolve(...)
		return string + " there";
	}).then(string =>{
		console.log(string);
	})


Promise.resolve("Hi 2")
	.then(string => {
		//Effectively same as saying return Promise.resolve(...)
			return Promise.resolve(string + " there");
		}).then(string =>{
		console.log(string);
	})


Promise.resolve("Hi 3")
	.then(string => {
		//Effectively same as saying return Promise.resolve(...)
		  return new Promise((resolve,reject)=>{
		  		  setTimeout(()=>{
		  	resolve(string+ " there");
		  },1);
		 });
	}).then(string=>{
			setTimeout(()=>{
				string += "Chris"
			},1);
			return string;
	})
	.then(string =>{
		console.log(string);
})



Promise.resolve("Hi 4")
	.then(string => {
		//Effectively same as saying return Promise.resolve(...)
		  return new Promise((resolve,reject)=>{
		  		  setTimeout(()=>{
		  	resolve(string + " there");
		  },1);
		 });
	}).then(string=>{
		  return new Promise((resolve,reject)=>{
		  	setTimeout(()=>{
		  		resolve(string + "Chris");
		  	},1);
		  });
	})
	.then(string =>{
		console.log(string);
});

//---------------42:35-------------------

//const p1 = Promise.resolve("A");

const p1 = new Promise((resolve,reject)=>{
	setTimeout(()=>{
		resolve("A");
	},2000)
})
const p2 = Promise.resolve("B");

const p3 = Promise.resolve("C");

Promise.all([p1,p2,p3])
	.then(data => console.log(data)) // ["A" ,"B","C"]
	.catch(err => console.log(err));


//---------------------------------------


const userName= new Promise((resolve,reject)=>{
	setTimeout(()=>{
		resolve({text:"Janderson Shady"});
	},1000)
});

const userName2 = new Promise((resolve,reject)=>{
	setTimeout(()=>{
		reject({text:"Erro Janderson Shady"});
	},1000)
});


const position = new Promise((resolve,reject)=>{
	setTimeout(()=>{
		resolve({text:"Programador"})
	},300);
});

const employees ={

}


Promise.all([userName,position])
	.then(data => console.log(data)) 
	.catch(err => console.log(err));



Promise.all([userName,position])
	.then(data => data.map(entry => entry.text)) 
	.then(content => employees[0]= content)
	.catch(err => console.log(err));

console.log(employees);


//-------------48:50--------------------

//Imprime o que tiver menos tempo de timeout no caso position que tem 300
Promise.race([userName2,userName,position])
	.then(data => console.log(data.text))
	.catch(err => console(err.text))