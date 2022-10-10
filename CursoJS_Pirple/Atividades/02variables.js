// Var Variables
/* var declarations are globally scoped or function
   var variables can be updated and re-declared within its scope
   var variables are initialized with undefined	
   var and let can be declared without being initialized,
*/

// Let Variables
/* let declarations are block scoped.
   let variables can be updated but not re-declared; 
   let variables can be declared without being initialized, 

*/

// const Variables
/*
 const declarations are block scoped.
 const variables can neither be updated nor re-declared.
 const must be initialized during declaration.

*/

// Hoisted
/*They are all hoisted to the top of their scope. 
But while var variables are initialized with undefined, let and const variables are not initialized.*/

//--------------------------------------------//

// VAR EXAMPLE

  var greeter = "hey hi";
  var greeter = "say Hello instead";

    var greeter = "hey hi";
    var times = 4;

    if (times > 3) {
        var greeter = "say Hello instead"; 
    }
    
    console.log(greeter) // "say Hello instead"
//--------------------------------------------//

 // LET EXAMPLE

  let greeting = "say Hi";
   let times = 4;

   if (times > 3) {
        let hello = "say Hello instead";
        console.log(hello);// "say Hello instead"
    }
   console.log(hello) // hello is not defined
//--------------------------------------------//


// CONST EXAMPLE

  const greeting = "say Hi";
  greeting = "say Hello instead";// error: Assignment to constant variable. 
