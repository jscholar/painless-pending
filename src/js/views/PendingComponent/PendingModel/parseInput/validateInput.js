const validatePendingText = (pendingText) => {
    const isValid = (
        typeof (pendingText) === "string" &&
        pendingText.length > 0
    )
    if (!isValid) {
        console.log('invalid input received');
        alert('Please enter pending lists');
        throw new Error('Invalid input recieved ' + pendingText)
    }
    return isValid;
}

export default validatePendingText;
