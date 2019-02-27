/**
 * Processes submitted pending lists
 */

import getJulRange from './julian/currJulRange';
import validateJul from './julian/validateJul';

import parseInput from './parseInput/parseInput';
import updatePendings from './updatePendings/updatePendings';

function init() {
    const currJulRange = getJulRange();
    this.state.config.julRange = {...currJulRange};
}

/**
 * 
 * @param {string} prevInput 
 * @param {string} currInput 
 * @returns {Object} Pending list object. 
 */
function buildUpdatedPending(prevInput, currInput) {
    const prevPendingList = parseInput(prevInput);
    const currPendingList = parseInput(currInput);
    const updatedPendingList = updatePendings(prevPendingList, currPendingList);
    if (updatedPendingList) {
        this.state.pendingList = updatedPendingList;
    }
}

function getPendingList() {
    return this.state.pendingList;
}

function getConfig() {
    return this.state.config;
}

const PendingModel = {
    state: {
        error: false,
        pendingList: null,
        config: {
            julRange: {
                julBegin: null,
                julEnd: null
            }
        }
    },
    init: init,
    buildUpdatedPending: buildUpdatedPending,
    getPendingList: getPendingList,
    getConfig: getConfig
}

window.state = PendingModel;

export default PendingModel;
