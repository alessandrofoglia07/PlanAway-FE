import {ADD_TO_CART} from '../constant'

export const addToCart = (data: any) => {
    return {
        type: 'ADD_TO_CART',
        data
    }
}