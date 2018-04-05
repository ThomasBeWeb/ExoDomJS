//Fonction qui supprime tout le content
function clearContent(){
    
    var nodeList = document.getElementById("content");
    
    while (nodeList.firstChild) {
        nodeList.removeChild(nodeList.firstChild);
    }
    
    document.getElementById("content").className = "col";
    
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

function test6(){
    
    var newDiv = document.createElement("div");
    
    newDiv.id = "bla"
    
    newDiv.innerHTML = "bla";
    
    newDiv.style.backgroundColor = "yellow";
    
    document.getElementById("content").appendChild(newDiv);
    
    newDiv = document.createElement("div");
    
    newDiv.id = "car"
    
    newDiv.innerHTML = "car";
    
    newDiv.style.backgroundColor = "blue";
    
    document.getElementById("content").appendChild(newDiv);
    
}

function test7(){
    
    var bla = document.getElementById("bla");
    var car = document.getElementById("car");
    
    car.appendChild(bla);
    
}

function addMap(){
    
    var newDiv = document.createElement("div");
    
    newDiv.id = "map"
    
    document.getElementById("content").appendChild(newDiv);
    
    initMap();

}

function initMap() {
    
var uluru = {lat: 43.676209, lng: 4.133503};
var map = new google.maps.Map(document.getElementById('map'), {
  zoom: 17,
  center: uluru
});
var marker = new google.maps.Marker({
  position: uluru,
  map: map
});
}