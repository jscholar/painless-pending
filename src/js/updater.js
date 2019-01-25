let output

export const updatePending = (previousPending, currentPending) => {
    for (let wks in currentPending) {
        currentPending[wks].forEach( (spec) =>
            updateSpecimen(previousPending, wks, spec)
        ) 
    }
}

const updateSpecimen = (p, wks, s) => {
    if (p[wks]) {

        let ps = p[wks].find(ps => s.specID === ps.specID && s.wks === ps.wks );
        if (ps && !s.res) {
            s.res = ps.res;
        }
    }
}