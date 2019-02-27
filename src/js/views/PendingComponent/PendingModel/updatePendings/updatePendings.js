
/* Decide how to update specimen */
const updateSpec = (prev = null, curr) => {
    console.log(prev)
    return (prev ? prev : curr);
}

const updatePendings = (prevPendingList, currPendingList) => {
    const updatedPendingList = new Object();
    for (let wks in currPendingList) {
        updatedPendingList[wks] = [];
        
        currPendingList[wks].forEach( (currSpec) => {
            let prevSpec = (
                prevPendingList[wks] ?
                prevPendingList[wks].find((prevSpec) => prevSpec.specID === currSpec.specID) :
                null
                )
            const updatedSpec = updateSpec(prevSpec, currSpec);

            updatedPendingList[wks].push(updatedSpec);
        })
    }
    return updatedPendingList;
}

export default updatePendings;
