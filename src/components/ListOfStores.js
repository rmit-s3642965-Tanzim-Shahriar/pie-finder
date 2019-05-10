import React, { Component } from 'react';
import Pagination from 'react-js-pagination';
import './ListOfStoresOrPies.scss';

class ListOfStores extends Component 
{
    
    constructor() 
    {
        super();
        this.state = {
            activePage: 0,
            maxStoresPerPage: 0,

        };
        
    };

    componentDidMount()
    {
        this.setState({activePage:1,maxStoresPerPage:5});
    }
    renderActivePage = () => 
    {
        let list = this.props.stores? [...this.props.stores]: null;
        let counter = 0;

        while(list.length!==0)
        {
            list.pop();
        }
        
        
        for(let i = (this.state.activePage-1)*this.state.maxStoresPerPage; i< this.props.stores.length && counter<5; i++)
        {
            list.push(this.props.stores[i]);
            counter++;
        }

        const tempStores = list? list.map(store =>
            <div key={store.id} className = 'store'>
                <div>Pie Of The Day: todo</div>
                <div>Price: todo</div>
                <div>Quantity: todo</div>
                <div>Name: {store.displayName}</div>
                <div>Address: {store.address}</div>
                <div>Rating: {store.rating}</div>
                <div>Mobile: {store.mobile}</div>
            </div> 
            ) : null;
        // <div className='pie'>Pie Of The Day todo Price todo Quantity todo 
        //     {list[counter].displayName + ' ' + list[counter].address + ' ' + list[counter].rating + ' ' + list[counter].mobile}
        // </div>
        return(
            <div>
                {tempStores}
            </div>
        );
    }

    handlePageChange = (pageNumber) =>
    {
        this.setState({activePage:pageNumber});
    }

    
    render() 
    {   
        const stores = this.props.stores? this.props.stores: null;
        let totalItems = stores ? parseInt(stores.length) : 0;

        // for (let i = 0; i < stores.length; i++) {
        //     console.log(stores[i].displayName);
        // }
        
        return (
            <div className='ListOfStores'>
                List Of Stores:
                {this.renderActivePage(this.state.activePage)}
                <div className='paginationContainer'>
                    <Pagination
                        activePage={this.state.activePage}
                        itemsCountPerPage={this.state.maxStoresPerPage}
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
export default ListOfStores;
