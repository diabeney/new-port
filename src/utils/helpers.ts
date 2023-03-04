//non-null assertions are intentional

export function getElement<T extends HTMLElement>(selector: string): T {
    let element: T = document.querySelector(selector)!;
    return element 
}
/**
 * Returns an array of all the instances of the selector
 */

export function getAllElements<T extends Element>(selectors: string): T[]  {
    const element: T[] = Array.from(document.querySelectorAll(selectors));
    if(!element) return [];
    return element;
}

/**
 * Selects different elements using different selectors
 * @param selectors strings of different selectors
 * @returns an array of DOM Elements
 */

export function getManyElements(...selectors: string[]) {
    const elements = selectors.map(selector => getElement(selector));
    return elements;
}

export function isParentElement(parentElement: Element) {
    const childNodes = Array.from(parentElement.childNodes);
    return childNodes.length ? true : false
}

export function shouldStagger(element: Element) {
    const staggerAttr = element.getAttribute('data-stagger');
    return staggerAttr === 'true' ? true : false;
}