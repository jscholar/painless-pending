const displayPending = (pending, config) => {
    for (let wks in pending) {
        printWKSHeader(wks, pending[wks].length)
        pending[wks].forEach(spec => {
            const element = createElement(spec, config);
            printPendingLine(element);
        })
    }
}

const printWKSHeader = (wks, length) => {
    elements.result.insertAdjacentHTML('beforeend', `<br>`)
        /** Display wks header */
    const header = genWKSHeader('---', wks, length);
    elements.result.insertAdjacentHTML('beforeend', `<div>${header}</div>`)
}

const printPendingLine = (line) => {
    elements.result.insertAdjacentElement('beforeend', line);
}


const copyResults = () => {
    /**
     * Copy results to user clipboard
     */
}

const clearResultsDisplay = () => {
    elements.result.innerHTML = "";
}

const julInRange = (jul, julBegin, julEnd) => {
    if (!julBegin || !julEnd) {
        return true;
    } else if (julEnd >= julBegin) {
        return (jul >= julBegin && jul <= julEnd)
    } else if (julEnd < julBegin) {
        return (jul >= julBegin) || (jul <= julEnd)
    }
}

function readInput() {
    return [elements.inputPrevious.value, elements.inputCurrent.value];
}

const PendingView = {
    readInput, readInput,
    dislayPending: displayPending
}

export const elements = {
    updatePendingBtn: document.querySelector('.updatePendingBtn'),
    inputPrevious: document.querySelector('.prev-text'),
    inputCurrent: document.querySelector('.curr-text'),
}

export default PendingView;
// export default PendingView;
