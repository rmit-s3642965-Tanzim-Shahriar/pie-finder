import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './MainContent.scss';
import About from './About';
import ListOfStores from './ListOfStores';

class MainContent extends Component 
{
    constructor() 
    {
        super();
        this.state = {
            componentToShow: 'stores'
        };
    };

    showStores = () =>
    {
        this.setState({componentToShow: 'stores'});
    };

    showAbout = () =>
    {
        this.setState({componentToShow: 'about'});
    };

    render() 
    {
        return (
            <div className = 'MainContent'>
                <div className = 'buttons'>
                    <div onClick = {this.showStores}>PIE OF THE DAY</div>
                    <div onClick = {this.showAbout}>ABOUT</div>
                </div>

                {this.state.componentToShow==='stores'?
                    
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
    stores: PropTypes.array.isRequired,
    pies: PropTypes.array.isRequired
}
export default MainContent;
