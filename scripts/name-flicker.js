
const Name = ['h', 'h1', 'h2', 'a', 'a1', 'a2', 'a3', 'r', 'e', 'e1', 'e2','e3', 'm', 'm1', 'm2', 'd', 'f' ];


function decideTiming(letter) {
    const element = document.querySelector(`.${letter}`);
    const mathRandom = (Math.random() * 4.5);

    if(mathRandom <= 0.25) {
        element.classList.toggle('name-025s');
    } else if(0.25 < mathRandom && mathRandom <= 0.50) {
        element.classList.toggle('name-050s');
    } else if(0.50 < mathRandom && mathRandom <= 0.75) {
        element.classList.toggle('name-075s');
    } else if(0.75 < mathRandom && mathRandom <= 1) {
        element.classList.toggle('name-100s');
    } else if(1 < mathRandom && mathRandom <= 1.25) {
        element.classList.toggle('name-125s');
    } else if(1.25 < mathRandom && mathRandom <= 1.50) {
        element.classList.toggle('name-150s');
    } else if(1.50 < mathRandom && mathRandom <= 1.75) {
        element.classList.toggle('name-175s');
    } else if(1.75 < mathRandom && mathRandom <= 2) {
        element.classList.toggle('name-200s');
    } else if(2 < mathRandom && mathRandom <= 2.25) {
        element.classList.toggle('name-225s');
    } else if(2.25 < mathRandom && mathRandom <= 2.50) {
        element.classList.toggle('name-250s');
    } else if(2.50 < mathRandom && mathRandom <= 2.75) {
        element.classList.toggle('name-275s');
    } else if(2.75 < mathRandom && mathRandom <= 3) {
        element.classList.toggle('name-300s');
    } else if(3 < mathRandom && mathRandom <= 3.25) {
        element.classList.toggle('name-325s');
    } else if(3.25 < mathRandom && mathRandom <= 3.50) {
        element.classList.toggle('name-350s');
    } else if(3.50 < mathRandom && mathRandom <= 3.75) {
        element.classList.toggle('name-375s');
    } else if(3.75 < mathRandom && mathRandom <= 4) {
        element.classList.toggle('name-400s');
    } else if(4 < mathRandom && mathRandom <= 4.25) {
        element.classList.toggle('name-425s');
    } else if(4.25 < mathRandom && mathRandom <= 4.50) {
        element.classList.toggle('name-450s');
    }
};

for (const letter of Name) {
    decideTiming(letter);
}

