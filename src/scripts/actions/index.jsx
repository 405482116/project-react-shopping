import { ACTION_TYPE } from "../redux/ActionType";


const orderId = () => (Math.floor(Math.random() * 9000) + 1000);

export const addProductToCart = product => {
    const action = {
        type: ACTION_TYPE.ADD_PRODUCT_TO_CART,
        payload: {
            orderId: orderId(),
            product,
        }
    }
    return action;
}

export const updateCount = (productOrder, increment, value) => ({
    type: ACTION_TYPE.UPDATE_COUNT,
    payload: {
        productOrder,
        increment,
        value,
    }
})

export const toggleOrder = (productOrder) => ({
    type: ACTION_TYPE.TOGGLE_ORDER,
    payload: {
        productOrder,
    }
})

export const toggleAllOrder = (checkedAll) => ({
    type: ACTION_TYPE.TOGGLE_ALL_ORDER,
    payload: {
        checkedAll,
    }
})

export const deleteOrder = (orderId) => ({
    type: ACTION_TYPE.DELETE_ORDER,
    payload: {
        orderId,
    }
})

export const filterProducts = (input) => ({
    type: ACTION_TYPE.FILTER_PRODUCTS,
    payload: {
        input,
    }
})

export const onSubbmit = (orders) => ({
    type: ACTION_TYPE.ON_SUBBMIT_ORDERS,
    payload: {
        orders,
    }
})