import { pageLoad } from './partials/page-load';

import './style/main.scss';
import './static/logo-tacos.png';

const content = document.getElementById('content');
content.appendChild(pageLoad());
