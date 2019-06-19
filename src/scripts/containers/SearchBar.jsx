import { connect } from 'react-redux'
import SearchBar from '../components/SearchBar'
import { filterProducts } from '../actions'

const mapStateToProps = (state, ownProps) => ({

})

const mapDispatchToProps = {
    filterProducts
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar)
