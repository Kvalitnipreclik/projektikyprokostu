const konec = document.getElementById("konec")
const array = []
let resetovac = 0
let score = 0
let pocitaniDodvou = 0
let kotrolovaciarray = []
let zasifrovanyarray = []
function reset(){
   

    for(i = 0; i <6;i++){
        //vytvoreni
        
        let grid = document.createElement("div")
        let btn = document.createElement("button")
        btn.id = i + 1
        
        btn.innerHTML = "?"
        btn.onclick = function(){
            btn.innerHTML = btn.id
            pocitaniDodvou++
            kotrolovaciarray.push(btn.id)
            
            
            if(pocitaniDodvou===2){
                kontrola()
            }
        }
        grid.appendChild(btn)
        document.body.insertBefore(grid, konec)

        
       
        
    }
    //tipovani cisel
    for (i = 1; i < 7;i++){
        array.push(i)
    }

    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
      

      //make pairs
      

}

function kontrola(){
    for (const iterator of kotrolovaciarray) {
        zasifrovanyarray.push(array[iterator - 1])
        console.log(kotrolovaciarray)
        console.log(zasifrovanyarray)
    }
    


    if (zasifrovanyarray[0] > zasifrovanyarray[1]){
        
        if(zasifrovanyarray[0] - 1 === zasifrovanyarray[1]){
            document.getElementById("score").innerHTML = 1
            kotrolovaciarray = []
            zasifrovanyarray = []
            pocitaniDodvou = 0
        } else{
            kotrolovaciarray = []
            zasifrovanyarray = []
            pocitaniDodvou = 0
            console.log("smula")
            console.log(zasifrovanyarray)
        }

    }else {
        
        
        if(zasifrovanyarray[0] + 1 === zasifrovanyarray[1]){
            score++
            document.getElementById("score").innerHTML = score 
            kotrolovaciarray = []
            zasifrovanyarray = []
            pocitaniDodvou = 0
        } else{
            console.log("smula")
            kotrolovaciarray = []
            zasifrovanyarray = []
            pocitaniDodvou = 0
        }
    }
    	
   



}