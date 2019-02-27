

import PendingModel from './PendingModel/PendingModel';
import PendingView, {elements} from './PendingView/pendingView';

function init() {
    PendingModel.init();

    /* Setup Event Listeners */
    elements.updatePendingBtn.addEventListener('click', updatePending);
}

function updatePending() {
    const [prevInput, currInput] = PendingView.readInput();
    PendingModel.buildUpdatedPending(prevInput, currInput);
}

const PendingComponent = {
    init: init
}

export default PendingComponent;
