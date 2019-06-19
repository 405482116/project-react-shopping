import { HashRouter, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import React from 'react'
import ProductList from './containers/ProductList';
// import PorductCart from './containers/PorductCartList';
import TopNavbar from './components/TopNavbar';

const BasicRoute = () => (
    <HashRouter>
        <TopNavbar />
        <Container fluid="true">
            <Route exact path="/" component={ProductList} />
            {/* <Route exact path="/productCart" component={PorductCart} /> */}
        </Container>
    </HashRouter>
);
export default BasicRoute;

