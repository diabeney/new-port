import { getAllElements, getElement } from "./utils/helpers";
import { getManyElements } from "./utils/helpers";
import { modifyAttribute } from "./utils/helpers";
// import { getElement } from "./utils/helpers";
import { animate } from "./utils/helpers";
const [, menuBtn, navbar] = getManyElements('#app', '.menu-bg', 'nav');



menuBtn.addEventListener('click', () => {
    const menuBars = getAllElements('.menu-bar');
    const navIsVisible = navbar.getAttribute('data-open') === 'true';
    const li = getAllElements('li');
    const ul = getElement('#nav-ul');
    if (navIsVisible) {
            modifyAttribute(navbar, 'data-open', 'false');
            menuBars.forEach(bar => modifyAttribute(bar, 'data-rotate', 'false'));
    } else {
            li.forEach(list => animate(list, 'fadeOut').then(msg => console.log(msg))); 
            menuBars.forEach(bar => modifyAttribute(bar, 'data-rotate', 'true'));
            navbar.setAttribute('data-open', 'true');
    }
})

