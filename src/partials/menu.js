function menuTab(){
    const menu = document.createElement('div');
    menu.classList.add('menu');

    menu.innerHTML = `<h2> Our menu </h2>
    <div class="dish">
      <h3>Cuates</h3>
      <p class="tortilla">- Flour or corn tortilla -</p>
      <p>Two big tacos</p>
      <div class="ingredients">Arrachera, Avocado and White Cheese</div>
    </div>
    
    <div class="dish">
      <h3>Piratas</h3>
      <p class="tortilla">- Flour or corn tortilla -</p>
      <p>One giant taco</p>
      <div class="ingredients">Arrachera, Avocado and White Cheese</div>
     </div>
  
    <div class="dish">
      <h3>Frijoles</h3>
      <p>Traditional frijoles a la charra</p>
   </div>
      
    <div class="dish">
      <h3>Special Tacos</h3>
      <p class="tortilla">- Flour or corn tortilla -</p>
      <p>Order of 5 tacos</p>
      <div class="ingredients">Arrachera, Avocado, White Cheese and grilled onion</div>
    </div>
    
    <div class="dish">
      <h3>Regular Tacos</h3>
      <p>Order of 5 tacos</p>
      <div class="ingredients">Arrachera and grilled onion</div>
   </div>

    <div class="dish">
      <h3>Special Baked Potato</h3>
      <p>The classic baked potato</p>
      <div class="ingredients">Cheddar cheese, white cheese, butter, cream, arrachera and bacon</div>
   </div>

    <div class="dish">
      <h3>Hamburger</h3>
      <p>The classic hamburger</p>
      <div class="ingredients">Meat, avocado, lettuce, tomato, pickles and onion</div>
   </div>
   `;

    return menu
}
export { menuTab }