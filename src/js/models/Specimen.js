export class Specimen {
    constructor(line, specID, jul, res = "", wks) {
        this.line = line;
        this.specID = specID;
        this.jul = jul;
        this.res = res;
        this.wks = wks;
    }
}
