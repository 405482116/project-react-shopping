import { connect } from 'react-redux';
import PorductCartList from '../components/PorductCartList';
import { onSubbmit } from '../actions';
const getBadgeCount = (productOrders) => {
    return productOrders.length;
}
const mapStateToProps = (state, ownProps) => {
    const { products } = state;
    return {
        productOrders: products.productOrders,
        count: getBadgeCount(products.productOrders),
    }
}

const mapDispatchToProps = {
    onSubbmit,
}

export default connect(mapStateToProps, mapDispatchToProps)(PorductCartList)
