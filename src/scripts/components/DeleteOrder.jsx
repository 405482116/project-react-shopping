import React from 'react'
import { Button } from 'react-bootstrap';

const DeleteOrder = ({deleteOrder, product}) => {
    return (
        <Button variant="primary" size="sm" onClick={() => {
            deleteOrder(product.orderId)
        }}>删除订单</Button>
    )
}

export default DeleteOrder
