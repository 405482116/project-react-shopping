import React from 'react'
import { Form, FormControl, Button } from 'react-bootstrap';

const SearchBar = ({ filterProducts }) => {
    let input;
    return (
        <Form inline>
            <FormControl type="text" placeholder="Search" ref={node => (input = node)} className="mr-sm-2" />
            <Button variant="outline-light" onClick={() => {
                filterProducts(input.value);
            }}>查询商品</Button>
        </Form>
    )
}

export default SearchBar
