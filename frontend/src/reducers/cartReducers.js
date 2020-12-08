import { CART_ADD_ITEM, CART_REMOVE_ITEM } from "../constants/cartConstence";

const freeProduct = {
    product: 'Ravya-15pc',
    name: '2 Free Ravya Turmeric Infusion 15pc with Ravya Turmeric Infusion 25pc',
    image: 'https://i.ibb.co/6t92wwt/New15pc.jpg',
    price: 0,
    countInStock: 2,
    weight: 2.64555,
    qty: 2,
    isFree: true
}

function cartReducer(state = { cartItems: [] }, action) {
    switch (action.type) {
        case CART_ADD_ITEM:
            const item = action.payload;
            const product = state.cartItems.find(x => x.product === item.product);
            if (product) {
                return {
                    cartItems:
                        state.cartItems.map(x => x.product === product.product ? item : x)
                };
            }
            if (item.product === 'Ravya-25pc') {
                console.log("ITEM", item)
                return { cartItems: [...state.cartItems, item, freeProduct] };
            }
            return { cartItems: [...state.cartItems, item] };
        case CART_REMOVE_ITEM:
            if (action.payload === 'Ravya-25pc') {
                return { cartItems: state.cartItems.filter(x => x.product !== action.payload).filter(item => !item.isFree) };
            }
            return { cartItems: state.cartItems.filter(x => x.product !== action.payload) };
        default:
            return state
    }
}

export { cartReducer }