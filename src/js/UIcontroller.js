import {Templates as templates} from './models/Templates'

/** Highlighting rules */
let rules = {

}

export const elements = {
    inputOld: document.querySelector('.prev-text'),
    inputNew: document.querySelector('.curr-text'),
    result: document.querySelector('.result-text'),
    readOldButton: document.querySelector('.getOld'),
    copyButton: document.querySelector('.copy')
}

/**  Returns value of pending inputs 
 *   Output: [oldtext, newtext]
*/
export const readInput = () => {
    return [elements.inputOld.value, elements.inputNew.value];
}

export const displayResults = (currentPending) => {
    clearResultsDisplay();
    for (let wks in currentPending) {

        /** Display wks header */
        const header = templates.genWKSHeader('---', wks, currentPending[wks].length);
        elements.result.insertAdjacentHTML('beforeend',
            `<div>
            ${header}
            </div>`
            )

        let els = currentPending[wks].map(createElement);
        
        els.forEach( (el) => {
                elements.result.insertAdjacentElement('beforeend', el);
                elements.result.insertAdjacentHTML('beforeend', `<br>`)
            }
        )
    }
}

const createElement = (spec) => {
    let newLine = document.createElement("span");
    // newLine.classList.add("line");
    let newText = document.createTextNode(
        `N,   ${spec.line} ${spec.res ? spec.res : ''}`
    );

    newLine.appendChild(newText);
    return newLine;
}

const clearResultsDisplay = () => {
    elements.result.innerHTML = "";
}

export const copyResults = () => {
    /**
     * Copys results to user clipboard
     */
}