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
    } else if (julEnd >= julBegin) {
        return (jul >= julBegin && jul <= julEnd)
    } else if (julEnd < julBegin) {
        return (jul >= julBegin) || (jul <= julEnd)
    }
}
