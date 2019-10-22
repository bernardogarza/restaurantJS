const contactTab = () => {
  const contact = document.createElement('div');
  contact.classList.add('contact');

  contact.innerHTML = `
  <h1>Contact Us</h1>
  
  <div class="contact-grid">
    <div class="branch">
    <h3>Anahuac</h3>
    <img src="./static/anahuac.png">
    <h4>Tizapan No. 237
    Col. Residencial de Anahuac, 
    San Nicolás de los Garza, N.L.</h4>
    <p>83-52-18-04</p>
    </div>

    <div class="branch">
    <h3>Fundidora</h3>
    <img src="./static/fundidora.png">
    <h4>Av. Fundidora 600
    Col. Obrera, Monterrey, N.L.</h4>
    <p>83-55-57-55</p>
    </div>

    <div class="branch">
    <h3>Cumbres</h3>
    <img src="./static/cumbres.png">
    <h4>Ave. Paseo de los Leones No. 2910 
    Cumbres 5to. Sector
    Monterrey, N.L.</h4>
    <p>21-39-90-64</p>
    </div>

    <div class="branch">
    <h3>Valle</h3>
    <img src="./static/valle.png">
    <h4>Av. Gómez Morin
    No. 494 Col. Del Valle
    Monterrey, N.L.</h4>
    <p>20-86-20-42</p>
    </div>
  </div>
  `;

  return contact;
};

export { contactTab };
