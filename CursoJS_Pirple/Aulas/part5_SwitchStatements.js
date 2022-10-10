// SWITCH STATEMENT

const myFruit = "apple";

switch(myFruit){
	case "apple":
		console.log("I love apples");
		break;
	case "orange":
		console.log("Good choice");
		break;
	case "banana":
		console.log("ok");
	 	break;
	default:
		console.log("I didn't understand that but sure");
		break;
}

function fruitlogger(fruit) {

	switch(fruit){
	case "apple":
		console.log("I love apples");
		break;
	case "orange":
		console.log("Good choice");
		break;
	case "banana":
		console.log("ok");
	 	break;
	default:
		console.log("I didn't understand that but sure");
		break;
	}
	console.log("Broke out of switch statement"); 
}

}

function fruitlogger(fruit) {

	switch(fruit){
	case "apple":
	case "orange":
	case "banana":
		console.log("Fruit");
	 	break;
	default:
		console.log("I didn't understand that but sure");
		break;
	}
	console.log("Broke out of switch statement"); 
}

function Checknum(num) {

	let value;

	switch(num){
		case 0:
		case 1:
		case 2:
			value = "Low range";
			break;
		case 3:
		case 4:
		case 5:
			value = "Mid range";
			break;
		case 6:
		case 7:
		case 8:
			value = "High Range";
			break;
		default:
			console.log("Input number beetwen 0-8");
			break;
	}
	console.log("The value is " + value);
	setVolume(value);
	// body...
}

function setVolume(n) {
	console.log("Volume set at " + n);
	// body...
}
Checknum(8);


const donutPicker = (flav) =>{
	switch(flav){
		case "s":
			return "sprinkles";
		case "c":
			return "chocolate glazed";
		case "b":
			return "bear claw";
		default:
			return null;

	}
}

const donuts = (selection) =>{
	const selectedDonut = donutPicker(selection);
	if (!selectedDonut) {
		console.log("Incorrect selection");
	}else{
		console.log("you have selected " + selectedDonut);
	}	
}
donuts("s");