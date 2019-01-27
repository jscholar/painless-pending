/** Handles passed Specimen objects and returns
 * processed element or null.
 */

import { genPendLine } from './models/Templates'

export default function specHandler(spec, julRange, filters) {
    if (!julInRange(spec.jul, julRange.begin, julRange.end)) {
        return null;
    }
    return createElement(spec, filters);
}

const julInRange = (jul, julBegin, julEnd) => {
    if (!julBegin || !julEnd) {
        return true;
    } else if (julEnd > julBegin) {
        return (jul >= julBegin && jul <= julEnd)
    } else if (julEnd <= julBegin) {
        return (jul > julBegin) || (jul < julEnd)
    }
}

const createElement = (spec, filters) => {
    let newLine = document.createElement("span");

    let newText = document.createTextNode(
        genPendLine(spec.line, spec.res ? spec.res : '')
    );
    newLine.appendChild(newText);
    if (!spec.res) {
        newLine.style.backgroundColor = filters[0].color;
    }

    return newLine;
}
