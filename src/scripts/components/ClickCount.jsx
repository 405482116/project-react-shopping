import React from 'react';

const ClickCount = ({ updateCount, product }) => {
    let input, count = 0;
    return (
        <div>
            <button onClick={e => {
                updateCount(product, false)
            }}>-</button>
            <input type="number" ref={node => (input = node)} style={{
                width: '40px'
            }} value={product.count} onChange={e => {
                updateCount(product, '', input.value)
            }} />
            <button onClick={e => {
                updateCount(product, true)
            }}>+</button>
        </div>
    )
}

export default ClickCount
