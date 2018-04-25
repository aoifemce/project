"use strict";
export const ADD_TO_CART = 'ADD_TO_CART';
export const DELETE_FROM_CART = 'DELETE_FROM_CART';
export const UPDATE_ITEM_UNITS = 'UPDATE_ITEM_UNITS';
//adding items to cart
export function addToCart({id, title, description, price, units=1}) {
    return {
        type: ADD_TO_CART,
        payload: {id, title, description, price, units}
    }
}
//deleting items from cart
export function deleteFromCart({id}) {
    return {
        type: DELETE_FROM_CART,
        payload: {id}
    }
}
//updating item details in cart
export function updateItemUnits({id, units}) {
    return {
        type: UPDATE_ITEM_UNITS,
        payload: {id, units}
    }
}
