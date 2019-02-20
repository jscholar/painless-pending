/**
 * A simple web-app to assist with pending
 */

import './css/style.css'
import  specHandler from './js/specHandler'
import { initUI, elements } from './js/views/baseUI'
import * as pendingView from './js/views/pendingView'
import * as configView from './js/views/configView'
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
    config: {
        'null': {
            keyword: 'null',
            backgroundColor: '#DDDDDD',
            fontStyle: 'Italic',
            color: 'red'
        }
    }
}

/*  Setup event handlers */
 {
     elements.updatePendingBtn.addEventListener('click', processText);

     // Re-render display upon change to config
     elements.applyConfig.addEventListener('click', () => {
         pendingView.displayPending();
     });

     /** Additions, removals, or changes to any filter are bubbled up to filters element  */
     elements.julConfig.addEventListener('change', updateJulianRange);

     window.addEventListener("load", init);
 }

function processText() {
    [state.pending.prev, state.pending.curr] = [{}, {}];
    pendingView.clearResultsDisplay();

    /* Get text from input */
    let [oldText, newText] = pendingView.readInput();
    if (newText.length > 0) {

        /* Get Pendings object */
        state.pending.prev = buildPending(oldText, 'previous');
        state.pending.curr = buildPending(newText, 'current');

        /* Update current pendings with previous resolutions */
        updatePending(state.pending);

    } else {
        pendingView.invalidInput();
    }
    pendingView.displayPending(state.pending.curr, state.config);
}


function updateJulianRange() {
    const {begin, end} = {...configView.getJulianInput()};
    state.julRange.begin = validJul(begin);
    state.julRange.end = validJul(end);
    configView.updateJulDisplay(state.julRange);
}

function init() {
    state.julRange.days = 14;
    state.julRange.end = currentJulDay() - 2;
    state.julRange.begin = state.julRange.end - state.julRange.days
    initUI(state.julRange); 
}