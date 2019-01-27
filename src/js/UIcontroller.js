import {genWKSHeader, UITemplates} from './models/Templates'
import specHandler from './specHandler'

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

export const initUI = () => {
    document.querySelector('body').classList.remove("preload");
    elements.inputPrevious.placeholder += UITemplates.inputPlaceHolder;
}

/**  Returns value of pending inputs 
 *   Output: [oldtext, newtext]
*/
export const readInput = () => {
    return [elements.inputPrevious.value, elements.inputCurrent.value];
}

export const displayResults = (state, currentPending) => {
    clearResultsDisplay();
    for (let wks in currentPending) {

        /** Display wks header */
        const header = genWKSHeader('---', wks, currentPending[wks].length);
        elements.result.insertAdjacentHTML('beforeend', `<div>${header}</div>`)

        currentPending[wks].forEach( (spec) => {
            let el = specHandler(spec, rules);
            if (el) {
                elements.result.insertAdjacentElement('beforeend', el);
                elements.result.insertAdjacentHTML('beforeend', `<br>`)
            }
        })

        elements.result.insertAdjacentHTML('beforeend', `<br>`)
    }
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

export const formatJul = (e) => {
    if (e.value < 1) {
        e.value = 1;
    }
    e.value = ("000" + e.value).slice(-3);
}

const fillDays = () => {
    if (rules.julRange.begin > rules.julRange.end) {
        rules.julRange.days = (365 - rules.julRange.begin) + rules.julRange.end;
    } else {
        rules.julRange.days = rules.julRange.end - rules.julRange.begin;
    }
}

const fillBegin = () => {
    rules.julRange.begin = rules.julRange.end - rules.julRange.days <= 0 ? 
    365 - (rules.julRange.days - rules.julRange.end ) :
    rules.juleRange.end - rules.juleRange.days;
}



const clearResultsDisplay = () => {
    elements.result.innerHTML = "";
}

