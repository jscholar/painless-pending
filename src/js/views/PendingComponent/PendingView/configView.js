import { elements } from '../Elements'

export const updateJulDisplay = (julRange) => {
    formatJul(elements.julBeginInput, julRange.begin);
    formatJul(elements.julEndInput, julRange.end);
}

const formatJul = (el, jul) => el.value = jul ? ("000" + jul).slice(-3) : null;


export const getJulianInput = () => {
    return { 
        begin: elements.julBeginInput.value,
        end: elements.julEndInput.value
    }
}
