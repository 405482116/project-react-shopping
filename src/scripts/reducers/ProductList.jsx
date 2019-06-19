import { products } from "../../db/PorductList";
import { ACTION_TYPE } from "../redux/ActionType";


const initialState = {
    products,
    productOrders: [],
    checked: false,
};

export default (state = initialState, action) => {
    const { payload } = action;
    let index, count = 1, currentProduct, overage, orderIndex;
    switch (action.type) {
        case ACTION_TYPE.ADD_PRODUCT_TO_CART:
            const { orderId, product, } = action.payload;
            index = state.productOrders.findIndex(pt => pt.id === product.id);
            if (index >= 0) {
                currentProduct = state.productOrders[index];
                state.productOrders.splice(index, 1, {
                    ...currentProduct,
                    count: ++currentProduct.count,
                    totalAmount: currentProduct.count * currentProduct.price,
                    checked: false,
                })
            } else {
                state.productOrders.push({
                    orderId,
                    ...product,
                    count,
                    totalAmount: product.price * count,
                    checked: false,
                });
            }
            return { ...state,  }
        case ACTION_TYPE.UPDATE_COUNT:
            const { productOrder, increment, value } = action.payload;
            return {
                ...state,
                productOrders: state.productOrders.map(product => (product.id === productOrder.id ? {
                    ...product,
                    count: value ? value : (increment ? (product.count < product.reserve ? ++product.count : product.reserve) : product.count > 1 ? --product.count : 1),
                    totalAmount: product.count * product.price,
                } : { ...product })),
            }
        case ACTION_TYPE.TOGGLE_ORDER:
            const id = payload.productOrder.id;
            return {
                ...state,
                productOrders: state.productOrders.map(product => (product.id === id ? {
                    ...product,
                    checked: !product.checked,
                } : {
                        ...product,
                    })),
            };
        case ACTION_TYPE.TOGGLE_ALL_ORDER:
            const { checkedAll } = payload;
            return {
                ...state,
                productOrders: state.productOrders.map(product => ({ ...product, checked: !checkedAll })),
            };
        case ACTION_TYPE.DELETE_ORDER:
            return {
                ...state,
                productOrders: state.productOrders.filter(productOrder => (productOrder.orderId !== payload.orderId)),
            }
        case ACTION_TYPE.FILTER_PRODUCTS:
            return {
                ...state,
                filterValue: payload.input,
            }
        case ACTION_TYPE.ON_SUBBMIT_ORDERS:
            const { orders } = payload;
            orders.forEach(order => {
                index = state.products.findIndex(product => product.id === order.id);
                orderIndex = state.productOrders.findIndex(productOrder => productOrder.id === order.id);
                currentProduct = state.products[index];
                overage = currentProduct.reserve - order.count;
                if (overage === 0) {
                    state.products.splice(index, 1);
                } else {
                    state.products.splice(index, 1, {
                        ...currentProduct,
                        reserve: overage
                    });
                }
                state.productOrders.splice(orderIndex, 1)
            })
            return {
                ...state,
                products: [...state.products],
                productOrders: [...state.productOrders]
            }
        default:
            return state;
    }
};
