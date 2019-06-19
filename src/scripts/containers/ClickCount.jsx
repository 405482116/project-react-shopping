import { connect } from 'react-redux';
import ClickCount from '../components/ClickCount';
import { updateCount } from '../actions';

const mapStateToProps = (state, ownProps) => ({
    product: ownProps.product,
})

const mapDispatchToProps = {
    updateCount,
}

export default connect(mapStateToProps, mapDispatchToProps)(ClickCount)
