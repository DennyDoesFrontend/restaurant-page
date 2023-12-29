export default function hero() {
    const heroContainer = document.createElement('div');
    heroContainer.classList.add('hero-div');
    const heroHeader = document.createElement('h1');
    heroHeader.classList.add('hero-header');
    heroHeader.textContent = 'Welcome to Uzumaki Ramen';
    const heroText = document.createElement('p');
    heroText.classList.add('hero-text');
    heroText.innerHTML = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Non quis repellat vero, consequuntur libero earum magnam ratione <br /> deserunt vel quod inventore animi sequi consectetur facilis. Laborum modi error minima aut.';
    // append tags to container
    heroContainer.appendChild(heroHeader);
    heroContainer.appendChild(heroText);
    return heroContainer;
}