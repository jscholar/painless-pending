
export const updatePending = (pending) => {
    for (let wks in pending.curr) {
        pending.curr[wks].forEach( (spec) =>
            updateSpecimen(pending.prev, pending.curr, wks, spec)
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