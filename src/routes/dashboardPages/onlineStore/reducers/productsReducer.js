"use strict";
const INIT_PRODUCTS = [
    {id:1, title: 'Jersey', description: 'Club jersey', price: 30},
    {id:2, title: 'Hoody', description: 'Club hoody', price: 25},
    {id:3, title: 'Shorts', description: 'Clubs shorts to be worn during matches', price: 20},
    {id:4, title: 'Kitbag', description: 'Club kitbag to bring to training and matches', price: 20},
    {id:5, title: 'Hat', description: 'Club hat', price: 10},
    {id:6, title: 'Scarf', description: 'Club scarf', price: 10}
];
export default function productsReducer(state=INIT_PRODUCTS, action={}) {
    // PLEASE NOTE:
    // below actions are unused
    // kept for instance - Ajinkya
    switch(action.type) {
        case 'ADD_PRODUCT':
            return state.concat(action.payload);

        case 'DELETE_PRODUCT':
            let indexToDel = findProductIndex(state, action.payload.id);
            return [...state.slice(0, indexToDel), ...state.slice(indexToDel+1)];

        case 'UPDATE_PRODUCT':
            let indexToUpdate = findProductIndex(state, action.payload.id);
            const newProductExtend = {
                ...state[indexToUpdate], title: action.payload.title
            };
            return [...state.slice(0, indexToUpdate), newProductExtend, ...state.slice(indexToUpdate+1)];

    }

    function findProductIndex(products, id) {
        return products.findIndex((p) => p.id === id)
    }

    return state;
}
