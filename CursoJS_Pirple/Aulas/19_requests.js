// 01
/*

A Propriedade onload
Com o objeto, você pode definir uma função de retorno de chamada a ser executada quando a solicitação receber uma resposta.XMLHttpRequest

A função é definida na propriedade do objeto:onloadXMLHttpRequest

*/

xhttp.onload = function() {
    document.getElementById("demo").innerHTML = this.responseText;
  }
  xhttp.open("GET", "ajax_info.txt");
  xhttp.send();


  
// 02

loadDoc("url-1", myFunction1);

loadDoc("url-2", myFunction2);

function loadDoc(url, cFunction) {
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function() {cFunction(this);}
  xhttp.open("GET", url);
  xhttp.send();
}

function myFunction1(xhttp) {
  // action goes here
}
function myFunction2(xhttp) {
  // action goes here
}


//03
/*

A propriedade onreadystatechange

A propriedade detém o status do XMLHttpRequest.readyState

A propriedade define uma função de retorno de chamada a ser executada quando o Estado pronto mudar.onreadystatechange

A propriedade e as propriedades possuem o status do objeto XMLHttpRequest.statusstatusText


*/
function loadDoc() {
    const xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        document.getElementById("demo").innerHTML =
        this.responseText;
      }
    };
    xhttp.open("GET", "https://kitsu.io/api/edge/anime?filter[text]=cowboy%20bebop");
    xhttp.send();
  }





