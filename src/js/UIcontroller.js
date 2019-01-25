import {Templates as templates} from './models/Templates'

/** Highlighting rules */
let rules = {

}

export const elements = {
    inputPrevious: document.querySelector('.prev-text'),
    inputCurrent: document.querySelector('.curr-text'),
    result: document.querySelector('.result-text'),
    readOldButton: document.querySelector('.getOld'),
    copyButton: document.querySelector('.copy')
}

export const initUI = () => {
    elements.inputPrevious.placeholder += 
    `




   Example:

    10-SEP-2018       WS # 1157 FECAL FAT SCREN - 5 Pending Build                   
    Status  Specimen #      Account# Patient Name <Sex/Age>
   ------  --------------  -------- ------------------------------
   N,      555-555-5555-0  55555555 PATIENT,PATIENT <?,??> ASDF | 1234
   N,      555-555-5555-0  55555555 PATIENT,PATIENT <?,??> ASDF | 1234

    10-SEP-2018     WS # 3249 GI PROFILE STOOL PCR - 2 Pending Build                
    Status  Specimen #      Account# Patient Name <Sex/Age>
   ------  --------------  -------- ------------------------------
   N,      555-555-5555-0  55555555 PATIENT,PATIENT <?,??> ASDF | 1234
   N,      555-555-5555-0  55555555 PATIENT,PATIENT <?,??> ASDF | 1234
    `
}

/**  Returns value of pending inputs 
 *   Output: [oldtext, newtext]
*/
export const readInput = () => {
    return [elements.inputPrevious.value, elements.inputCurrent.value];
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
        templates.genPendLine(spec.line, spec.res ? spec.res : '')
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