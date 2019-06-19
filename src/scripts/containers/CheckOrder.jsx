import { connect } from 'react-redux';
import CheckOrder from '../components/CheckOrder';
import { toggleOrder } from '../actions';

const mapStateToProps = (state, ownProps) => ({
    product: ownProps.product,
})

const mapDispatchToProps = {
    toggleOrder,
}

export default connect(mapStateToProps, mapDispatchToProps)(CheckOrder)
