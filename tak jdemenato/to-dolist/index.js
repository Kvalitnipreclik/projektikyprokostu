

let a = 0

function ulozeni(){
    a = document.getElementById("ok").value
    

    let newDiv = document.createElement("div")
    newDiv.className="padding"
    

    let TextNode = document.createTextNode(a)
    
   let currentDiv = document.getElementById("div1");
  
   

    let btn = document.createElement("button")
    btn.innerHTML = "Done"
    btn.onclick = function() {

        newDiv.remove()
        btn.remove()
        
    

    }
    
    newDiv.appendChild(TextNode)
    
    newDiv.appendChild(btn)
    
    document.body.insertBefore(newDiv, currentDiv)
    
    
}

