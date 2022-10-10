//Document Object Model (DOM)

/*
	-Progamming inteface for HTML e XML documents.
	-Provides as structured representantion of the document
	-Defines methods to access the structure and manipulate it

	-Connects web pages to scripts or programming languages

	-DOM is not a proggaming language , it provides a model 
	 a web page.

	-The page content is stored in the DOM and can 
	 be accessed and manipultated in JavaScript

	-"The DOM provides a representation of the document 
	  as a structured grou of models
	  and objects that have properties and methods."

*/


const myTag = document.getElementsByTagName("p");

for (var i = 0; i >= myTag.length; i++){
	myTag[i].innerHTML = "Renamed";
}

for(const p of myTag){
	p.innerHTML = "Renamed";
}

//------------------------------------
// part 2 Lecture: Getting an Element by ID
//------------------------------------

const allSpans = document.getElementsByTagName("span");

for(const prop of allSpans){
	pro.innerHTML="Somebody";
}

const ID = document.getElementById("id");

ID.innerHTML = "er";

ID.innerHTML = "<h1>ss</h1>";

const myAppDiv = document.getElementById("app");
/*tags span que são filhos de um id app*/
const myappSpan = myAppDiv.getElementsByTagName("span");
/*tags span de todo documento HTML*/
const myappSpan = document.getElementsByTagName("span");


for(const prop of myappSpan){
	prop.innerHTML="Somebody";
	prop.innerHTML = myappSpan.length;
}

// <ul id ="members">
//  <li>Jane</li>
//  <li>zack</li>
//  <li>Jessie</li>
//  <li>Bob</li>
// </ul>

/*Trocando o terceiro o valor do terceiro elemento*/
const membersUl = document.getElementById("members");
const allMembersName = membersUl.getElementsByTagName("li");
 allMembersName[3].innerHTML = "Not Bob";


for(let prop of allMembersName){

	if (prop.innerText=== "Bob") {
		prop.innerText = "not bob";
		prop.innerText = "<h1>not bob</h1>";
	}

}




//------------------------------------
// part 3 Lecture: The Query Selector
//------------------------------------


/*
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title>JS Bin</title>
</head>
  <style>
    div{
      color: green;
      
    }
  </style>
<body>
  <div>
    Some 
  </div>
  <div>
	All
  </div>
</body>
</html>
*/

/*Apenas o primeiro elemento  div*/
const myDiv = document.querySelector("div");

myDiv.style.color = "green";
myDiv.style.fontSize = "100px";

/*Todos os seletores com classe dummy*/
const dummyDivs = document.querySelectorAll(".dummy");

for(const prop of dummyDivs){
	prop.style.color = "green";
}

/*Todos os seletores span detro da classe dummy*/
const dummyDivs2 = document.querySelectorAll(".dummy span");

for(const prop of dummyDivs2){
	prop.style.color = "green";
}

//------------------------------------
// part 4 Lecture: Traversing the DOM
//------------------------------------

/*Buscando o elemento pai e seu valor*/

const dummyDivs = document.querySelector("dummy span");

console.log(dummyDivs.parentNode);

/*Buscando o elemento pai do pai do span*/
console.log(dummyDivs.parentNode.parentNode);


/*Alterando propriedades*/

dummyDivs.parentNode.style.backgroundColor = "green";

/*Buscando elementos filhos*/

console.log(dummyDivs.childNodes);

/*Buscando o primeiro elemento filho*/
console.log(dummyDivs.childNodes[0]);

/*Buscando filhos do primeiro elemento filho */
console.log(dummyDivs.childNodes[0].childNodes);



//------------------------------------
// part 5 Lecture: ID and classes
//------------------------------------


const el = document.getElementsByTagName("div");
const footerDiv = el[el.length -1];
/*Troca o ID do ultimo div para fotter*/
footerDiv.id  = "fotter";

/*Imprime nome da classe*/
console.log(dummyDivs.className);

const purpleDiv = document.querySelector(".purple");
purpleDiv.style.backgroundColor = "purple";
purpleDiv.style.fontSize = "14px";
purpleDiv.style.height = "100px";

for(const prop of purpleDiv){
	console.log(prop.className);
}

/*caso elemento tenha mais de uma classe sub para esta*/
for(const prop of purpleDiv){
	prop.className = "purple";
}

/*Adicionando valor ou + nome para classe não sub*/
for(const prop of purpleDiv){
	prop.className += " foo";
}
/*Imprime os dados do elemento e exibe comolista
qtd classes,valores*/
for(const prop of purpleDiv){
	console.log(prop.classList);
}

/*Add classe para o elemento*/
for(const prop of purpleDiv){
	prop.classList.add("foo");
}
/*remove a  classe foo para cada elemento .purple que tiver*/
for(const prop of purpleDiv){
	prop.classList.remove("foo");
}

setTimeout(()=>{
	for(const prop of purpleDiv){
		prop.classList.remove("foo");
	}
},1000);

/*A cada 3 seg veririca se tem o valor foo com classe 
e remove e adiciona intermitentemente*/

setInterval(()=>{
	for(const prop of purpleDiv){
		prop.classList.toggle("foo");
	}
},5000);

/*Adicionando classe conforme ID*/

const foot = document.getElementById("footer");
foot.classList.add("foo");
foot.classList.add("sprite");

//------------------------------------
// part 6 Lecture: Elements
//------------------------------------



const creationDiv = document.getElementById("created");

/*Criando novo elemento */
const newElement  = document.createElement("div");

/*Inserido texto no p*/
newElement.innerText = "Hello";

/*Add uma classe para o elemento*/

newElement.classList.add("purple");

/*Add mais de uma classe para o elemento*/

newElement.classList.add("purple","foo");

/*Colocando o novo elemento criado como filho de ID*/

creationDiv.appendChild(newElement);

/*Criando elemento tipo ul como filho de new element*/
const newUl = document.createElement("ul");

newElement.appendChild(newUl);

//-----------------------------------------

const myFaveIceCreams = ["vanilha","rocky","chocolate"];

const createDiv = document.getElementById("create");

const newElement = document.createElement("div");

const newUl = document.createElement("ul");

const newLi = document.createElement("li");

newLi.innerText = myFaveIceCreams[0];

newUl.appendChild(newLi);

newElement.appendChild(newUl);

createDiv.appendChild(newElement);
//-----------------------------------------------

//Forma acima com loop automazando

const myFaveIceCreams = ["vanilha","rocky","chocolate"];

const createDiv = document.getElementById("create");

const newElement = document.createElement("div");

const newUl = document.createElement("ul");

for (const i = 0: i< myFaveIceCreams.length;i++){
	
	const newLi = document.createElement("li");
	newLi.innerText = myFaveIceCreams[i];
	newUl.appendChild(newLi);
}

newElement.appendChild(newUl);
createDiv.appendChild(newElement);

/*Removendo filho*/

createDiv.removeChild(newElement);

/*Removendo valor texto de elemento filho*/
const unlikedIcreCream = newUl.childNodes[3];

if (unlikedIcreCream.innerText ==="chocolate") {
	newUl.removeChild(unlikedIcreCream);
}
/*forma 2*/
for(prop of newUl.childNodes){
	if(prop.innerText==="chocolate"){
		newUl.removeChild(prop);
	}
}
/*forma 3 function*/

function removeIceCream(t) {
	for(prop of newUl.childNodes){
		if(prop.innerText==="t"){
				newUl.removeChild(prop);
		}
	 }
}