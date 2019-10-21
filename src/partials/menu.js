function menuTab(){
    const menu = document.createElement('div');
    menu.classList.add('menu');

    menu.innerHTML = `
    <h1> Our menu </h1>
    <div class="flex">
      <div class="dish">
        <h2>Cuates</h2>
        <p>Two big tacos</p>
        <img src="./static/cuates.png">
        <p class="tortilla">- Flour or corn tortilla -</p>
        <div class="ingredients">Arrachera, Avocado and White Cheese</div>
      </div>
      
      <div class="dish">
        <h2>Piratas</h2>
        <p>One giant taco</p>
        <img src="./static/pirata.png">
        <p class="tortilla">- Flour or corn tortilla -</p>
        <div class="ingredients">Arrachera, Avocado and White Cheese</div>
      </div>
    
      <div class="dish">
        <h2>Frijoles</h2>
        <p>Traditional frijoles a la charra</p>
        <img src="./static/frijoles.png">
        <div class="ingredients">Beans, Bacon, Chilli, Pork Scratchings</div>
    </div>
        
      <div class="dish">
        <h2>Special Tacos</h2>
        <p>Order of 5 tacos</p>
        <img src="./static/special-tacos.png">
        <p class="tortilla">- Flour or corn tortilla -</p>
        <div class="ingredients">Arrachera, Avocado, White Cheese and grilled onion</div>
      </div>
      
      <div class="dish">
        <h2>Regular Tacos</h2>
        <p>Order of 5 tacos</p>
        <img src="./static/regular-tacos.png">
        <p class="tortilla">- Flour or corn tortilla -</p>
        <div class="ingredients">Arrachera and grilled onion</div>
    </div>

      <div class="dish">
        <h2>Special Baked Potato</h2>
        <p>The classic baked potato</p>
        <img src="./static/potato.png">
        <div class="ingredients">Cheddar cheese, white cheese, butter, cream, arrachera and bacon</div>
    </div>

      <div class="dish">
        <h2>Hamburger</h2>
        <p>The classic hamburger</p>
        <img src="./static/hamburger.png">
        <div class="ingredients">Meat, avocado, lettuce, tomato, pickles and onion</div>
    </div>
  </div>`;

    return menu
}
export { menuTab }