import hero from './hero';
import menu from './menu';
import about from './about';

// create links and declare variables
const content = document.getElementById('content');
let homeLink = document.createElement('li');
let menuLink = document.createElement('li');
let aboutLink = document.createElement('li');

// main container
const mainContainer = document.createElement('div');
mainContainer.classList.add('mainContainer'); 

// header function
function header() {
    const header = document.createElement('header');
    const navbar = document.createElement('nav');
    const uList = document.createElement('ul');
    homeLink.textContent = 'Home';
    menuLink.textContent = 'Menu';
    aboutLink.textContent = 'About';
    uList.appendChild(homeLink);
    uList.appendChild(menuLink);
    uList.appendChild(aboutLink);
    navbar.appendChild(uList);
    header.appendChild(navbar);
    return header;
}

const heroContainer = hero();
content.appendChild(header());
mainContainer.appendChild(heroContainer);
content.appendChild(mainContainer);


// Event listeners
homeLink.addEventListener('click', () => {
    // Check if content has heroContainer as a child
    if (!mainContainer.contains(hero())) {
        // Replace content with header
        mainContainer.textContent = '';
        mainContainer.appendChild(hero());
    }
});

menuLink.addEventListener('click', () => {
    // Check if content has header as a child
    if (!mainContainer.contains(menu())) {
        // Replace content with header
        mainContainer.textContent = '';
        mainContainer.appendChild(menu());
    }
});

aboutLink.addEventListener('click', () => {
    // Check if content has header as a child
    if (!mainContainer.contains(about())) {
        // Replace content with header
        mainContainer.textContent = '';
        mainContainer.appendChild(about());
    }
});