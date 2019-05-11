import React, { Component } from 'react';
import Pagination from 'react-js-pagination';
import './ListOfStoresOrPies.scss';
import sort from 'fast-sort';
import PropTypes from 'prop-types';
import DropdownButton from 'react-bootstrap/DropdownButton'
class ListOfStores extends Component 
{
    
    constructor() 
    {
        super();
        this.state = {
            activePage: 1,
            maxStoresPerPage: 5,
            sortBy: 'ascrating',
            hasLoaded:false,
            stores:{},
            pies:{},
            sortedStores:{}
        };
        
    };



    getSortedStores=()=>
    {
        
        let sortedStores = this.props.stores;
        
      
        switch(this.state.sortBy)
        {
            case 'ascrating':
                sort(sortedStores).asc('rating');
            case 'descrating':
                sort(sortedStores).desc('rating'); 
            default:
            sortedStores = this.props.stores;
                
        }
        console.log(sortedStores);
        return sortedStores;
        
    }

    findPieOfTheDayForAStore = (storeId) =>
    {
        
        let name,price,quantity =  '';
        const{pies} = this.props;
        for(let i = 0; i < pies.length; i++)
        {
            
            if(pies[i].isPieOfTheDay)
            {
                if(pies[i].storeId===storeId)
                {
                    name= pies[i].displayName;
                    price= pies[i].priceString;
                    quantity= pies[i].quantity;
                }
            }
        }
        return {name,price,quantity};
    }

   
    renderActivePage = () => 
    {
        
        const sortedStores = this.getSortedStores();
        let list = this.props.stores? [...this.props.stores]: null;
        let counter = 0;
        if(!list)
        {
            return null;
        }
        
        while(list.length!==0)
        {
            list.pop();
        }  
        for(let i = (this.state.activePage-1)*this.state.maxStoresPerPage; i< sortedStores.length && counter<5; i++)
        {
            
            list.push(sortedStores[i]);
            counter++;
            
        
        }
        if(!list)
        {
            return null;
        }
        
        const tempStores = list.map(store =>
            <div key={store.id} className = 'itemBox'>
                <div className = 'boxBodyContainer'>
                    <div className= 'titleContainer'>
                        <div className='itemTitle'>{store.displayName}</div>
                    </div>


                    
                    {(this.findPieOfTheDayForAStore(store.id).name && this.findPieOfTheDayForAStore(store.id).name !== '') ?
                    
                        <div className = 'otherDescription'>                        
                            <div>Pie Of The Day: {this.findPieOfTheDayForAStore(store.id).name}</div>
                            <div>Rating: {store.rating}</div>
                            <div>Quantity: {this.findPieOfTheDayForAStore(store.id).quantity}</div>
                            <div>Address: {store.address}</div>
                            <div>Mobile: {store.mobile}</div>
                        </div> 
                        :
                        <div className = 'otherDescription'>                        
                            <div>SORRY, There is no pie of the day</div>
                            <div>Rating: {store.rating}</div>
                            <div>Address: {store.address}</div>
                            <div>Mobile: {store.mobile}</div>
                        </div>
                    }
                    
                </div>
                {/* {(this.state.currentPie.name && this.state.currentPie.name !== '') ? */}
                <div className='priceContainer'>
                    <div className='priceItem'>{this.findPieOfTheDayForAStore(store.id).price}</div>
                </div>
                {/* : null} */}
                
            </div> 
        );
            
            
        return(
            <div className = 'boxContainer'>
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
        const {stores,pies} = this.props;
        
        
        let totalItems = stores ? parseInt(stores.length) : 0;        
        let activePageDiv = this.renderActivePage();
        return (

            <div className='ListOfStores'>
                <div className='headerTitle'>Stores:</div>
               
                {activePageDiv}
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
