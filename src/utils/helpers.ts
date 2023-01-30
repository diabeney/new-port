export function getElement<T extends HTMLElement>(selector: string): T | null {
    let element: T | null = document.querySelector(selector);
    if(element === null) null;
    return element 
}

export function getAllElements<T extends HTMLElement>(selectors: string): T[]  {
    const element: T[] | null = Array.from(document.querySelectorAll(selectors));
    if(!element) return [];
    return element;
}

export const isALinkOrButton = (target: HTMLButtonElement | HTMLAnchorElement) => {
    const tagName = target.tagName.toLowerCase();
    if(tagName === 'a' || tagName === 'button') return true;
    else return false;
} 