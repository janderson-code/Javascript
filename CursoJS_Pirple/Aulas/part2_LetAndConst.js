// function sayHi(){

// var shouldSayHi = true;
// var reallySayHi = true;

// if(shouldSayHi === true){
//     var myName = "janderson";

//     if(reallySayHi === true){
//       var myLastName = "Barbosa";
//     }
//   }
// console.log("Olá" + " "+ myName + " " +myLastName);
// }

// sayHi();
/////////////////////////////////////////////////
function sayHi() {
    let shouldSayHi = true;
    let reallySayHi = true;
    let myName, lastName;

    if (shouldSayHi === true) {
        myName = "Janderson";
        console.log("Hi" + " " + myName);
    } else {
        myName = "Gustavo";
        console.log("Hi" + " " + myName);
    }
     // console.log("Hi" + " " + myName);
     //let é local não imprime fora erro
}
sayHi();
/*Constantes valor é fixo*/
const myName= "Janderson";
const myArray = [1,2,3];

/*é possivel fazer push e add valor*/
myArray.push(4);

//////////////////////////////////////////
const MeuObjeto ={
    nome : "Janderson",
    sobreNome: "Barbosa",
    idade : 24,
    genero: "Masculino"
};

/*Desta forma não muda o valor*/
MeuObjeto = {nome:"Janderson"};

/*Desta forma muda*/
MeuObjeto.nome = "BoB";
console.log(MeuObjeto); 
/////////////////////////////////////////

function sayHi(){
    const nome = "Jane";

    if (true) {
        const nome = "Janderson";
        console.log(nome);
        /*imprime Janderson esta dentro do if*/    
    }
    console.log(nome);
    /*Vai imprimir Jane*/
}

sayHi();