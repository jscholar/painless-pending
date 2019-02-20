export const genWKSHeader = (date, wks, numSpec) => {
    return `${date}       WS # ${wks} &wksName - ${numSpec} Pending Build                   
    Status  Specimen #      Account# Patient Name <Sex/Age>
    ------  --------------  -------- ------------------------------`
}

export const genPendLine = (line, res) => {
    return `N,   ${line} ${res}`
}

export const UITemplates = {
    inputPlaceHolder: 
    `

    

   Example:

    10-SEP-2018     WS # 5383 LESION HSV CULTURE/T - 2 Pending Build                
    Status  Specimen #      Account# Patient Name <Sex/Age>
   ------  --------------  -------- ------------------------------
   N,      555-555-5555-0  55555555 PATIENT,PATIENT <?,??> ASDF | 1234
   N,      555-555-5555-0  55555555 PATIENT,PATIENT <?,??> ASDF | 1234
    `
}
