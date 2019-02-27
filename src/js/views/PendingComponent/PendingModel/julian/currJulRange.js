// Default Julian Range
const RANGE = 14;

const currentJulDay = () => {
    const now = new Date();
    const start = new Date(now.getFullYear(), 0, 0);
    const diff = now - start;
    const oneDay = 1000 * 60 * 60 * 24;
    return Math.floor(diff / oneDay);
}

const getJulRange = () => {
    const julEnd = currentJulDay();
    let julBegin = julEnd - RANGE;

    if (julBegin <= 0) {
        julBegin += 365;
    }

    return {
        julBegin: julBegin,
        julEnd: julEnd,
    };
}

export default getJulRange;
