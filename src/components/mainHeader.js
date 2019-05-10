import React, { Component } from 'react';
import './mainHeader.scss';
class MainHeader extends Component 
{
    render() 
    {
        return (
            <div className='mainHeader'>
                <div>PIE OF THE DAY</div>
                <div>STORES</div>
                <div>PIES</div>
            </div>
        );
    }
}
export default MainHeader;
