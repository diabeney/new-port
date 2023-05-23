import { getAllElements, getElement, getManyElements } from "./utils/helpers";
import { isParentElement, shouldStagger } from "./utils/helpers";

const dateElement = getElement(".date");
const links = getAllElements("a");
dateElement.textContent += new Date().getFullYear().toString();
links.forEach((link) => link.setAttribute("target", "_blank"));

// <------- Animations ------------>
let INTERVALID: number;

function stopAnimation() {
  clearInterval(INTERVALID);
  INTERVALID = 0;
}

function staggerChildren(parentElement: Element, animationName: string) {
  const childNodes = Array.from(parentElement.children).filter(
    (element) => element.tagName.toLowerCase() !== "br"
  );
  if (childNodes.length) {
    if (!INTERVALID) {
      let count = 0;
      INTERVALID = setInterval(() => {
        let currentElement = childNodes[count];
        currentElement.classList.add("animate__animated", animationName);
        count++;
        if (count === childNodes.length) {
          stopAnimation();
        }
      }, 800);
    }
  }
}

/*
    Trying to make the intersection callback function reusable
 */

function intersectionCallback(
  entries: IntersectionObserverEntry[],
  observer: IntersectionObserver
) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return; // animate only when the element is intersecting.
    const dataset = entry.target.getAttribute("data-intersect");
    switch (dataset) {
      case "fadeup":
        if (isParentElement(entry.target) && shouldStagger(entry.target)) {
          return staggerChildren(entry.target, "animate__fadeInUp");
        }
        entry.target.classList.add("animate__animated", "animate__slideInLeft");
        observer.unobserve(entry.target);
        return;
      case "fadein":
        if (isParentElement(entry.target) && shouldStagger(entry.target)) {
          return staggerChildren(entry.target, "animate__fadeIn");
        }
        entry.target.classList.add("animate__animated", "animate__fadeIn");
        observer.unobserve(entry.target); // unobserving to make sure the animation runs only once.
        return;
      case "bouncein": // intentionally neglecting support for staggerChildren.
        entry.target.classList.add("animate__animated", "animate__bounceIn");
        observer.unobserve(entry.target);
        return;
      default:
        console.log("data attribute not specified");
        return;
    }
  });
}

const OPTIONS = {
  Fade: {
    threshold: 0.2,
  },
  Bounce: {
    threshold: 1,
  },
};

const faders = getManyElements(
  ".hero",
  ".projects",
  ".content > h2",
  ".skills h2",
  ".info"
);
const bouncer = getElement(".footer");

const fadeInOnScroll = new IntersectionObserver(
  intersectionCallback,
  OPTIONS.Fade
);
const bounceInOnScroll = new IntersectionObserver(
  intersectionCallback,
  OPTIONS.Bounce
);
faders.forEach((fader) => fadeInOnScroll.observe(fader));
bounceInOnScroll.observe(bouncer);
