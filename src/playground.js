import { Helper } from "./helpers/helper.js";

const generateButtonElement = document.getElementById('generate');
const updateButtonElement = document.getElementById('update');
const cloneButtonElement = document.getElementById('clone');
const outputElement = document.getElementById('output');
const clonedOutputElement = document.getElementById('clonedOutput');

let personObject;
let helper = new Helper();

generateButtonElement.addEventListener('click', () => {
    personObject = helper.generateObject();
    outputElement.innerHTML = `<p>${Object.entries(personObject).map(([key, value]) => `${key}: ${value}`).join('<br>')}</p>`;
});

updateButtonElement.addEventListener('click', () => {
    personObject = helper.updateNameProperty(personObject);
    outputElement.innerHTML = `<p>${Object.entries(personObject).map(([key, value]) => `${key}: ${value}`).join('<br>')}</p>`;
});

cloneButtonElement.addEventListener('click', () => {
    const clonedPersonObject = Object.assign({}, personObject);
    clonedOutputElement.innerHTML = `<p>${Object.entries(clonedPersonObject).map(([key, value]) => `${key}: ${value}`).join('<br>')}</p>`;
});