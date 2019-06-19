import { connect } from 'react-redux'
import CheckAllOrder from '../components/CheckAllOrder'
import { toggleAllOrder } from '../actions'

const getCheckedAll = productsOrders => (
    productsOrders.findIndex(productOrder => productOrder.checked === false) === -1
)
const mapStateToProps = (state, ownProps) => ({
    checkedAll: getCheckedAll(state.products.productOrders),
}
)

const mapDispatchToProps = {
    toggleAllOrder,
}

export default connect(mapStateToProps, mapDispatchToProps)(CheckAllOrder)
