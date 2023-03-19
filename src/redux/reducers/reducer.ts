import {ADD_TO_CART} from '../constant'

const initialState = {
    cartData: [],
}

const cartItems = (state = initialState, action: any) => {
    switch (action.type) {
        case ADD_TO_CART:
            return {
                ...state,
                cartData: action.cartData,
            }
        default:
            return state
    }
}

export default cartItems