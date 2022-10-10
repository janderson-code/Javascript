//Events

/*

	- Any events tha takes place in the DOM
	- Can be user generated or by an API
	- Event contains properties and methods
	- addEventListener function takes in the event
	  to listen for, and a second argument to be
	  called whenever the described event fires
	- addEventListener("click,function()"){
		logic inside function
	})

*/

//---------------------------------------
//Aula 01 Lecture: Introduction to Events
//---------------------------------------

//Evento que gerar um pop up ao clicar numa pagina
//no caso o addEvent precisa de dois parametros um com evento e o outro com a function


document.addEventListener("click", function(){
	console.log("Clicado");
});

//Evento que gerar um alert dialog ao clicar numa pagina usando ID
const clickDiv = document.getElementById("clicky");

clickDiv.addEventListener("click",function(){
	alert("clicado!");
});

//Versão anterior Arrow function
clickDiv.addEventListener("click",()=> alert("clicked"));

//verificar Devtools  console
clickDiv.addEventListener("click",function(event){
	alert(event);
});

//verificar Devtools  console tipo do evento
clickDiv.addEventListener("click",function(event){
	alert(event.type);
});


// 9:00

//Evento que gerar um alert dialog ao clicar numa pagina usando ID
const clickableButton = clickDiv.querySelector("button");

// gerando alerta com info do typo do evento ao clicar no button 
clickableButton.addEventListener("click", function(){
	alert(event.type);
});

//Chamando esta function pelo onclick de um button no html
function handleClick(){
	alert("clicked");
}
// Gera o alerta quando o button esta com cursos em focus 
clickableButton.addEventListener("focus",function(event){
	console.log(event);
});
// Gera o alerta no console quando o button esta com cursos perde o focus
clickableButton.addEventListener("focusout",function(event){
	console.log(event.type);

});

// criando função
function logEvent(event){
	console.log(event.type);
}

function logEvent2(e){
	if (e.type ==="click"){
		console.log("click");
	}
	if (e.type ==="focus"){
		console.log("Focus");
	}
	else{
		return false;
	}
}

// Também funciona como variavel e arrow antes do addEvent

const logEvent3 = (e) =>{
	if (e.type ==="click"){
		console.log("click");
	}
	if (e.type ==="focus"){
		console.log("Focus");
	}
	else{
		return false;
	}

}



//Colocando função como parametro e chamando não precisa()
clickableButton.addEventListener("click",logEvent4);
// Gera o alerta quando o button esta com cursos em focus 
clickableButton.addEventListener("focus",logEvent2);
// Gera o alerta no console quando o button esta com cursos perde o focus
clickableButton.addEventListener("focusout",logEvent2);

///////////////////////////////////////////////////////

/*Chama o logEvent4 no primeiro click*/
clickableButton.addEventListener("click",logEvent4);


function logEvent4(e){
	//altera o nome do button plz no click
	clickableButton.innerText = "Plz no click";	
    //mostra no console devtools o typo click
	console.log(e.type);
	// remove o evento do tipo click do button
	clickableButton.removeEventListener("click",logEvent4);
	//Não mostra no console o event click apos clicar no button
	console.log(e.type);
}

function logEvent5(e){
	//pritando todos os evento no console devtools
	console.log(e);
	//altera o nome do button para o timeStamp
	clickableButton.innerText = e.timeStamp ;	
    //mostra no console devtools o typo click
	console.log(e.type);
	// remove o evento do tipo click do button
	clickableButton.removeEventListener("click",logEvent4);
	//Não mostra no console o event click apos clicar no button
	console.log(e.type);
}


//25:00

const back = document.getElementById("background");


back.addEventListener("mousedown",switchBackground);
back.addEventListener("focusout",switchBackground);

function switchBackground(e){
	// if (e.wich === 1) {
	// 	back.classList.toggle("background-color");
	// }


	// Adiciona a classe background-color 
	// back.classList.add("background-color");

	if (e.type ==="mousedown") {
		//add classe
		back.classList.add("background-color");
	}
	else if (e.type === "focusout") {
		// remove a classe
		back.classList.toggle("background-color");
	}
}

document.addEventListener("click",switchBackground2);


function switchBackground2(e){
	console.log(e);
	// ao clicar na tag é true clicar fora é false
	const hasBeenClicked = back.contains(e.target);
	console.log(hasBeenClicked);
}

function switchBackground4(e){
	const hasBeenClicked = back.contains(e.target);
	if (hasBeenClicked) {
		// ao clicar na tag add class
		back.classList.add("background-color");
	}
	else{
		// clicando fora remove class
		back.classList.toggle("background-color");
	}
}

const listItemsUl = document.querySelectorAll("ul");

listItemsUl.addEventListener("click",addGreenBackground);


function addGreenBackground(e){
	console.log(e.target);

	/*Para o evento fora do alvo no caso o background*/
	e.stopPropagation();
	const targetLi = e.target;
	targetLi.classList.add("green");

}

const allLI = back.querySelectorAll("li");

function addGreenBackground(e){
	e.stopPropagation();

	for(const prop of allLI){
		const targetLi = e.target;
		targetLi.classList.remove("green")
	}

	const targetLi = e.target;
	targetLi.classList.add("green");
}


function addGreenBackground(e){
	e.stopPropagation();

	const targetLi = e.target;
	const green = document.querySelector(".green");
	if (green) {
		green.classList.remove("green");
	}
	targetLi.classList.add("green");
}

function addGreenBackground(e){

	e.stopPropagation();
	const targetLi = e.target;
	if (e.target.nodeName == "Ul") {
		return;
	}
	const green = document.querySelector(".green");
	if (green){
		green.classList.remove("green");
	}
	targetLi.classList.add("green");
}

const back2 = document.getElementById("back2");
const allLIs = back2.querySelectorAll("li");

for(var prop of allLIs){
  prop.addEventListener("click",function(e){
    console.log(this);
  });
}



//---------------------------------------
//Aula 02 Lecture: Preventing Default
//---------------------------------------

const div2 = document.getElementById("div2");
const link = div2.querySelector("a");


link.addEventListener("click",function(event){
	event.preventDefault();
	alert("Not today");
});


link.addEventListener("contextmenu",function(event){
	event.preventDefault();
	alert("Not today");
});

const myForm = document.getElementById("myForm");
myForm.addEventListener("submit",addToList);

function addToList(e){
	e.preventDefault();
	const myInput = document.getElementById("myInput").value;
	//console.log(myInput);
	const newLi = document.createElement("li");
	newLi.innerText = myInput;
	listItemsUl.appendChild(newLi);
	myForm.reset();

}

//---------------------------------------
//Aula 03 Lecture: Key Events
//---------------------------------------

//Ao digitar apresente o codigo em numero da tecla quando pressionada
document.addEventListener("keydown",function(e){
	console.log(e.keyCode);
	if (e.keyCode === 32) {
		e.preventDefault();

	}
});

//Ao digitar apresente o codigo em numero da tecla ao soltar a tecla
document.addEventListener("keyup",function(e){
	console.log(e.keyCode);
});

const div3 = document.getElementById("div3");
const para = div3.querySelector("p");
const textarea = div3.querySelector("textarea");
const texto = "Texto";
let timer;
let count = 0;

//add texto ao manter tecla pressionada
textarea.addEventListener("keydown",addText);
//texto string vazia ao soltar a teclar
textarea.addEventListener("keydup",removeText);

function addText(e){

para.innerText = texto;
}
function removeText(e) {
	para.innerText = "";
}

function removeText2(e) {
	count++;
	console.log(count);
	clearTimeout(timer);
	//1 minuto aṕos digitar o texto é trocado/removido
	timer = setTimeout(()=>{
		para.innerText = "";
	},1000);
}

//---------------------------------------
//Aula 04 Lecture: Loads Events
//---------------------------------------

//Dentro de uma tag <script> no HTML no fim do doc

function addToLog() {

	const mylog = document.getElementById("log");
	mylog.innerHTML += "<h1> Hello ";
}

//Dentro de uma tag <script> no HTML no inicio do doc
	
document.addEventListener("DOMContentLoaded",addTolog);


function addToLog() {

	const mylog = document.getElementById("log");
	mylog.innerHTML += "<h1> Hello ";

}

//Serve como o tempo de load da pagina
for (var i = 0; i<1000000;i++) {}


//------------------------------------------

window.addEventListener("load",checkImageSize);

function checkImageSize(){

const myImg = document.getElementById("myImg");
console.log("height:" + myImg.offsetHeight + " " 
 + "width: " + myImg.offsetWidth);
}
	
