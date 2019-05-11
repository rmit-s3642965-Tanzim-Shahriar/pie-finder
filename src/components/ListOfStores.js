import React, { Component } from 'react';
import Pagination from 'react-js-pagination';
import './ListOfStoresOrPies.scss';
import pieOfTheDay from './PieOfTheDay';
import PropTypes from 'prop-types';
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

    findPieOfTheDayForAStore = (storeId) =>
    {
        
        let name,price,quantity =  '';
        
        for(let i = 0; i < this.props.pies.length; i++)
        {
            
            if(this.props.pies[i].isPieOfTheDay)
            {
                console.log("pie of day: " + this.props.pies[i].displayName + " storeId: " + this.props.pies[i].storeId);
                if(this.props.pies[i].storeId===storeId)
                {
                    name= this.props.pies[i].displayName;
                    price= this.props.pies[i].priceString;
                    quantity= this.props.pies[i].quantit;
                }
            }
        }
        return {name,price,quantity};
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
                <div>Pie Of The Day: {this.findPieOfTheDayForAStore(store.id).name}</div>
                <div>Price: {this.findPieOfTheDayForAStore(store.id).price}</div>
                <div>Quantity: {this.findPieOfTheDayForAStore(store.id).quantity}</div>
                <div>Name: {store.displayName}</div>
                <div>Address: {store.address}</div>
                <div>Rating: {store.rating}</div>
                <div>Mobile: {store.mobile}</div>
            </div> 
            ) : null;
            
            this.props.pies.length!==0? this.findPieOfTheDayForAStore(1):null;
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
ListOfStores.protoTypes = {
    stores: PropTypes.array.isRequired,
    pies: PropTypes.array.isRequired
}
export default ListOfStores;
