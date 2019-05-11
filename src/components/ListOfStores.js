import React, { Component } from 'react';
import Pagination from 'react-js-pagination';
import './ListOfStoresOrPies.scss';
import sort from 'fast-sort';
import PropTypes from 'prop-types';
class ListOfStores extends Component 
{
    
    constructor() 
    {
        super();
        this.state = {
            activePage: 0,
            maxStoresPerPage: 0,
            sortBy: 'ascrating',
            hasLoaded:false,
            stores:{},
            pies:{},
            sortedStores:{}
        };
        
    };

   componentWillMount()
   {
    this.setState({
        activePage: 1,
        maxStoresPerPage: 5,
    });
   }
//    componentDidMount() {
//     this.setState({hasLoaded: false})
//     setTimeout(() => { 
//           this.setState({hasLoaded: true})
//     }, 5000);
//     }

    componentWillReceiveProps()
    {
        
        if((this.props.stores && this.props.pies) && (this.props.stores!==this.state.stores || this.props.pies!==this.state.pies))
        {
            this.setState({
                stores:this.props.stores,
                pies:this.props.pies
            });
        }
    }

    setSortedStores=()=>
    {
        for(let i = 0; i < this.state.stores.length; i++)
        {
            this.setState({
                sortedStores:{
                    nameOfStore:this.state.stores[i].displayName,
                    address:this.state.stores[i].address,
                    mobile:this.state.stores[i].mobile,
                    rating: this.state.stores[i].rating,
                    pieOfTheDay: {
                        name: 'todo',
                        price: 'todo'
                    },
                    quantity: 'todo',
                }
            });
        }
        
    }

    findPieOfTheDayForAStore = (storeId) =>
    {
        
        let name,price,quantity =  '';
        
        for(let i = 0; i < this.props.pies.length; i++)
        {
            
            if(this.props.pies[i].isPieOfTheDay)
            {
                if(this.props.pies[i].storeId===storeId)
                {
                    name= this.props.pies[i].displayName;
                    price= this.props.pies[i].priceString;
                    quantity= this.props.pies[i].quantity;
                }
            }
        }
        return {name,price,quantity};
    }

   
    renderActivePage = () => 
    {
        
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
        
        let sortedStore = this.props.stores;

        //this.setSortedStores(this.props.stores);

        switch(this.state.sortBy)
        {
            case 'ascprice':
                sort(sortedStore).asc('price');
            case 'descprice':
                sort(sortedStore).desc('price')
            case 'ascquantity':
                sort(sortedStore).asc('quantity')
            case 'descquantity':
                sort(sortedStore).desc('quantity')
            case 'ascrating':
                sort(sortedStore).asc('rating')
            case 'descrating':
                sort(sortedStore).desc('rating') 
            default:
            sortedStore = this.props.stores;
                
        }
        
        for(let i = (this.state.activePage-1)*this.state.maxStoresPerPage; i< this.props.stores.length && counter<5; i++)
        {
            
            list.push(sortedStore[i]);
            counter++;
            
        
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
        const{ stores } = this.props;

        let totalItems = stores ? parseInt(stores.length) : 0;        
        return (

            <div className='ListOfStores'>
                <div className='headerTitle'>Stores:</div>
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
