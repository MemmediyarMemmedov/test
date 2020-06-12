document.querySelector("input").addEventListener('input', Arrow)

let img = document.getElementById("img");
let imgLeft = 0
let width = window.innerWidth;
let imgwidth = 200;

function Arrow(event) {

    let x = Math.round((imgwidth * 100) / width);
    if (100 - this.value >= x)

        img.style.left = this.value + "%"


    if (event.keyCode == 37) {
        imgLeft--
        img.style.left = imgLeft + "%"
        if (imgLeft <= 0) {
            imgLeft++
        }
    }
    if (event.keyCode == 39) {
        imgLeft++
        img.style.left = imgLeft + "%"
        if (imgLeft >= 85) {
            imgLeft--
        }
    }




};
document.onkeydown = Arrow