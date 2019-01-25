export class Specimen {
    constructor(specID, jul, res = "", line, wks) {
        this.specID = specID;
        this.jul = jul;
        this.res = res;
        this.line = line;
        this.wks = wks;
    }
}