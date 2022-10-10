//    **Number**
//   console.log(Math.random());
//   console.log(10*5);
//   console.log(Math.PI);
//   console.log(parseInt("10")); //conversão
//   console.log("10"+3) //concatenação
//   console.log(isNaN("g"));
//   console.log(isNaN(1));

//   *STRINGS*
//   console.log("Hello");
//   console.log("suooo".lenght);
//   console.log("maiuscula".toUpperCase());
//   console.log("Hello"+" "+"World"+"!");

//   **Booleans**
//   var beTrue = true;
//   var beNull = null;

//   console.log(beTrue == true);

//   if(beNull == true){
//     console.log("hello");
//   }
//   else{
//     console.log("hahahaha");
//   }
//   var hasContent="kak";
//   var NotHasContent ="";
//   var isZero = 0;
//   var nonAssignedVariavle;
//   var isFalse= true;
//   var isNotANumber;

//   ** OBJECTS**
//   // COLLECTIONS OF NAME-VALUE PAIRS

//   var myObject = new Object();
//   myObject['1'] = "Chris";
//   myObject['2']="hell";
//   console.log(myObject);

//   var OutroObjeto ={
//     1:"Janderson",
//     2: "Jean",
//     3: "Gustavo",
//     4: "Diego",
//     5: "Juliana",
//   };
//   OutroObjeto['6'] = 'ola';
//   console.log(OutroObjeto);

//   var OutroObjeto2 = {
//     Firstname:"Janderson",
//     Lastname:"Barbosa",
//     age:50,
//     phone:"1699796-5697",
//     numbers :{
//       mobile:"1699796-5697",
//       home:"163321-2277",
//     },
//     address:"123 Fake St.",
//   };

//   console.log(OutroObjeto2);
//   console.log(OutroObjeto2.age);
//   console.log(OutroObjeto2['age']);
//   console.log(OutroObjeto2.numbers.home);
//   console.log(OutroObjeto2.numbers['home']);

//   var donut ={
//     type: "chocolate",
//     glazed: true,
//     sweetness:8,
//     hasChocolate : false,
//     sayhi: function(){
//       console.log("HI");
//     },
//   };

//   console.log(donut);
//   donut.sayhi();

//   /*Constructor pattern for creating objetos*/

//   function Donut(type,glazed,sweetness,hasChocolate){
//     this.type = type;
//     this.glazed = glazed;
//     this.sweetness = sweetness;
//     this.sayType = function(){
//       console.log("Type: " + this.type);
//     };
//     this.showSweetness = function(){
//       console.log("Sweetness"+ this.sweetness + "/10");
//     };
//   }



//   **ARRAYS**  07/12
//   // COLLECTION OF DATA

//    var myarray =[1,2,3,"joao","jose", true];
//   console.log(myarray);
//   console.log(myarray.length);/* quantidade de valores array*/
//   /*-------------------------------*/
//   var myNamesArray = new Array();
//   myNamesArray[0] = "Joao";
//   myNamesArray[1] = "Nasaré";
//   console.log(myNamesArray);
//   console.log(myNamesArray.length);
//   /*-------------------------------*/
//   var MynamesArray = ['Joao',"jose","Maria"];
//   MynamesArray.push("Bob","Sally");/*Insere valor*/
//   MynamesArray.push("Jaca","Sally");
//   MynamesArray.push(["Janderson","Rambo"]);
//   //MynamesArray.pop();/*retira valor ultima posição*/
//   console.log(MynamesArray[7][0]);//janderson

//   var sortedArray = MynamesArray.sort();
//   sortedArray.reverse();
//   console.log(sortedArray);
//   /*-------------------------------*/
//   var nomes = ["naruto","Goku","Sasuke","Vegeta"];
//   var nomes2 =["Yusuke","Light","Lelouch","Kuabara"];
//   var nomeConcatenados = nomes.concat(nomes2,MynamesArray);
//   console.log(nomeConcatenados);
//   /*-------------------------------*/
//   var slicedArray = nomeConcatenados.slice(7);
//   var slicedArray = nomeConcatenados.slice(7,9);/* entre 7 e 9 posição no caso 7 e 8 . 9 não inclui*/
//   console.log(slicedArray);/*A partir do vetor selecionado é mostrado light em diante*/

//   /*-------------------------------*/
//   var nomes3 =["Jonathan Joestar","Joseph Joestar","Jotaro Kujo","Josuke Higashikata"];
//   var joinedArray = nomes3.join(" - ");
//   /*insere um caractere entre os valores*/
//   console.log(joinedArray);
//   /*-------------------------------*/
//   var coconutDonut = new Donut("coconut",false,8,true);
//   var vanillaDonut = new Donut("vanilla",true,10,false);

//   var myDonuts = [coconutDonut,vanillaDonut];
//   var donutLength= myDonuts.length;
//   var lastDonut = myDonuts[donutLength-1];

//   console.log(myDonuts);
//   lastDonut.sayType();
//   lastDonut.showSweetness();

var names = ["goku", "Vegeta", "Gohan", "Trunks"];
var slicename = names.slice(names.length - 1);
slicename[0] = "Kuririn"
console.log(slicename);
console.log(names);