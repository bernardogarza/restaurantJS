import { pageLoad } from './partials/page-load'
import { aboutTab } from './partials/about'
import './style/main.scss'
import './static/logo-tacos.png';

const content = document.getElementById('content');
content.appendChild(pageLoad());

const mainDiv = document.querySelector('.main');
mainDiv.appendChild(aboutTab());

let navElements = document.querySelectorAll('nav ul li');
navElements = Array.from(navElements);

const nav = document.querySelector('nav');

nav.addEventListener('click', function(e){
	for (let element of navElements){
		element.classList.remove('active');
	}

	mainDiv.innerHTML = '';
	console.log(e.target.innerText);
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