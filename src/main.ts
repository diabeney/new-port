function getElement(target: string) {
    let element = document.querySelector(target);
    if(element === null) return;
    return element
}

function getAllElements(targets: string) {
    const element = document.querySelectorAll(targets);
    if(!element) return null;
    return Array.from(element)
}
