import { ADD_PRODUCT_TO_CART, REMOVE_PRODUCT_FROM_CART } from './actions';

const initialState = {
    products: [
        { id: 'p1', title: 'Half-dried plant', price: 1.99 },
        { id: 'p2', title: 'Used plastic bottle', price: 1.99 },
        { id: 'p3', title: 'Harry Potter 3', price: 19.99 },
        { id: 'p4', title: 'Gaming Mouse', price: 49.99 }
    ],
    cart: []
};

const shopReducer = (state = initialState, action) => {
    let updatedCart;
    let updatedItemIndex;
    switch (action.type) {
        case ADD_PRODUCT_TO_CART:
            updatedCart = [...state.cart];
            updatedItemIndex = updatedCart.findIndex(
                item => item.id === action.payload.id
            );

            if (updatedItemIndex < 0) {
                updatedCart.push({ ...action.payload, quantity: 1 });
            } else {
                const updatedItem = {
                    ...updatedCart[updatedItemIndex]
                };
                updatedItem.quantity++;
                updatedCart[updatedItemIndex] = updatedItem;
            }
            return { ...state, cart: updatedCart };
        case REMOVE_PRODUCT_FROM_CART:
            updatedCart = [...state.cart];
            updatedItemIndex = updatedCart.findIndex(
                item => item.id === action.payload
            );

            const updatedItem = {
                ...updatedCart[updatedItemIndex]
            };
            updatedItem.quantity--;
            if (updatedItem.quantity <= 0) {
                updatedCart.splice(updatedItemIndex, 1);
            } else {
                updatedCart[updatedItemIndex] = updatedItem;
            }

            return { ...state, cart: updatedCart };
        default:
            return state;
    }
};

export default shopReducer;
