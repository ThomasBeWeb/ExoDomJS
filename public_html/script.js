//Fonction qui supprime tout le content
function clearContent(){
    
    var nodeList = document.getElementById("content");
    
    while (nodeList.firstChild) {
        nodeList.removeChild(nodeList.firstChild);
    }
    
}

//Fonction creation d'un Div
function addDiv(){

    var newDiv = document.createElement("div");
    
    newDiv.className = "testDiv";
    
    document.getElementById("content").appendChild(newDiv);
    
}

//Fonction test2
function test2(){
    
     var newDiv = document.createElement("div");
    
    newDiv.className = "testDiv";
    
    newDiv.innerHTML = "<p>Bonjour</p>";
    
    document.getElementById("content").appendChild(newDiv);
    
    document.getElementsByTagName("p")[0].style.color = "blue";
    
}

//Fonction test3
function test3(){
    
      document.getElementById("content").className += "align-center";

}

function test4(){
    
    var newDiv = document.createElement("div");
    
    document.getElementById("content").innerHTML = "<div>babab</div>";
    
}