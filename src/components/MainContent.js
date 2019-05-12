import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './MainContent.scss';
import { connect } from 'react-redux';
import {fetchStores} from '../states/actions/FetchAction';
import {fetchPies} from '../states/actions/FetchAction';
import About from './About';
import ListOfStores from './ListOfStores';

class MainContent extends Component 
{
    constructor() 
    {
        super();
        this.state = {
            componentToShow: 'stores',
            stores:{},
        };
    };
    
    componentDidMount()
    {
        this.props.fetchStores();
        this.props.fetchPies();
    }



    showStores = () =>
    {
        this.setState({componentToShow: 'stores'});
        console.log(this.state.stores);
    };

    showAbout = () =>
    {
        this.setState({componentToShow: 'about'});
        console.log(this.state.stores);
    };


    render() 
    {
         
        return (
            <div className = 'MainContent'>
                <div className = 'buttons'>
                    <div onClick = {this.showStores}>PIE OF THE DAY</div>
                    <div onClick = {this.showAbout}>ABOUT</div>
                </div>

                {this.state.componentToShow==='stores' && this.props.stores && this.props.pies?
                    
                    <ListOfStores
                        stores= {this.props.stores}
                        pies = {this.props.pies}
                    />
                
                :null
                }  
                {this.state.componentToShow==='about'?
                    
                    <About/>
                
                :null
                }      

                
            </div>
        );
    }
}
MainContent.protoTypes = {
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
export default connect(mapStateToProps,mapDispatchtoProps)(MainContent)

