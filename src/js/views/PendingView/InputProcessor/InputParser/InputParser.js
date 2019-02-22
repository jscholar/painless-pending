const exp = {
    regex: {
        specID: /\d\d\d-\d\d\d-\d\d\d\d-\d/,
        res: />(.+\n*.*)(<.+$)?/,
        wks: /^\d\d\d\d(?!-|\d)/,
        line: /.*\w\/\d+>?/,
        wksBreak: /.+WS # *(?=\d\d\d\d)/,
        specBreak: /(?=\d\d\d-\d\d\d-\d\d\d\d-\d)/
    }
}

const getWks = (wks) => {
    const wksNumber = wks.match(exp.regex.wks);
    return wksNumber ? wksNumber[0] : null;
}

const getSpecs = (wks) => {
    let specs = wks.split(exp.regex.specBreak);
    return specs;
}

const splitWks = (text) => {
    let wks = text.split(exp.regex.wksBreak).slice(1);
    return wks;
}

/**
 * @param {string} text Raw standard format pending list
 * @returns {object} PendingList as object of wks properties pointing to array of specs
 */
const parseText = (text) => {
    let WKSs = splitWks(text);
    const pendingList = {};
    WKSs.forEach((pendingWks) => {
        const wksKey = getWks(pendingWks);
        const specs = getSpecs(pendingWks);
        pendingList[wksKey] = specs;
    })
    return pendingList;
}


const inputParser = {
    parseText: parseText
}

export default inputParser
