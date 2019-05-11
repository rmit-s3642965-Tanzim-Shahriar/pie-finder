import React, { Component } from 'react';
import './about.scss';
class About extends Component
{
    render()
    {
        return(
            <div className = 'about'>
                <div className = 'headerTitle'>WHAT DOES THIS APP DO?</div>
                <p>
                    This application finds the Pie Of The Day for each store and lists information about the store.
                </p>
                <p>
                    You can sort the Pies based on price and quantity.
                </p>
            </div>
            
        );
    }
}
export default About;