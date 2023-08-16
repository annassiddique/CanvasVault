import { REMOVE_ITEM, ADD_ITEM_SUCCESS, CHECKOUT } from "./CartType";


export const addItemSucces = (item) => {
    return {
        type: ADD_ITEM_SUCCESS,
        payload: item
    }
}

export const removeItem = (item) => {
    return {
        type: REMOVE_ITEM,
        payload: item
    }
}


export const checkout = () => {
    return {
        type: CHECKOUT,
    }
}

