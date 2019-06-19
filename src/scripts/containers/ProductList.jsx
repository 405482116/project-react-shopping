import { connect } from 'react-redux'
import ProductList from '../components/ProductList'

const getVisibleProducts = (products, value) => {
    if (value) {
        return products.filter(product => (product.name.includes(value)));
    }
    return products;
}

const mapStateToProps = (state, ownProps) => ({
    products: getVisibleProducts(state.products.products, state.products.filterValue)
})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(ProductList)
