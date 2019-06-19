import { connect } from 'react-redux';
import BuyButton from '../components/BuyButton';
import { addProductToCart } from '../actions/index';

const mapStateToProps = (state, ownProps) => ({
    product: ownProps.product,
})

const mapDispatchToProps = (dispatch, ownProps) => ({
    addProductToCart: () => dispatch(addProductToCart(ownProps.product))
})

export default connect(mapStateToProps, mapDispatchToProps)(BuyButton);


