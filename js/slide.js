var indice = Math.ceil(Math.random() * 50);

document.getElementById("slider").src = "img/concept/" + indice + ".jpg";

function mais() {
    if (indice == 50) {
        indice = 1;
        document.getElementById("slider").src = "img/concept/" + indice + ".jpg"
    } else {
        indice++;
        document.getElementById("slider").src = "img/concept/" + indice + ".jpg";
    }
}

function menos() {
    if (indice == 1) {
        indice = 50;
        document.getElementById("slider").src = "img/concept/" + indice + ".jpg"
    } else {
        indice--;
        document.getElementById("slider").src = "img/concept/" + indice + ".jpg";
    }
}
