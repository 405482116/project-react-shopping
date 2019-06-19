import React from 'react';
import ReactDOM from 'react-dom'
import TopNavbar from './components/TopNavbar';
import 'bootstrap/dist/css/bootstrap.css';
import ProductList from './containers/ProductList';
import { Container } from 'react-bootstrap';
import { Provider } from 'react-redux';
import Store from './redux/Store';
import BasicRoute from './Router'

const rootElement = document.getElementById("root");

ReactDOM.render(
    <Provider store={Store}>
        <BasicRoute />
    </Provider>,
    rootElement
);