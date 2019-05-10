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
        return (
            <div>
                {
                    (this.props.stores && this.props.pies)?
                        <MainContent
                            stores = {this.props.stores}
                            pies = {this.props.pies}
                        />
                        : <NoStoresOrPies/>
                }
                {/*To do: one of storeList or pieList is always empty, see what the issue is */}
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
        pies: state.data.pies

    }
);
export default connect(mapStateToProps,mapDispatchtoProps)(StoresAndPies)