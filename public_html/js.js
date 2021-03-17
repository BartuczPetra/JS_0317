/* global osszeg */

var tomb=[];
var paros=[];

function feltolt(){
    tomb=[];
     var nev=Number(document.getElementById("adat").value);
     var mettol=Number(document.getElementById("adat2").value);
     var meddig=Number(document.getElementById("adat3").value);
     
//    var tomb=[1,2,3,4,5,3,"macska"]; //bármilyen elem mehet bele(string, int, boolean)
//    var tomb=new Array(20);//megadjuk h 20 elemu tomb legyen, de lehet meg hozzaadni
//    tomb[0]=1;
//    tomb[1]="macska";
//    tomb[2]=False;
    for (var i = 0; i < nev; i++) {
        var vel=Math.floor(Math.random()*(meddig-mettol+1))+mettol;//[0;1[ ->*10 [0;10[ -> *meddig(6-mettol(3))+mettol(3) [3;6]  //Math.floor lefelé kerekít, levágja a 0.1-es jegyeket
        tomb[i]=vel;
    }
}

function osszegzes(){
    var osszeg=0;
    for (var i = 0; i < tomb.length; i++) {
        osszeg+=tomb[i];
    }
    document.getElementById("osszeg").innerHTML="Az összeg: "+osszeg;
}

function parosSzamok(){
    paros=[];
    var k=0;
    for (var i = 0; i < tomb.length; i++) {
        if(tomb[i]%2===0){
            paros[k]=tomb[i];
            k++;
        }
    }
    document.getElementById("paros").innerHTML="Páros számok: "+paros;
}

function dolgozz(){    
//    document.write("Jó reggelt! "+nev); //kiirás az oldalon
//    alert("Jó reggelt! "+nev)//felugró ablak
//    document.getElementById("eredmeny").innerHTML+=" Jó reggelt! "+nev;//az eredmény helyére írja ki
//    console.log("Hello") //a vizsgálatnál a consolhoz ir hozzá

    feltolt();
    osztas();
    console.log(tomb);//kiiratjuk a consolba az elemeket
    document.getElementById("eredmeny").innerHTML="Az eredmény: <br> "+ tomb.join("; ");//.join(; ) vesszovel elválasztva írja ki   
    osszegzes();
    parosSzamok();
    legnagyobb();
    
}

function init(){
    console.log("Első üzenet");
    document.getElementById("eredmeny").innerHTML+=" Én és a JS már dolgozik";//nem jó, mert még nincs ilyen elem, amikor mi mar bele akarunk iratni
    document.getElementById("gomb").addEventListener("click", dolgozz); //az index.htmlben az onclick="kiir()" helyett
}

function osztas() {
    var db = 0;
    for (var i = 0; i < tomb.length; i++) {
        if(tomb[i]%5===0){
            db++;
        }
    }
    document.getElementById("osztas").innerHTML="5-el osztható számok:"+db + "db";
}


window.addEventListener("load", init);//ezzel kell mi9ndig kezdeni!! ha lefut a program, akkor utána mehet a többi

function legnagyobb() {
    
   var max=1;
    for (var i = 0; i < tomb.length; i++){
        if (tomb[i] > tomb[max]){      
            max=i;
        }
    }
    document.getElementById("max").innerHTML="A legnagyobb: "+max;
}
