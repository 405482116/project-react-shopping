import React from 'react'

const CheckOrder = ({ product, toggleOrder }) => {
    return (
        <input type="checkbox" checked={product.checked} onChange={e => {
            toggleOrder(product)
        }} />
    )
}

export default CheckOrder
