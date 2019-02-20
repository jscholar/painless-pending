import { genWKSHeader, UITemplates } from '../models/Templates'
import { updateJulDisplay} from './configView'

/** Highlighting rules */


export const elements = {
    inputPrevious: document.querySelector('.prev-text'),
    inputCurrent: document.querySelector('.curr-text'),
    result: document.querySelector('.result-text'),
    updatePendingBtn: document.querySelector('.updatePendingBtn'),
    copyButton: document.querySelector('.copy'),
    julConfig: document.querySelector('.config-jul'),
    julBeginInput: document.querySelector('#jul-begin'),
    julEndInput: document.querySelector('#jul-end'),
    julRangeInput: document.querySelector('#jul-range'),
    applyConfig: document.querySelector('.config-apply')
}

export const initUI = (julRange) => {
    document.querySelector('body').classList.remove("preload");
    elements.inputPrevious.placeholder += UITemplates.inputPlaceHolder;
    updateJulDisplay(julRange);
}

/**  Returns value of pending inputs 
 *   Output: [oldtext, newtext]
*/
