var indice = Math.ceil((Math.random() * 34) + 1);

document.getElementById("slider").src = "img/concept/" + indice + ".jpg";

function mais() {
    if (indice == 35) {
        indice = 2;
        document.getElementById("slider").src = "img/concept/" + indice + ".jpg"
    } else {
        indice++;
        document.getElementById("slider").src = "img/concept/" + indice + ".jpg";
    }
}

function menos() {
    if (indice == 2) {
        indice = 35;
        document.getElementById("slider").src = "img/concept/" + indice + ".jpg"
    } else {
        indice--;
        document.getElementById("slider").src = "img/concept/" + indice + ".jpg";
    }
}
