function contactTab() {
  const contact = document.createElement('div');
  contact.classList.add('contact');

  contact.innerHTML = `
  <h2>Contact Us</h2>
  
  <div class="branch">
  <h3>Anahuac</h3>
  <h4>Tizapan No. 237
  Col. Residencial de Anahuac, 
  San Nicolás de los Garza, N.L.</h4>
  <p>83-52-18-04</p>
  </div>

  <div class="branch">
  <h3>Fundidora</h3>
  <h4>Av. Fundidora 600
  Col. Obrera, Monterrey, Nuevo León</h4>
  <p>83-55-57-55</p>
  </div>

  <div class="branch">
  <h3>Cumbres</h3>
  <h4>Ave. Paseo de los Leones No. 2910 
  Cumbres 5to. Sector
  Monterrey, Nuevo León</h4>
  <p>21-39-90-64</p>
  </div>

  <div class="branch">
  <h3>Valle</h3>
  <h4>Av. Gómez Morin
  No. 494 Esq. Río San Lorenzo Col. Del Valle
  Monterrey, Nuevo León.</h4>
  <p>20-86-20-42</p>
  </div>
  `;

  return contact;
}

export { contactTab }