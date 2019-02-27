
const validateJul = (jul) => {
    return (jul > 0 && jul < 366) ? parseInt(jul) : null;
}

export default validateJul
