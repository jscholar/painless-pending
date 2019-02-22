

import InputProcessor from './InputProcessor/InputProcessor'
import InitUI from './pendingUI/InitUI'


/**
 * Testing jsdocs
 */
function init() {
    return;
}

function buildUpdatedPending() {
    return
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
