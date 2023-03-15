function turnOn(){
    var bulbimage = document.getElementsByClassName('bulbImage')[0];
    bulbimage.src = "lampON.png";
    document.getElementById('mainBody').style.backgroundColor = "white";
    document.getElementById('mainBody').style.color = "black";
    document.getElementById('lightText').innerHTML = "the light is turned on"
    document.getElementById('mainBody').style.color = "black";
}

function turnOff(){
    var bulbimage = document.getElementsByClassName('bulbImage')[0];
    bulbimage.src = "lampOFF.png";
    document.getElementById('mainBody').style.backgroundColor = "#2f3030";
    document.getElementById('mainBody').style.color = "white";
    document.getElementById('lightText').innerHTML = "the light is turned off"
}


// me trying to find stock images of light bulbs online for 10 straight mins