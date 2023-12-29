export default function menu() {
    const menu = document.createElement('div');
    menu.classList.add('menu-container');
    // naruRamen
    const naruRamen = document.createElement('div');
    naruRamen.classList.add('card');
    const naruTitle = document.createElement('h3');
    naruTitle.classList.add('title');
    naruTitle.textContent = 'NaruRamen!'
    const naruPrice = document.createElement('p');
    naruPrice.classList.add('price')
    naruPrice.textContent = '$8.99';
    const naruDescription = document.createElement('p');
    naruDescription.classList.add('info');
    naruDescription.textContent = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit repudiandae rem tenetur esse error consequuntur libero enim repellendus, harum nihil deleniti labore voluptates, tempora sit voluptatum quibusdam qui, molestias maiores.';
    const naruImage = document.createElement('img');
    naruImage.src = 'burger.png';
    naruImage.alt = 'Naru Ramen Image';
    naruRamen.appendChild(naruImage);
    naruRamen.appendChild(naruTitle);
    naruRamen.appendChild(naruPrice);
    naruRamen.appendChild(naruDescription);
    // sakuRamen
    const sakuRamen = document.createElement('div');
    sakuRamen.classList.add('card');
    const sakuTitle = document.createElement('h3');
    sakuTitle.classList.add('title');
    sakuTitle.textContent = 'NaruRamen!'
    const sakuPrice = document.createElement('p');
    sakuPrice.classList.add('price')
    sakuPrice.textContent = '$8.99';
    const sakuDescription = document.createElement('p');
    sakuDescription.classList.add('info');
    sakuDescription.textContent = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit repudiandae rem tenetur esse error consequuntur libero enim repellendus, harum nihil deleniti labore voluptates, tempora sit voluptatum quibusdam qui, molestias maiores.';
    const sakuImage = document.createElement('img');
    sakuImage.src = 'burger.png';
    sakuImage.alt = 'Saku Ramen Image';
    sakuRamen.appendChild(sakuImage);
    sakuRamen.appendChild(sakuTitle);
    sakuRamen.appendChild(sakuPrice);
    sakuRamen.appendChild(sakuDescription);
    // sasuRamen
    const sasuRamen = document.createElement('div');
    sasuRamen.classList.add('card');
    const sasuTitle = document.createElement('h3');
    sasuTitle.classList.add('title');
    sasuTitle.textContent = 'NaruRamen!'
    const sasuPrice = document.createElement('p');
    sasuPrice.classList.add('price')
    sasuPrice.textContent = '$8.99';
    const sasuDescription = document.createElement('p');
    sasuDescription.classList.add('info');
    sasuDescription.textContent = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit repudiandae rem tenetur esse error consequuntur libero enim repellendus, harum nihil deleniti labore voluptates, tempora sit voluptatum quibusdam qui, molestias maiores.';
    const sasuImage = document.createElement('img');
    sasuImage.src = 'burger.png';
    sasuImage.alt = 'sasu Ramen Image';
    sasuRamen.appendChild(sasuImage);
    sasuRamen.appendChild(sasuTitle);
    sasuRamen.appendChild(sasuPrice);
    sasuRamen.appendChild(sasuDescription);
    // kakaRamen
    const kakaRamen = document.createElement('div');
    kakaRamen.classList.add('card');
    const kakaTitle = document.createElement('h3');
    kakaTitle.classList.add('title');
    kakaTitle.textContent = 'NaruRamen!'
    const kakaPrice = document.createElement('p');
    kakaPrice.classList.add('price')
    kakaPrice.textContent = '$8.99';
    const kakaDescription = document.createElement('p');
    kakaDescription.classList.add('info');
    kakaDescription.textContent = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit repudiandae rem tenetur esse error consequuntur libero enim repellendus, harum nihil deleniti labore voluptates, tempora sit voluptatum quibusdam qui, molestias maiores.';
    const kakaImage = document.createElement('img');
    kakaImage.src = 'burger.png';
    kakaImage.alt = 'kaka Ramen Image';
    kakaRamen.appendChild(kakaImage);
    kakaRamen.appendChild(kakaTitle);
    kakaRamen.appendChild(kakaPrice);
    kakaRamen.appendChild(kakaDescription);
    // append to menu container && return menu
    menu.appendChild(naruRamen);
    menu.appendChild(sakuRamen);
    menu.appendChild(sasuRamen);
    menu.appendChild(kakaRamen);
    return menu;
}