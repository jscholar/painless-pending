export const Templates = {
    genWKSHeader: function(date, wks, numSpec) {
    return `${date}       WS # ${wks} &wksName - ${numSpec} Pending Build                   
    Status  Specimen #      Account# Patient Name <Sex/Age>
    ------  --------------  -------- ------------------------------`
    },

    genPendLIne: function(line, res) {
        return `${line} ${res}`
    }
}