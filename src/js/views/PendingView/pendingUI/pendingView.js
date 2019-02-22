import {elements} from '../baseUI'
import { genPendLine, genWKSHeader } from './../models/Templates'

export const readInput = () => {
    return [elements.inputPrevious.value, elements.inputCurrent.value];
}

export const invalidInput= () => {
    clearResultsDisplay();
    elements.result.insertAdjacentText('afterbegin', 'Invalid Input');
}

export const displayPending = (pending, config) => {
    for (let wks in pending) {
        printWKSHeader(wks, pending[wks].length)
        pending[wks].forEach(spec => {
            const element = createElement(spec, config);
            printPendingLine(element);
        })
    }
}

const printWKSHeader = (wks, length) => {
    elements.result.insertAdjacentHTML('beforeend', `<br>`)
        /** Display wks header */
    const header = genWKSHeader('---', wks, length);
    elements.result.insertAdjacentHTML('beforeend', `<div>${header}</div>`)
}

const printPendingLine = (line) => {
    elements.result.insertAdjacentElement('beforeend', line);
}


export const copyResults = () => {
    /**
     * Copy results to user clipboard
     */
}

export const clearResultsDisplay = () => {
    elements.result.innerHTML = "";
}

const julInRange = (jul, julBegin, julEnd) => {
    if (!julBegin || !julEnd) {
        return true;
    } else if (julEnd >= julBegin) {
        return (jul >= julBegin && jul <= julEnd)
    } else if (julEnd < julBegin) {
        return (jul >= julBegin) || (jul <= julEnd)
    }
}

const createElement = (spec, config) => {
    let newLine = document.createElement("p");

    let newText = document.createTextNode(
        genPendLine(spec.line, spec.res ? spec.res : '')
    );
    newLine.appendChild(newText);
    if (!spec.res) {
        for (let s in config['null']) {
            newLine.style[s] = config['null'][s];
        }
    }

    return newLine;
}
