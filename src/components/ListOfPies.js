import React, { Component } from 'react';
import Pagination from 'react-js-pagination';
import './ListOfStoresOrPies.scss';

class ListOfPies extends Component 
{
    
    constructor() 
    {
        super();
        this.state = {
            activePage: 0,
            maxPiesPerPage: 0,

        };
        
    };

    componentDidMount()
    {
        this.setState({activePage:1,maxPiesPerPage:10});
    }
    renderActivePage = () => 
    {
        let list = this.props.pies? [...this.props.pies]: null;
        let counter = 0;
        
        while(list.length!==0)
        {
            list.pop();
        }
        
        
        for(let i = (this.state.activePage-1)*this.state.maxPiesPerPage; i< this.props.pies.length && counter<5; i++)
        {
            list.push(this.props.pies[i]);
            counter++;
        }

        const tempPies = list? list.map((pie, x) =>
            <div key={x} className = 'pie'>
                <div>Pie Of The Day: todo</div>
                <div>Price: todo</div>
                <div>Quantity: todo</div>
                <div>Name: {pie.displayName}</div>
                
            </div> 
            ) : null;
        // <div className='pie'>Pie Of The Day todo Price todo Quantity todo 
        //     {list[counter].displayName + ' ' + list[counter].address + ' ' + list[counter].rating + ' ' + list[counter].mobile}
        // </div>
        return(
            <div>
                {tempPies}
            </div>
        );
    }

    handlePageChange = (pageNumber) =>
    {
        this.setState({activePage:pageNumber});
    }

    
    render() 
    {   
        const pies = this.props.pies? this.props.pies: null;
        let totalItems = pies ? parseInt(pies.length) : 0;
        
        return (
            <div className='ListOfPies'>
                List Of Pies:
                {this.renderActivePage(this.state.activePage)}
                <div className='paginationContainer'>
                    <Pagination
                        activePage={this.state.activePage}
                        itemsCountPerPage={this.state.maxPiesPerPage}
                        totalItemsCount={totalItems}
                        onChange={this.handlePageChange}
                        pageRangeDisplayed={5}
                        prevPageText='Previous'
                        nextPageText='Next'
                    />

                </div>

            </div>

        );
    }
}
export default ListOfPies;
