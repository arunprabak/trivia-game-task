const END_POINT = 'https://opentdb.com/api.php?amount=10&category=9&difficulty=easy&type=multiple'

export const getData = async () => {
    let data;
    try {
        const res = await fetch(END_POINT);
        data = await res.json();
    } catch(err) {
        data = err.message
    }
    return data;
}
