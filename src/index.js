/**
 * A simple web-app to assist with pending
 */

import './css/style.css'
import  specHandler from './js/specHandler'
import { elements, readInput, copyResults, initUI, invalidInput, getJulianInput, clearResultsDisplay, printWKSHeader, printPendingLine, updateJulDisplay } from './js/UIcontroller'
import { buildPending } from './js/parser'
import { updatePending } from './js/updater'
import { currentJulDay, validJul} from './js/julianCalc'

let state = {
    pending: {
        prev: {},
        curr: {}
    },
    julRange: {
        begin: null,
        end: null,
        days: 14
    },
    filters: [
        {
            keyword: null,
            color: '#DDDDDD'
        }
    ]
}

/*  Setup event handlers */
 {
     elements.updatePendingBtn.addEventListener('click', processText);

     elements.julApply.addEventListener('click', displayResults);

     /** Additions, removals, or changes to any filter are bubbled up to filters element  */
     elements.julFilters.addEventListener('change', updateJulianRange);

     window.addEventListener("load", init);
 }

function processText() {
     [state.pending.prev, state.pending.curr] = [{}, {}];

    /* Get text from input */
    let [oldText, newText] = readInput();

    if (oldText.length && newText.length) {

        /* Get Pendings object */
        state.pending.prev = buildPending(oldText, 'previous');
        state.pending.curr = buildPending(newText, 'current');

        /* Update current pendings with previous resolutions */
        updatePending(state.pending);

    } else {
        invalidInput();
    }

    displayResults();

}

function displayResults() {
    clearResultsDisplay();

    for (let wks in state.pending.curr) {

        
        printWKSHeader(wks, state.pending.curr[wks].length)

        state.pending.curr[wks].forEach((spec) => {

            const el = specHandler(spec, state.julRange, state.filters);

            if (el) {
                printPendingLine(el);
            }
        });
    }
}

function updateJulianRange() {
    const {begin, end} = {...getJulianInput()};
    state.julRange.begin = validJul(begin);
    state.julRange.end = validJul(end);
    updateJulDisplay(state.julRange);
}

function init() {
    state.julRange.days = 14;
    state.julRange.end = currentJulDay() - 2;
    state.julRange.begin = state.julRange.end - state.julRange.days
    initUI(state.julRange); 
}