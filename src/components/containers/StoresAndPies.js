import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {fetchStores} from '../../states/actions/FetchAction';//fetchPosts to fetchStores
import {fetchPies} from '../../states/actions/FetchAction';
import MainContent from '../MainContent';
import NoStoresOrPies from '../NoStoresOrPies';
class StoresAndPies extends Component
{
    componentWillMount()
    {
        this.props.fetchStores();
        this.props.fetchPies();
    }

    
    render() {
        const {stores,pies} = this.props;
        return (
            <div>
                {
                    (stores && pies)?
                        <MainContent
                            stores = {this.props.stores}
                            pies = {this.props.pies}
                        />
                        : <NoStoresOrPies/>
                }
            </div>
        );
    }
}
StoresAndPies.protoTypes = {
    fetchStores: PropTypes.func.isRequired,
    fetchPies: PropTypes.func.isRequired,
    stores: PropTypes.array.isRequired
}
const mapDispatchtoProps = dispatch => (
    {
        fetchStores: () => {dispatch(fetchStores())},
        fetchPies: () => {dispatch(fetchPies())},
    }
);
const mapStateToProps = state => (
    {
        stores: state.data.stores,
        pies: state.data.pies,
        errors: state.data.errors
    }
);
export default connect(mapStateToProps,mapDispatchtoProps)(StoresAndPies)