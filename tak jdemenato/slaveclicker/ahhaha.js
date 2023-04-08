
let susi = 0

const objektycena = {
    boostTierone:35,
    boostTiertwo:100
}
const objekty = {
    boostTierone:0,
    boostTiertwo:0
}
function income(){
    susi++
    
}
function pasivniPrijem(){
    susi = susi + (objekty.boostTierone *10)+(objekty.boostTiertwo *100)
    
}
function playMyAudio(){
    document.getElementById("myAudio").play();
  }

function updated(){
    document.getElementById("demo").innerHTML = susi;
}

function cena(){
    if(susi > objektycena.boostTierone){
        susi = susi - objektycena.boostTierone
        
        objekty.boostTierone++
        objektycena.boostTierone = Math.ceil(objektycena.boostTierone* 1.2)
        document.getElementById("cena").innerHTML = objektycena.boostTierone;
    }
}
function cenaDruhehoOtroka(){
    if(susi > objektycena.boostTiertwo){
        susi = susi - objektycena.boostTiertwo
        
        objekty.boostTiertwo++
        objektycena.boostTierone = Math.ceil(objektycena.boostTiertwo* 1.2)
        document.getElementById("cena").innerHTML = objektycena.boostTiertwo;
    }




}
setInterval(updated, 10);

setInterval(pasivniPrijem, 1000);

