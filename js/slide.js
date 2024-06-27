
// Inputs and images do Slider
let radio = document.querySelector('.manual__btn');
let count = 1;

document.getElementById('radio1').checked = true;

setInterval(() => {
    nextImg(); 
}, 5000 );

function nextImg() {
    count ++;
    if (count > 4) {
        count = 1;
    }
    document.getElementById('radio'+ count).checked = true;
}