import React from 'react'

const CheckAllOrder = ({ checkedAll, toggleAllOrder }) => {
    return (
        <input type="checkbox" checked={checkedAll} onChange={e => {
            toggleAllOrder(checkedAll);
        }} />
    )
}

export default CheckAllOrder
