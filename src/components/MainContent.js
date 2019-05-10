import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './MainContent.scss';
import PieOfTheDay from './PieOfTheDay';
import ListOfStores from './ListOfStores';
import ListOfPies from './ListOfPies';
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

    showPies = () =>
    {
        this.setState({componentToShow: 'pies'});
    };

    render() 
    {
        return (
            <div className = 'MainContent'>
                <div className = 'buttons'>
                    <div onClick={this.showStores}>STORES</div>
                    <div onClick={this.showPies}>LIST OF PIES</div>
                </div>

                {this.state.componentToShow==='stores'?
                    
                    <ListOfStores
                        stores= {this.props.stores}
                        pies = {this.props.pies}
                    />
                
                :null
                }

                {this.state.componentToShow==='pies'?
                    
                    <ListOfPies
                        pies = {this.props.pies}
                    />
                
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
