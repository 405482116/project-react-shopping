import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import BuyButton from '../containers/BuyButton';
import Product from './Product'
import '../../styles/main.scss';

const ProductList = ({ products }) => (
    <Row>
        {products && products.length ?
            products.map(product => (<Col sm="3" className="card-container" key={product.id}><Product product={product} /></Col>)) : <div>没有查到该商品，请尝试查询其它商品。</div>}
    </Row>
)

export default ProductList