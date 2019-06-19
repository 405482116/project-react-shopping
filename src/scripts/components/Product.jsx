import React from 'react'
import { Card, Container, Row, Col } from 'react-bootstrap';
import BuyButton from '../containers/BuyButton';
import '../../styles/main.scss';

const Product = ({ product }) => (
    <Card >
        <Card.Img variant="top" src={product.info.img} className="rounded-circle" />
        <Card.Body>
            <p className="price"><span className="pricedetail">¥
                  <strong> {product.price} </strong>
            </span><span className="postalicon">包邮</span>
            </p>
            <strong>{product.name}</strong>
        </Card.Body>
        <Card.Footer className="d-flex justify-content-between align-items-center">
            <small className="text-muted">库存：{product.reserve}</small>
            <BuyButton product={product} />
        </Card.Footer>
    </Card>
)
export default Product