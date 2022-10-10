
//---------------------------------------
//Aula 01 Lecture: Throwing_Exceptions
//---------------------------------------

/*

Links

https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/throw


*/

// Exception Handling

// Throw you own exception

/*

 - Use the throw statement to throw own exception
 - You specify the expression containing the value to be thrown
 e.g.: throw expression
 - Can throw any expression

 -A declaração throw lança 
  uma exceção definida pelo usuário. A execução da função 
  atual vai parar (as instruções após o throw 
  não serão executadas), 
  e o controle será passado para o primeiro bloco
  catch na pilha de chamadas. 
  Se nenhum bloco catch existe entre as funções 
  "chamadoras", o programa vai terminar.


*/

//throw "new Error!!!";

// function checkIfNum(n){
// 	if (isNaN(n)) {
// 		throw "This is a not a number";
// 	}else{
// 		console.log(n);
// 	}
// }

// checkIfNum(33);

// const myObjException = {
// 	toString: function(){
// 		return "I am an Object Exception";
// 	}
// }

// throw myObjException;


// function MyException(message){
// 	this.message = message;
// 	this.name = "My Exception";
// 	this.toString = function() {
// 		return this.name + ":" + this.message;
// 	}
// }

// throw new MyException("Field Invalid");

//---------------------------------------
//Aula 02  Lecture: Try, Catch, Finally
//---------------------------------------

let myNum = "Jane";
const myErrorLog = [];

function checkIfNum(num){

	if (isNaN(num)) {
		throw 'not a number';
	}else{
		console.log("Yes, this is a number");
	}
}

function errorHandler(e){

	myErrorLog.push(e);

}


try{
	checkIfNum(myNum);
}
catch(catchID){
	console.log("Pegou o erro");
	errorHandler(catchID);
}
console.log(myErrorLog.length);
console.log("I want to live");
//----

function MyString(string){
	if (typeof string ==="string"){
		this.value = string;
		this.getValue = function(){
			console.log( "You String: " + this.value + ".");
		}
	}else if(typeof string ==="boolean"){

		throw "Error!"
		
	}else{
		throw new StringExceptionError(string);
	}
}

function StringExceptionError(value){
	this.value = value;
	this.message = "must be a string";
	this.toString = function(){
		return this.value  + " : " + this.message;
	}
}

function verifyString(s){
	try{
		var str = new MyString(s);
	}
	catch(e){
		if(e instanceof StringExceptionError){
			console.log("String Exception " + e);
		}else{
			console.log("Other Exception ");
			//throw "Error do boolean";
		}
	}
	finally{
		// console.log("Always runs");
		always();
	}
	return str;
}

function always(){
	console.log("I Always run :D");
}


const a = verifyString("I am a String");
const b = verifyString(12345);
const c = verifyString(true);

function finalExample(){
	try{
		console.log("hi");
		throw 'test';
	}
	catch(e){
		console.log(e);
		return true;
	}
	finally{
		console.log("Can I run?");
	}
	
}

finalExample();




/*
 * Cria um objeto ZipCode.
 *
 * Formatos aceitos para o CEP são:
 *    12345
 *    12345-6789
 *    123456789
 *    12345 6789
 *
 * Se o argumento passado para o construtor do ZipCode não atende
 * a um desses padrões uma exceção é lançada.
 */

function ZipCode(zip) {
   zip = new String(zip);
   pattern = /[0-9]{5}([- ]?[0-9]{4})?/;
   if (pattern.test(zip)) {
      // o valor do CEP será a primeira combinação na string
      this.value = zip.match(pattern)[0];
      this.valueOf = function() {
         return this.value
      };
      this.toString = function() {
         return String(this.value)
      };
   } else {
      throw new ZipCodeFormatException(zip);
   }
}

function ZipCodeFormatException(value) {
   this.value = value;
   this.message = "does not conform to the expected format for a zip code";
   this.toString = function() {
      return this.value + this.message;
   };
}



/*Outro exemplo lançando um objeto
O exemplo a seguir testa uma string de entrada 
para um cep dos Estados Unidos. 
Se o CEP utiliza um formato inválido, 
a intrução throw lança uma exceção através da criação 
de um objeto do tipo ZipCodeFormatException.*/


/*
 * Isso poderia estar em um script que valida dados de endereços
 * para os endereços dos Estados Unidos.
 */

const ZIPCODE_INVALID = -1;
const ZIPCODE_UNKNOWN_ERROR = -2;

function verifyZipCode(z) {
   try {
      z = new ZipCode(z);
   } catch (e) {
      if (e instanceof ZipCodeFormatException) {
         return ZIPCODE_INVALID;
      } else {
         return ZIPCODE_UNKNOWN_ERROR;
      }
   }
   return z;
}

a = verifyZipCode(95060);         // retorna 95060
b = verifyZipCode(9560);          // retorna -1
c = verifyZipCode("a");           // retorna -1
d = verifyZipCode("95060");       // retorna 95060
e = verifyZipCode("95060 1234");  // retorna 95060 1234