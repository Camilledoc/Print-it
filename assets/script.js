const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

// c'est notre variable repère dans le tableau
let active_slide = 0;
const image = document.querySelector('.banner-img');
const tagLine = document.querySelector('#banner p');
const dots = document.querySelector('.dots');
let arrow_left = document.querySelector('.arrow_left');
let arrow_right = document.querySelector('.arrow_right');


//fonction qui va créer nos balises <li>
function createDots(){
	dots.innerHTML='';
	for(let i=0;i<slides.length;i++){
		let dot = document.createElement('li');
		//on ajoute la class dot à notre élément dot et la condition de la slide active 
		dot.classList.add('dot');
		if (i===active_slide){
			dot.classList.add('dot_selected');
		}
		// on ajoute dot au sein de dots (élément parent) 
		dots.appendChild(dot);
	}
}

// fonction pour le déroulé des slides 
function createSlide(){
	image.setAttribute ("src","./assets/images/slideshow/"+slides[active_slide].image);
	tagLine.innerHTML=slides[active_slide].tagLine;
	createDots();
}

//on appelle la fonction 
createDots();

// Ecouteur d'évènement flèche gauche 
arrow_left.addEventListener('click', function() {
	active_slide--;
	if (active_slide<0) {
		active_slide=3;
	}
	createSlide();
	});

// Ecouteur d'évènement flèche droite 
arrow_right.addEventListener('click', function() {
	active_slide++;
	if (active_slide>3) {
		active_slide=0;
	}
	createSlide();
});