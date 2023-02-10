import { getAllElements } from "./utils/helpers";
import { getManyElements } from "./utils/helpers";
import { modifyAttribute } from "./utils/helpers";
const [, menuBtn, navbar] = getManyElements('#app', '.menu-bg', 'nav');


menuBtn.addEventListener('click', () => {
    const menuBars = getAllElements('.menu-bar');
    const navIsVisible = navbar.getAttribute('data-open') === 'true';
    if (navIsVisible) {
        modifyAttribute(navbar, 'data-open', 'false');
        menuBars.forEach(bar => modifyAttribute(bar, 'data-rotate', 'false'));
    } else {
        menuBars.forEach(bar => modifyAttribute(bar, 'data-rotate', 'true'));
        navbar.setAttribute('data-open', 'true')
    }
})

