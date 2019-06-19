import { connect } from 'react-redux'
import TotalAmount from '../components/TotalAmount'
// import { actionCreator } from '../act'


const getTotalAmount = (products) => {
    let totalAmount = 0;
    products.filter(product => (product.checked)).forEach(product => (totalAmount += product.totalAmount));
    return totalAmount;
}

const mapStateToProps = (state, ownProps) => ({
    totalAmount: getTotalAmount(state.products.productOrders)
})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(TotalAmount)
