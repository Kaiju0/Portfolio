
const mainColor = '#ffffff';
const secColor = '#000000';



let clickCounter = 0;



function changeColor() {
    document.documentElement.style.setProperty('--main-color', mainColor);
    document.documentElement.style.setProperty('--sec-color', secColor);
};

function revertColor() {
    document.documentElement.style.setProperty('--main-color', secColor);
    document.documentElement.style.setProperty('--sec-color', mainColor);
};


const homeImage = document.querySelector('.image');


function invertImage() {
    
    homeImage.classList.remove('image');
    homeImage.classList.add('invert-image');
}

function revertImage() {
    
    homeImage.classList.remove('invert-image');
    homeImage.classList.add('image');
}



function toggleColor() {
    if (clickCounter % 2 === 0) {
        changeColor();
        invertImage();
    } else {
        revertColor();
        revertImage();
    }

    clickCounter++;

};