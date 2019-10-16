import '../static/logo-tacos.png';

function pageLoad (){

    const containerDiv = document.createElement('div');
    containerDiv.classList.add('container');

    const headerDiv = document.createElement('div');
    headerDiv.classList.add('header');

    const phoneDiv = document.createElement('div');
    phoneDiv.innerHTML = `<h4 class="headerInfo">PHONE:<br>83765495</h4>`;

    const image = document.createElement('div');
    image.innerHTML = `<img src="../static/logo-tacos.png" class="logo">`;


    const scheduleDiv = document.createElement('div');
    scheduleDiv.innerHTML = `<h4 class="headerInfo">OPEN EVERYDAY<br>8AM - 3PM<br>6PM - 4AM</h3>`;


    headerDiv.appendChild(phoneDiv);
    headerDiv.appendChild(image);
    headerDiv.appendChild(scheduleDiv);

    const nav = document.createElement('nav');
    const ul = document.createElement('ul');

    const menu = document.createElement('li');
    menu.innerText = 'Menu';

    const about = document.createElement('li');
    about.innerText = 'About';
    
    const contact = document.createElement('li');
    contact.innerText = 'Contact';

    ul.appendChild(menu);
    ul.appendChild(about);
    ul.appendChild(contact);
    
    const main = document.createElement('div');
    main.classList.add('main');

    nav.appendChild(ul);

    containerDiv.appendChild(headerDiv);
    containerDiv.appendChild(nav);
    

    return containerDiv;
}

export { pageLoad };