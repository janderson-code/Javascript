//---------------------------------------
//Aula 01 Lecture: Classes
//---------------------------------------

//Classes in ES6 are just syntactical sugar over Javascript
//existing prototype-base inheritance
//Simple, clean syntax to create objects and take care of inheritance

// Pre-ES6 way:


// function Person(name, age){
// 	this.name = name;
// 	this.age = age;
// }

// Person.prototype.greetings  = function(){
// 	console.log("greetings");
// }

// function Employee(name,age,role){
// 	Person.call(this,name,age);
// 	this.role = role;
// }
// Employee.prototype = Object.create(Person.prototype);
// Employee.prototype.constructor = Employee;

// const bill = new Employee("Bill",41,"janitor");
// bill.greetings();


//Class Method
//Classes art not Hoisted

// instanciar antes da declaração da classe dá erro
//const bob = new Person("jj",20); // erro 

class Person{
	constructor(name,age){
		this.name = name;
		this.age = age;
	}
	greetings(){
		console.log("Classes R kewl");
	}
}

const bob = new Person("Bob,",30);
console.log(bob);


const Person2 = class{
	constructor(name,age){
		this.name = name;
		this.age = age;
	}
	greeting(){
		console.log("Classes R new");
	}
}

const bill = new Person2("Bill",30);
console.log(bill);

const Jane = new Person2("Jane Doe",30);
Jane.greeting();

Person2.prototype.greeting = function(){
	console.log("Now I say something else");
}

Jane.greeting();//Imprime Now I say something else"


//---------------------------------------
//Aula 02 Lecture: Class Inheritance
//---------------------------------------

class Person3{
	constructor(name,age){
		this.name = name;
		this.age = age;
	}
	greetings(){
		console.log("Classes R kewl2");
	}
}

class Person4{
	constructor(name,age){
		this.name = name;
		this.age = age;
	}
	greetings(){
		return "classes t the kewlest :D";
	}
	static sayHey(){
		console.log("Hey!!");
	}
}


//Super Key calls functions on an object's parent class
class Employee extends Person3{

	constructor(name,age,position){
		super(name,age);
		this.position = position;
	}
	testGreeting(){
		super.greetings();
	}

}

class Employee2 extends Person4{
	constructor(name,age,position){
		super(name,age);
		this.position = position;
	}
	sayGreeting(){
		const parentString = super.greetings();
		console.log(`${this.name} thinks ${parentString}`);
	}

	static sayHey(){
		console.log("Hey!!");
	}
}

const barb = new Employee("Barb",27,"Dev");
const barb2 = new Employee2("Jander",25,"Dev");
barb.testGreeting();
barb2.sayGreeting();


class Customer extends Person4{
	constructor({name="customer",age="n/a",contactMethod}){
		super(name,age);
		this.contactMethod = contactMethod;
		this.accountCredit = null;
	}
	addCredit(amount){
		this.accountCredit +=amount;
	}
	reduceCredit(amount){
		this.accountCredit -=amount;
	}

	static sayhi(){
		console.log("Say Hi Class Customer");
	}
	static sayCustomerNames(c1,c2){
		console.log(`${c1.name}, ${c2.name}`);
	}
	static sayCustomerNames2(...customers){
		for(const c of customers){
			console.log(c.name);
		}
	}
	static transferCredit(source,target){
		const amt = source.accountCredit;
		target.accountCredit += amt;
		source.accountCredit -= amt;
	}
} 

const customer1 = new Customer({contactMethod:"email"});
const customer2 = new Customer({name:"Jane",contactMethod:"mobile"});
const customer3 = new Customer({name:"Alex",contactMethod:"email"});
console.log(customer1);
customer1.addCredit(100)
console.log(customer1.accountCredit);
customer1.reduceCredit(50);
customer2.addCredit(100);
console.log(customer1.accountCredit);

//  erro customer1.sayhi();
Customer.sayhi();//Imprime
Customer.sayHey(); // Imprime
Customer.sayCustomerNames(customer1,customer2);//print valores do atributo name
Customer.sayCustomerNames2(customer1,customer2,customer3);
console.log(customer2.accountCredit);
Customer.transferCredit(customer1,customer2);
console.log(customer2.accountCredit);





class Family{
	constructor(lastName){
		this.lastName = lastName;
	}

	sayFamilyName(){
		console.log(`We are the ${this.lastName}s`);
	}
}



class Parent extends Family{
	constructor(lastName,firstName){
		super(lastName);
		this.firstName = firstName;

	}
}


class Child extends Family{
	constructor(lastName,firstName){
		super(lastName);
		this.firstName = firstName;
	}
}

const dad = new Parent("Smith","George");
const mom = new Parent("Smith","Patty");
const jimmy = new Child("Smith","Jimmy");
const annie = new Child("Smith","Annie");

annie.sayFamilyName();


class FamilyMember{
	constructor(lastName,firstName,relationship){
		this.lastName = lastName;
		this.firstName = firstName;
		this.relationship = relationship;
	}

	sayFamilyName(){
		console.log(`We are the ${this.lastName}s`);
	}
}

class FamilyGroup{
	constructor(parents=[],children = []){
		this.parents = parents;
		this.children = children;
	}

	addMember(member){
		this.children.push(member);

	}
}


const dad2 = new FamilyMember("Smith","Bill","Father");
const mom2 = new FamilyMember("Smith","Catherine","Mother");
const annie2 = new FamilyMember("Smith","Annie","Daughter");
const will = new FamilyMember("Smith","Will","son");
const theSmiths = new FamilyGroup([dad2,mom2]);
theSmiths.addMember(annie2);
theSmiths.addMember(will);
console.log(theSmiths);



const smithFamily = {
	1:["Smith","Bill","Father"],
	2:["Smith","Catherine","Mother"],
	3:["Smith","Annie","Daughter"],
	4:["Smith","Will","Son"],
	5:["Smith","Jane","StepDaugher"]
}

const AnotherFamily = {
	1:["Wilson","BillyBob","Father"],
	2:["Wilson","JoeyJoeJoe","son"]
}


const createFamilyGroup= (famArray)=>{
	const famGroup = new FamilyGroup();
	for(prop of famArray){
		if(prop.relationship ==="father"|| prop.relationship ==="mother"){
			famGroup.parents.push(prop);
		}else{
			famGroup.children.push(prop);
		}
	}
	return famGroup;
}


const createFamily = (famObj)=>{
	const allMembers = []
	for (const prop in famObj){
		//console.log(famObj[prop]);
		const [last,first,relationship] = famObj[prop];
		const newMember = new FamilyMember(last,first,relationship);
		allMembers.push(newMember);
	}
	const famGroup = createFamilyGroup(allMembers);
	return famGroup;
}

const theSmiths2 = createFamily(smithFamily);
const theWilson = createFamily(AnotherFamily);
console.log(theSmiths2);
console.log(theWilson);
