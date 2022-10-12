// Definisco array con il percorso delle immagini
const imgSlides = [
    `./assets/img/01.webp`,
    `./assets/img/02.webp`,
    `./assets/img/03.webp`,
    `./assets/img/04.webp`,
    `./assets/img/05.webp`,
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
    const imgMarkup = `<img class="${i === slidesActive ? `active` : ``}" src="${slidesNumber}" alt="">`;
    slidesElement.insertAdjacentHTML('beforeend', imgMarkup)
}

//  pulsante next
nextElement.addEventListener('click', function() {

    //Seleziono tutte le immagini 
    const allSlides = document.querySelectorAll('.slides > img');
    // dichiaro la slide visibile
    const visibleSlide = allSlides[slidesActive];
    // tolgo classe active all'attuale
    visibleSlide.classList.remove('active');
    //incremento il valore della slide attiva
    slidesActive++;
    console.log(slidesActive);
    console.log(imgSlides.length);
   
    // selezione la slide che deve essere attiva
    const nextSlideActive = allSlides[slidesActive];
    // aggiungo la classe active e la rendo visibile
    nextSlideActive.classList.add('active');

}
)

//  pulsante prev
prevElement.addEventListener('click', function() {

    //Seleziono tutte le slide
    const allSlides = document.querySelectorAll('.slides > img');
    // dichiaro la slide visibile
    const visibleSlide = allSlides[slidesActive];
    // tolgo classe active all'attuale
    visibleSlide.classList.remove('active');
    //decremento il valore della slide attiva
    slidesActive--;
    // selezione la slide che deve essere attiva
    const nextSlideActive = allSlides[slidesActive];
    // aggiungo la classe active e la rendo visibile
    nextSlideActive.classList.add('active');

}
)