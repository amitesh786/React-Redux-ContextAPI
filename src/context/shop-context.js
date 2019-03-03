import React from 'react';

export default React.createContext({
    products: [
        { id: 'p1', title: 'Half-dried plant', price: 1.99 },
        { id: 'p2', title: 'Used plastic bottle', price: 1.99 },
        { id: 'p3', title: 'Harry Potter 3', price: 19.99 },
        { id: 'p4', title: 'Gaming Mouse', price: 49.99 }
    ],
    cart: [],
    addProductToCart: product => { },
    removeProductFromCart: productId => { }
});
