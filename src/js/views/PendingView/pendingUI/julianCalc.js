
export const currentJulDay = () => {
    const now = new Date();
    const start = new Date(now.getFullYear(), 0, 0);
    const diff = now - start;
    const oneDay = 1000 * 60 * 60 * 24;
    return Math.floor(diff / oneDay);
}

export const validJul = (jul) => {
    return (jul > 0 && jul < 366) ? parseInt(jul) : null;
}

const fillDays = () => {
    if (rules.julRange.begin > rules.julRange.end) {
        rules.julRange.days = (365 - rules.julRange.begin) + rules.julRange.end;
    } else {
        rules.julRange.days = rules.julRange.end - rules.julRange.begin;
    }
}

const fillBegin = () => {
    rules.julRange.begin = rules.julRange.end - rules.julRange.days <= 0 ? 
    365 - (rules.julRange.days - rules.julRange.end ) :
    rules.juleRange.end - rules.juleRange.days;
}

function updateJulianRange() {
    const {
        begin,
        end
    } = {
        ...configView.getJulianInput()
    };
    state.julRange.begin = validJul(begin);
    state.julRange.end = validJul(end);
    configView.updateJulDisplay(state.julRange);
}
