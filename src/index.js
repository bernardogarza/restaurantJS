import { pageLoad } from './partials/page-load';
import { aboutTab } from './partials/about';
import { menuTab } from './partials/menu';
import { contactTab } from './partials/contact';
import './style/main.scss';
import './static/logo-tacos.png';
import './static/about.png';
import './static/cuates.png'
import './static/pirata.png'
import './static/special-tacos.png'
import './static/regular-tacos.png'
import './static/frijoles.png'
import './static/hamburger.png'
import './static/potato.png'
import './static/valle.png'
import './static/cumbres.png'
import './static/fundidora.png'
import './static/anahuac.png'

const content = document.getElementById('content');
content.appendChild(pageLoad());

const mainDiv = document.querySelector('.main');
mainDiv.appendChild(aboutTab());

let navElements = document.querySelectorAll('li');
navElements = Array.from(navElements);

const nav = document.querySelector('nav');

nav.addEventListener('click', function(e){
	for (let element of navElements){
		element.classList.remove('active');
	}

	mainDiv.innerHTML = '';
	if (e.target.innerText == 'About'){
		mainDiv.appendChild(aboutTab());
	}
	else if (e.target.innerText == 'Menu'){
		mainDiv.appendChild(menuTab());
	}

	else if (e.target.innerText == 'Contact'){
		mainDiv.appendChild(contactTab());
  }

	e.target.classList.add('active');
})