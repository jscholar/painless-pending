export const elements = {
    inputOld: document.querySelector('.input-old'),
    inputNew: document.querySelector('.input-new'),
    readOldButton: document.querySelector('.getOld')
}

// Returns value of old pending input
export const readOld = () => {
    return elements.inputOld.value;
}