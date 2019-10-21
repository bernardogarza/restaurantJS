import { pageLoad } from './partials/page-load'
import { aboutTab } from './partials/about'
import './style/main.scss'
import './static/logo-tacos.png';

const content = document.getElementById('content');
content.appendChild(pageLoad());

const mainDiv = document.querySelector('.main');
mainDiv.appendChild(aboutTab());