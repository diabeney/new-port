//non-null assertions are intentional

export function getElement<T extends HTMLElement>(selector: string): T {
    let element: T = document.querySelector(selector)!;
    return element 
}
/**
 * Returns an array of all the instances of the selector
 */

export function getAllElements<T extends HTMLElement>(selectors: string): T[]  {
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
/**
 * Gets the value of an attribute if the value parameter is not provided, if a value is specified it assigns the new value to the attribute.
 * @param element Target Element
 * @param attr Attribute to be modified, usually data attributes
 * @param value  Attribute's new value
 * @returns the value of an attribute or void
 */

export function modifyAttribute(element: HTMLElement, attr: string, value?:string) {
    const attribute = element.getAttribute(attr)!;
    if(value) return element.setAttribute(attr, value);
    return attribute;
}

export function animate(element: HTMLElement | string, animation: string) {
   return new Promise((resolve) => {
        const animationName = `animate__${animation}`;
        const target = typeof element === 'string' ? getElement(element) : element;
        target.classList.add('animate__animated', animationName);

        target.addEventListener('animationend', (e) => {
            e.stopPropagation();
            target.classList.remove(`animate__animated`, animationName);
            resolve('Animation ended');
        }, {once: true})
    })
}