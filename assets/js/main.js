// Definisco array con il percorso delle immagini
const imgSlides = [
    `./assets/img/01.webp`,
    `./assets/img/02.webp`,
    `./assets/img/03.webp`,
    `./assets/img/03.webp`,
    `./assets/img/03.webp`,
]

// selezione dove mettere le immagini
const slidesElement = document.querySelector(".slides");

// seleziono i pulsanti in pagina
const prevElement = document.querySelector(".prev")
const nextElement = document.querySelector(".next")

// creo la variabile che stabilisce che il conteggio parte da 0
let slidesActive = 0;

// Inserisco in .slides le immagini grazie ad un loop
for (let i = 0; i < imgSlides.length; i++) {
    const slidesNumber = imgSlides[i];
    const imgMarkup = `<img class="${i === slidesActive ? `active` : ``}" src="${slidesNumber}" alt="">` ;
    slidesElement.insertAdjacentHTML('beforeend', imgMarkup)
}