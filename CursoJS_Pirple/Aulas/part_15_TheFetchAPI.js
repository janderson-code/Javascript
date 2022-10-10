//FETCH API

//RETURNS A PROMISE

/*

<div id = planet>
	
<button id= button>Click for planet</button>

<button id= otherButton>Show multiple Planets</button>

<button id= highlighter>Highlight unpopulated planets</button>

</div>


*/

const myDiv = document.getElementById("planet");
const myButton = myDiv.querySelector("button");

myButton.addEventListener("click", getPlanet);


function getPlanet(){
 const randomNum = Math.floor(Math.random()*10)+1;
   //fetch("https://swapi.co/api/planets/1/")
   fetch(`https://swapi.co/api/planets/${randomNum}/`)
	.then(data => data.json())
	.then(d=> populatePlanet(d))
	.catch(err=> console.log(err.message));

}

function populatePlanet(planetObj){

	const newParagraph = document.createElement("p");
	newParagraph.innerText = planetObj.name;
	myDiv.appendChild(newParagraph);

}

//--------------------10:40------------------------------

function populatePlanet2({name}){

	const newParagraph = document.createElement("p");
	newParagraph.innerText = name;
	myDiv.appendChild(newParagraph);

}

function populatePlanet3(planetObj){

	const{name,climate,terrain,population,orbital_period} = planetObj;

	const PlanetDiv = `
		<div>
			<h1>${name}</h1>
			<p>				
			  ${name} has a climate that is ${climate}. The terrain is
			  ${terrain} , with a pop. of ${population} the
			  orbital period is${orbital_period} days.
			</p>
		<div>
	`
	console.log(planetDiv);

	// dessa forma ao clicar novamente não vai aparecer outro dado
	//devido essa linha que quebra o evento listener 
	// da função getPlanet
	myDiv.innerHTML += planetDiv;
}

/* Dessa forma ao pressionar o button novamente vai ser 
   adicionado mais de um dado no html
*/
function populatePlanet4(planetObj){

	const{name,climate,terrain,population,orbital_period} = planetObj;
	const myPlanetDiv = document.createElement("div");
	const PlanetDiv = `
		<div>
			<h1>${name}</h1>
			<p>				
			  ${name} has a climate that is ${climate}. The terrain is
			  ${terrain} , with a pop. of ${population} the
			  orbital period is${orbital_period} days.
			</p>
		<div>
	`
	myPlanetDiv.innerHTML = planetDiv;
	myDiv.appendChild(myPlanetDiv);
}


	//Mesmo funcionamento do de cima.
	function populatePlanet5(planetObj){

	const{name,climate,terrain,population,orbital_period} = planetObj;
	let pop;
	
	if (population ==="unknown"){
		pop = population;
	}else{
		pop = parseInt(population).toLocaleString();
	}

	// Outra alternativa do if acima
	//population ==="unknown" ?pop = population: pop = parseInt(population).toLocaleString();

	const PlanetDiv = `
		<div>
			<h1>${name}</h1>
			<p>				
			  ${name} has a climate that is ${climate}. The terrain is
			  ${terrain} , with a pop. of ${pop} the
			  orbital period is${orbital_period} days.
			</p>
		<div>
	`

		//Duas opções:

		//Ao clicar adiciona em fila, o ultimo div fica embaixo do button
		myDiv.insertAdjacentHTML("beforeend",planetDiv);

		//Adiciona a div por cima ao clicar como se fosse uma pilha o ultimo fica em cima antes do button
		myDiv.insertAdjacentHTML("afterbegin",planetDiv);
}


//------------------------30:25---------------------------

function populatePlanet6(planetObj){

	const{name,climate,terrain,population,orbital_period} = planetObj;
	let pop;
	
	if (population ==="unknown"){
		pop = population;
	}else{
		pop = parseInt(population).toLocaleString();
	}

	// Outra alternativa do if acima com operador ternario
	//population ==="unknown" ?pop = population: pop = parseInt(population).toLocaleString();

  // pode-se colocar o operador ternario acima também na variavel abaixo em sua interpolação(template literal)
	const PlanetDiv = `
		<div class = "planets">
			<h1>${name}</h1>
			<p>				
			  ${name} has a climate that is ${climate}. The terrain is
			  ${terrain} , with a pop. of ${population ==="unknown" ?population: parseInt(population).toLocaleString()} the
			  orbital period is${orbital_period} days.
			</p>
		<div>
	`

		//Duas opções:

		//Ao clicar adiciona em fila, o ultimo div fica embaixo do button
		myDiv.insertAdjacentHTML("beforeend",planetDiv);

		//Adiciona a div por cima ao clicar como se fosse uma pilha o ultimo fica em cima antes do button
		myDiv.insertAdjacentHTML("afterbegin",planetDiv);
}

//--------------------------------------

const mySecondButton = document.getElementById("otherButton");
mySecondButton.addEventListener("click",getPlanets2);

function getPlanets() {

	fetch(`https://swapi.co/api/planets/`)
		.then(data => data.json())
		.then(planets => {
			const {next} = planets;
			//Regex
			const newUrl = next.replace(/^http:\/\//i,"https://");
			console.log(newUrl);
			return fetch(newUrl)
		}
	)
		.then(morePlanets => console.log(morePlanets));
}


//-------------------------------------------------

//Função ao clicar vai apresentar todos os dados (planetas)
function getPlanets2() {

	fetch(`https://swapi.co/api/planets/`)
		.then(data => data.json())
		.then(planets => processPlanets(planets.results));
}


function processPlanets(planetsArray){
	for(const prop of planetsArray){
		populatePlanet5(prop);

	}

//------------------45:00-------------------------

//Alterando funções com index e buscar por index e 
// nome da classe da div conforme index

function getPlanets3() {

	fetch(`https://swapi.co/api/planets/`)
		.then(data => data.json())
		.then(planets => processPlanets2(planets.results));
}

function processPlanets2(planetsArray){
	for(const [index, prop] of planetsArray.entries()){
		populatePlanet7(prop,index);

	}


	function populatePlanet7(planetObj,index){

	const{name,climate,terrain,population,orbital_period} = planetObj;
	let pop;
	
	// Outra alternativa do if acima com operador ternario
	//population ==="unknown" ?pop = population: pop = parseInt(population).toLocaleString();

  // pode-se colocar o operador ternario acima também na variavel abaixo em sua interpolação(template literal)
	const PlanetDiv = `
		<div class="planets" data_planetId=${index}" data-population =${population}>
			<h1>${name}</h1>
			<p>				
			  ${name} has a climate that is ${climate}. The terrain is
			  ${terrain} , with a pop. of ${population ==="unknown" ?population: parseInt(population).toLocaleString()} the
			  orbital period is${orbital_period} days.
			</p>
		<div>
	`

		//Duas opções:

		//Ao clicar adiciona em fila, o ultimo div fica embaixo do button
		myDiv.insertAdjacentHTML("beforeend",planetDiv);

		//Adiciona a div por cima ao clicar como se fosse uma pilha o ultimo fica em cima antes do button
		myDiv.insertAdjacentHTML("afterbegin",planetDiv);
}


const highlighter = document.getElementById("highlighter");

highlighter.addEventListener("click",showUnpopulated);

function Showunpopulated(){
	const allPlanetDivs = document.querySelectorAll(".planet");

	for(const prop of allPlanetDivs){

		if(prop.dataset.population === "unknown"){
			prop.style.backgroundColor ="yellow";
			prop.classList.toggle("highlight");
		}
		//console.log(prop.dataset.population);
	}
}

//----------------------54:35-------------------------

//seção onde altera a cor do background ao selecionar
// uma opção do select abaixo (drop-down list)

/*

<div id = planet>
	
<button id= button>Click for planet</button>

<button id= otherButton>Show multiple Planets</button>

<button id= highlighter>Highlight unpopulated planets</button>

<select id="selector" name="select">
	<option value="none ">None</option>
	<option value="unknown">unknown</option>
	<option value="low">low</option>
	<option value="medium">medium"</option>
	<option value="High">High</option>
</select>

</div>

*/

function populatePlanet7(planetObj,index){

	const{name,climate,terrain,population,orbital_period} = planetObj;
	let pop;
	
	if (population >0 && population <=1000000 ){
		pop = "low";
	}else if(population > 1000000 && population 1000000000<){
		pop = "medium";
	}else if(population >1000000000){
		pop = "high"
	}else{
		pop = "unknown";
	}

	
	const PlanetDiv = `
		<div class="planets" data_planetId=${index}" data-population =${population}>
			<h1>${name}</h1>
			<p>				
			  ${name} has a climate that is ${climate}. The terrain is
			  ${terrain} , with a pop. of ${population ==="unknown" ?population: parseInt(population).toLocaleString()} the
			  orbital period is${orbital_period} days.
			</p>
		<div>
	`

		//Duas opções:

		//Ao clicar adiciona em fila, o ultimo div fica embaixo do button
		myDiv.insertAdjacentHTML("beforeend",planetDiv);

		//Adiciona a div por cima ao clicar como se fosse uma pilha o ultimo fica em cima antes do button
		myDiv.insertAdjacentHTML("afterbegin",planetDiv);
}
const allPlanetDivs = document.getElementByClassName("planet");

function Showunpopulated2(){

	for(const prop of allPlanetDivs){

		if(prop.dataset.population === "unknown"){
			prop.style.backgroundColor ="yellow";
			prop.classList.toggle("highlight");
		}
		//console.log(prop.dataset.population);
	}
}

const selector = document.getElementById("selector");

selector.addEventListener("change",highlight);


function highlight(e){

	const {value} = e.target;

	for(const prop of allPlanetDivs){
		prop.style.background = "white"
		if(prop.dataset.population === value){
			prop.style.background = "teal";
		}
	}

}

