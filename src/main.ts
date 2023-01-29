import { getElement, getAllElements } from "./utils/helpers";
const APP = getElement<HTMLDivElement>('#app')!;


const cursorPath = getElement('#cursor');

APP.addEventListener('mousemove', (e: MouseEvent) => {
    if(cursorPath === null) null; 
    else{
        cursorPath.style.left = '' + e.clientX + 'px';
        cursorPath.style.top = '' + e.clientY + 'px';
    } 
} )
const circle = getElement('#cursor svg circle')!;


