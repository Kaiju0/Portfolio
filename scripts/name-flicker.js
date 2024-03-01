
const Name = ['h', 'h1', 'h2', 'a', 'a1', 'a2', 'a3', 'r', 'e', 'e1', 'e2','e3', 'm', 'm1', 'm2', 'd', 'f' ];


function decideTiming(letter) {
    const element = document.querySelector(`.${letter}`);
    const mathRandom = Math.random();

    if(mathRandom <= 0.25) {
        element.classList.toggle('name-025s');
    } else if(0.25 < mathRandom && mathRandom <= 0.30) {
        element.classList.toggle('name-030s');
    } else if(0.30 < mathRandom && mathRandom <= 0.35) {
        element.classList.toggle('name-035s');
    } else if(0.35 < mathRandom && mathRandom <= 0.40) {
        element.classList.toggle('name-040s');
    } else if(0.40 < mathRandom && mathRandom <= 0.45) {
        element.classList.toggle('name-045s');
    } else if(0.45 < mathRandom && mathRandom <= 0.50) {
        element.classList.toggle('name-050s');
    } else if(0.50 < mathRandom && mathRandom <= 0.55) {
        element.classList.toggle('name-055s');
    } else if(0.55 < mathRandom && mathRandom <= 0.60) {
        element.classList.toggle('name-060s');
    } else if(0.60 < mathRandom && mathRandom <= 0.65) {
        element.classList.toggle('name-065s');
    } else if(0.65 < mathRandom && mathRandom <= 0.70) {
        element.classList.toggle('name-070s');
    } else if(0.70 < mathRandom && mathRandom <= 0.75) {
        element.classList.toggle('name-075s');
    } else if(0.75 < mathRandom && mathRandom <= 0.80) {
        element.classList.toggle('name-080s');
    } else if(0.80 < mathRandom && mathRandom <= 0.85) {
        element.classList.toggle('name-085s');
    } else if(0.85 < mathRandom && mathRandom <= 0.90) {
        element.classList.toggle('name-090s');
    } else if(0.90 < mathRandom && mathRandom <= 0.95) {
        element.classList.toggle('name-095s');
    } else if(0.95 < mathRandom && mathRandom <= 1) {
        element.classList.toggle('name-100s');
    }
};

for (const letter of Name) {
    decideTiming(letter);
}

