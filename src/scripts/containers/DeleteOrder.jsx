import { connect } from 'react-redux';
import DeleteOrder from '../components/DeleteOrder';
import { deleteOrder } from '../actions';

const mapStateToProps = (state, ownProps) => ({
    product: ownProps.product,
})

const mapDispatchToProps = {
    deleteOrder,
}

export default connect(mapStateToProps, mapDispatchToProps)(DeleteOrder)
