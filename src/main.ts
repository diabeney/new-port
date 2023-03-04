import { getAllElements, getElement, getManyElements } from "./utils/helpers";
import { isParentElement, shouldStagger } from "./utils/helpers";

const dateElement = getElement('.date');
dateElement.textContent += new Date().getFullYear().toString();

// <------- Animations ------------>
let INTERVALID:number;

function stopAnimation() {
    clearInterval(INTERVALID);
    INTERVALID = 0;
}


function staggerChildren(parentElement: Element, animationName: string) {
    const childNodes = Array.from(parentElement.children).filter(element => element.tagName.toLowerCase() !== 'br');
    if(childNodes.length) {
        if(!INTERVALID) {
            let count = 0;
            INTERVALID =  setInterval(() => {
                let currentElement = childNodes[count];
                currentElement.classList.add('animate__animated', animationName);
                count++
                if(count === childNodes.length) {
                    stopAnimation()
                }
            }, 800)
        }
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
            case 'fadeup':
                if(isParentElement(entry.target) && shouldStagger(entry.target)) {
                    staggerChildren(entry.target, 'animate__fadeInUp')
                } 
                entry.target.classList.add('animate__animated', 'animate__fadeInUp');
                // observer.unobserve(entry.target) // unobserving to make sure the animation runs only once.
                return;
            case 'fadein':
                if(isParentElement(entry.target) && shouldStagger(entry.target)) {
                    staggerChildren(entry.target, 'animate__fadeIn')
                }
                entry.target.classList.add('animate__animated', 'animate__fadeIn');
                // observer.unobserve(entry.target) // unobserving to make sure the animation runs only once.
                return;
            default:
                console.log('data attribute not specified');
                return;
        }
    })
}

const fadeInOptions = {
    threshold: .8,
}

const faders = getManyElements('.hero', '.projects', '.content > h2', '.skills h2', '.info', '.info ul');


const fadeInOnScroll = new IntersectionObserver(intersectionCallback, fadeInOptions);
faders.forEach(fader => fadeInOnScroll.observe(fader))


