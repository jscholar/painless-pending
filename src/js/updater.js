
export const updatePending = (previousPending, currentPending) => {
    for (let wks in currentPending) {
        currentPending[wks].forEach( (spec) =>
            updateSpecimen(previousPending, currentPending, wks, spec)
        ) 
    }
}

const updateSpecimen = (p, c, wks, s) => {
    if (p[wks]) {

        let ps = p[wks].find(ps => s.specID === ps.specID);
        if (ps && !s.res) {
            s.res = ps.res;
        }
    }
}