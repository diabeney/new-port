import { getAllElements, getElement, getManyElements } from "./utils/helpers";
import { isParentElement, shouldStagger } from "./utils/helpers";

const dateElement = getElement('.date');
dateElement.textContent += new Date().getFullYear().toString();

// <------- Animations ------------>

let INTERVALID:number | undefined;

function staggerChildren(parentElement: Element, animationName: string) {
    const childNodes = Array.from(parentElement.children).filter(element => element.tagName.toLowerCase() !== 'br');
    let count = 0;
    if(childNodes.length) {
        INTERVALID =  setInterval(() => {
            let currentElement = childNodes[count];
            currentElement.classList.add('animate__animated', animationName);
            count++
            if(count === childNodes.length) {
                clearInterval(INTERVALID)
            }
        }, 800)
    }
}

/*
    Trying to make the intersection callback function generic
 */

function intersectionCallback(entries: IntersectionObserverEntry[], observer: IntersectionObserver) {
    entries.forEach(entry => {
        if(!entry.isIntersecting) return; // animate only when the element is intersecting.
        const dataset = entry.target.getAttribute('data-intersect');
        switch(dataset) {
            case 'fade':
                // entry.target.classList.add('animate__animated', 'animate__fadeIn');
                if(isParentElement(entry.target) && shouldStagger(entry.target)) {
                    staggerChildren(entry.target, 'animate__fadeInUp')
                }
                return;
                case 'zoom':
                    // entry.target.classList.add('animate__animated', 'animate__slideInLeft');
                    if(isParentElement(entry.target) && shouldStagger(entry.target)) {
                        staggerChildren(entry.target, 'animate__slideInUp')
                    }
                return;
            default:
                console.log('data attribute not specified')
        }
        observer.unobserve(entry.target) // unobserving to make sure the animation runs only once.
    })
}

const fadeInOptions = {
    threshold: .5,
}

const [hero, projects] = getManyElements('.hero', '.projects')


const fadeInOnScroll = new IntersectionObserver(intersectionCallback, fadeInOptions);
fadeInOnScroll.observe(hero);
fadeInOnScroll.observe(projects)


