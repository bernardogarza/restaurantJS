const aboutTab = () => {
  const aboutDiv = document.createElement('div');
  aboutDiv.classList.add('about');
  aboutDiv.innerHTML = `<h1>Who are we?</h1>
  <p>In 1984 we open our doors in the city of Monterrey, N.L., with a small branch with a capacity for 20 people and the menu was just hamburgers and french fries.<br>In 1990, looking for a bigger menu and more choices for our clients, the arrachera tacos arrived, being our clients favorite. We stand out for our food quality in all of our products, being a 100% family restaurant and our good service.</p>
  <img src="./static/about.png">`;
  return aboutDiv;
};

export { aboutTab };
