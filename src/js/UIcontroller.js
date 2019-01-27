import { genWKSHeader, UITemplates } from './models/Templates'

/** Highlighting rules */


export const elements = {
    inputPrevious: document.querySelector('.prev-text'),
    inputCurrent: document.querySelector('.curr-text'),
    result: document.querySelector('.result-text'),
    updatePendingBtn: document.querySelector('.updatePendingBtn'),
    copyButton: document.querySelector('.copy'),
    julFilters: document.querySelector('.filters-jul'),
    julBeginInput: document.querySelector('#jul-begin'),
    julEndInput: document.querySelector('#jul-end'),
    julRangeInput: document.querySelector('#jul-range'),
    julApply: document.querySelector('.jul-apply')
}

export const getJulianInput = () => {
    return { 
        begin: elements.julBeginInput.value,
        end: elements.julEndInput.value
    }
}

export const initUI = (julRange) => {
    document.querySelector('body').classList.remove("preload");
    elements.inputPrevious.placeholder += UITemplates.inputPlaceHolder;

    updateJulDisplay(julRange);

}

/**  Returns value of pending inputs 
 *   Output: [oldtext, newtext]
*/
export const readInput = () => {
    return [elements.inputPrevious.value, elements.inputCurrent.value];
}

export const printPendingLine = (el) => {
    elements.result.insertAdjacentElement('beforeend', el);
    elements.result.insertAdjacentHTML('beforeend', `<br>`)
}

export const printWKSHeader = (wks, length) => {
    elements.result.insertAdjacentHTML('beforeend', `<br>`)
        /** Display wks header */
    const header = genWKSHeader('---', wks, length);
    elements.result.insertAdjacentHTML('beforeend', `<div>${header}</div>`)
}

export const invalidInput= () => {
    clearResultsDisplay();
    elements.result.insertAdjacentText('afterbegin', 'Invalid Input');
}

export const copyResults = () => {
    /**
     * Copy results to user clipboard
     */
}

export const clearResultsDisplay = () => {
    elements.result.innerHTML = "";
}

export const updateJulDisplay = (julRange) => {
    formatJul(elements.julBeginInput, julRange.begin);
    formatJul(elements.julEndInput, julRange.end);
}

export const formatJul = (e, jul) => e.value = jul ? ("000" + jul).slice(-3) : null;
