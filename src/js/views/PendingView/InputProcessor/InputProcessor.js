/**
 * Processes submitted pending lists
 */

import buildPending from './InputParser/parser';
import inputParser from './InputParser/InputParser';
import PendingUpdater from './PendingUpdater/PendingUpdater';


import Elements from './../Elements'

const textProcessor = () => {
    let error = false;

    const [prevText, currText] = [Elements.inputPrevious.value, Elements.inputCurrent.value]
    const currPendingList = inputParser.parseText(Elements.inputCurrent.value);
    const prevPendingList = inputParser.parseText(Elements.inputPrevious.value);

    const updatedPending = updatePending(prevPendingList, currPendingList);
    return updatedPending;
}

export default textProcessor;
