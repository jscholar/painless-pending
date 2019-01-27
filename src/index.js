/**
 * A simple web-app to assist with pending
 */

import './css/style.css'
import { currentJulDay } from './js/models/Templates'
import { elements, readInput, copyResults, displayResults, initUI, invalidInput, getJulianInput, formatJul } from './js/UIcontroller'
import { buildPending } from './js/parser'
import { updatePending } from './js/updater'

let state = {
    julRange: {
        begin: null,
        end: null,
        days: null
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

     /** Additions, removals, or changes to any filter are bubbled up to filters element */
     elements.julFilters.addEventListener('change', e => updateJulianRange(e));

     window.addEventListener("load", init);
 }

function processText() {
    let [previousPending, currentPending] = [{}, {}];

    /* Get text from input */
    let [oldText, newText] = readInput();

    if (oldText.length && newText.length) {

        /* Get Pendings object */
        previousPending = buildPending(oldText, 'previous');
        currentPending = buildPending(newText, 'current');

        /* Update current pendings with previous resolutions */
        updatePending(previousPending, currentPending);


        displayResults(state, currentPending);
    } else {
        invalidInput();
    }
}

function updateJulianRange(e) {
    state.julRange = {...getJulianInput()};
    formatJul(e.srcElement);
}

function init() {
    let currJul = currentJulDay();
    initUI(currJul);
}