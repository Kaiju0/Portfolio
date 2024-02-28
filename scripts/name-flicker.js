
const h = document.querySelector('.h');

for (let i = 0; i < 10; i++) {
    const mathRandom = ((Math.random() * 10)) / 6.6666666666 ;
};

function decideTiming() {
    if(mathRandom <= 0.25) {
        h.classList.toggle('name-025s');
    } if(0.25 < mathRandom && mathRandom <= 0.50) {
        h.classList.toggle('name-050s');
    } if(0.50 < mathRandom && mathRandom <= 0.75) {
        h.classList.toggle('name-075s');
    } if(0.75 < mathRandom && mathRandom <= 1) {
        h.classList.toggle('name-100s');
    } if(1 < mathRandom && mathRandom <= 1.25) {
        h.classList.toggle('name-125s');
    } if(1.25 < mathRandom && mathRandom <= 1.50) {
        h.classList.toggle('name-150s');
    }
};

decideTiming();

