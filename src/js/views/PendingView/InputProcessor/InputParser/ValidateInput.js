const validatePendingText = (pendingText) => {
    return (
        typeof(pendingText) === "string" &&
        pendingText.length > 0
    )
}
