import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {fetchStores} from '../../states/actions/postAction';//fetchPosts to fetchStores
import {fetchPies} from '../../states/actions/postAction';
class PieList extends Component
{
    componentWillMount()
    {
        this.props.fetchPies();
        this.props.fetchStores();
    }

    render() {
        let storeList = this.props.stores;
        console.log("store List: "+storeList);
        return (
            <div>
                {
                    storeList ?
                        <div>has stores</div>
                        : <div>has no stores</div>
                }
            </div>
        );
    }
}
PieList.protoTypes = {
    fetchStores: PropTypes.func.isRequired,
    fetchPies: PropTypes.func.isRequired,
    stores: PropTypes.array.isRequired
}
const mapDispatchtoProps = dispatch => (
    {
        fetchStores: () => {dispatch(fetchStores())},
        fetchPies: () => {dispatch(fetchPies())}
    }
);
const mapStateToProps = state => (
    {
        stores: state.data.stores,
        pies: state.data.pies
    }
);
export default connect(mapStateToProps,mapDispatchtoProps)(PieList)