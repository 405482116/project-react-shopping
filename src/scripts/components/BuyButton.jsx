import React from 'react'
import { Button } from 'react-bootstrap';
const BuyButton = ({ addProductToCart }) => {
    return (
        <Button variant="outline-secondary" size="sm"
            onClick={addProductToCart}
        >加入购物车</Button>
    )
}
export default BuyButton