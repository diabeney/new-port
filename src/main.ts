import { getElement } from "./utils/helpers";

const dateElement = getElement('.date');
dateElement.textContent += new Date().getFullYear().toString();