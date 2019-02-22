
import Elements from '../Elements'

import PendingTemplate from './Template/PendingTemplate'

import processText from './InputProcessor/processText'
import InitUI from './pendingUI/InitUI'


/**
 * Testing jsdocs
 */
function init() {
    {
        Elements.pendingContainer.innerHTML = PendingTemplate;
    }
    return;
}

function buildUpdatedPending() {
    const prevPendingList = processText(Elements.inputPrevious.value);
}

const PendingView = {
    state: {
        error: false,
        pending: null,
    },
    
    init: init,
    buildUpdatedPending: buildUpdatedPending
}

export default PendingView;
