/**
 * A simple web-app to assist with pending
 */

import './css/style.css'
import { elements, readInput, copyResults, displayResults, initUI } from './js/UIcontroller'
import { buildPending } from './js/parser'
import { updatePending } from './js/updater'

/*  Setup event handlers */
 {
     init();
     elements.readOldButton.addEventListener('click', processText)
     elements.copyButton.addEventListener('click', copyResults)
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
        console.log(currentPending);
        displayResults(currentPending);
    } else {
        console.log('no input received');
    }
}

function init() {
    initUI();
}
