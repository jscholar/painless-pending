export class Specimen {
    constructor(specID, wks, line, res) {
        this.specID = specID,
        this.woks = wks,
        this.line = line,
        this.res = res
    }

    getRes = () => this.res;

    addRes = (res) => this.res = res;
}