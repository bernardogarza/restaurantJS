const pageLoad = () => {
  const containerDiv = document.createElement('div');
  containerDiv.classList.add('container');

  const headerDiv = document.createElement('div');
  headerDiv.classList.add('header');

  const phoneDiv = document.createElement('div');
  phoneDiv.innerHTML = '<h4 class="headerInfo">PHONE:<br>01-800-254654</h4>';

  const image = document.createElement('div');
  image.innerHTML = '<img src="./static/logo-tacos.png" class="logo">';

  const scheduleDiv = document.createElement('div');
  scheduleDiv.innerHTML = '<h4 class="headerInfo">OPEN EVERYDAY<br>8AM - 3PM<br>6PM - 4AM</h3>';

  headerDiv.appendChild(phoneDiv);
  headerDiv.appendChild(image);
  headerDiv.appendChild(scheduleDiv);

  const nav = document.createElement('nav');
  const ul = document.createElement('ul');

  const about = document.createElement('li');
  about.classList.add('about-tab');
  about.innerText = 'About';

  const menu = document.createElement('li');
  menu.innerText = 'Menu';

  const contact = document.createElement('li');
  contact.innerText = 'Contact';

  ul.appendChild(about);
  ul.appendChild(menu);
  ul.appendChild(contact);

  const mainDiv = document.createElement('div');
  mainDiv.classList.add('main');

  nav.appendChild(ul);

  containerDiv.appendChild(headerDiv);
  containerDiv.appendChild(nav);
  containerDiv.appendChild(mainDiv);

  return containerDiv;
};

export { pageLoad };
