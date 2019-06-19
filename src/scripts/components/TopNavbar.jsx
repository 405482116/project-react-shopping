import React, { Component } from 'react'
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';
import PorductCartList from '../containers/PorductCartList';
import SearchBar from '../containers/SearchBar';

class TopNavbar extends Component {
    render() {
        return (
            <>
                <Navbar bg="primary" variant="dark">
                    <Navbar.Brand href="/#">J-3商城</Navbar.Brand>
                    <Nav className="mr-auto">
                        <PorductCartList />
                    </Nav>
                   <SearchBar/>
                </Navbar>
            </>
        );
    }
}

export default TopNavbar;
