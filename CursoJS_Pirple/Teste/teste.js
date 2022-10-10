
const myArray = [1,2,3];
[a,b,c] = myArray;

console.log(a,b,c);

const myArray2 = ["Jotta","goku","Vegeta"];
[name1,name2,name3 ="Gohan"] = myArray2;
console.log(name1,name2,name3);

function returnArray(){
    return ["janderson","naiara","camila","natalia","larissa"];
}

function nameFilmter(arr,term){
    return arr.filter((t)=> t== term);
}

const [janderson,naiara,camila,natalia,larissa] = returnArray();
console.log(janderson);

const [result] = nameFilmter(["janderson","Larissa"],"Larissa");
console.log(result);