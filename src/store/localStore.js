import defState from './initialState';

const initialState = {
    decks: defState.decks,
    cards: defState.cards
};

// export const get = () => JSON.parse(localStorage.getItem('state') ) ||
// undefined;
export const get = () => JSON.parse(localStorage.getItem('state')) || initialState;
export const set = (state, props) => {
    let toSave = {};
    props.forEach(p => toSave[p] = state[p]);
    localStorage.setItem('state', JSON.stringify(toSave));
};
