export default function about() {
    const aboutContainer = document.createElement('div');
    aboutContainer.classList.add('about-container');
    const aboutHeader = document.createElement('h1');
    aboutHeader.textContent = 'More About Us!';
    const aboutInfo = document.createElement('p');
    aboutInfo.textContent = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Non quis repellat vero, consequuntur libero earum magnam ratione <br /> deserunt vel quod inventore animi sequi consectetur facilis. Laborum modi error minima aut.Lorem ipsum dolor sit amet consectetur adipisicing elit. Non quis repellat vero, consequuntur libero earum magnam ratione <br /> deserunt vel quod inventore animi sequi consectetur facilis. Laborum modi error minima aut.Lorem ipsum dolor sit amet consectetur adipisicing elit. Non quis repellat vero, consequuntur libero earum magnam ratione <br /> deserunt vel quod inventore animi sequi consectetur facilis. Laborum modi error minima aut.'
    aboutContainer.appendChild(aboutHeader);
    aboutContainer.appendChild(aboutInfo);
    return aboutContainer;
}