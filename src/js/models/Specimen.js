
export class Specimen {
    /**
     * 
     * @param {string} line Entire line of pending specimen
     * @param {string} specID Accession Number ###-###-####-#
     * @param {string} res Resolution from old pending.
     */
    constructor(line, specID, res="") {
        this.line = line;
        this.specID = specID;
        this.res = res;
    }
}
