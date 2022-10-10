
//Homework Assignment #3

/*All men are mortal
Socrates is a man.
Therefore, socrates is mortal.*/

// Variables

var man = "mortal";
var socrates = "man";

// Decision 
if (man === "mortal" && socrates === "man") {
	console.log("Socrates is a mortal");
}else{
	console.log("Socrates is not a mortal");
}

// Extra Credit

cakeIsVanilla = true;
cakeIsChocolate = true;

if ((cakeIsVanilla || cakeIsChocolate)) {
	console.log("This cake is either vanilla or chocolate.");
}
if(!!cakeIsChocolate){
	console.log("This cake is not chocolate.");
	console.log("Therefore, this cake is vanilla.");
}