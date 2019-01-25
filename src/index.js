/**
 * A simple web-app to assist with pending
 */

import './css/style.css'
import { elements, readInput, copyResults, displayResults } from './js/UIcontroller'
import { buildPending } from './js/parser'
import { updatePending } from './js/updater'

/*  Setup event handlers */
 {
     elements.readOldButton.addEventListener('click', processText)
     elements.copyButton.addEventListener('click', copyResults)
 }

 {
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