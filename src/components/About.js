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
                    This application finds the Pie Of The Day for each store and lists information about the store.<br/>
                    You can sort the Pies based on price, quantity of the pie of the day or by rating of the store.
                </p>
            </div>
            
        );
    }
}
export default About;