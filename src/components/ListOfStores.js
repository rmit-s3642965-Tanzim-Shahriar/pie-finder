import React, { Component } from 'react';
import Pagination from 'react-js-pagination';
import './ListOfStoresOrPies.scss';
import { withStyles } from '@material-ui/core/styles'
import sort from 'fast-sort';
import PropTypes from 'prop-types';
import Switch from '@material-ui/core/Switch';
import Select from '@material-ui/core/Select';
import { MenuItem } from '@material-ui/core';
import InputBase from '@material-ui/core/InputBase';

//Styles react-select Sort by dropdown
const BootstrapInput = withStyles(theme => ({
    root: {
      'label + &': {
        marginTop: theme.spacing.unit * 3,
      },
    },
    input: {
      borderRadius: 4,
      position: 'relative',
      backgroundColor: theme.palette.background.paper,
      border: '1px solid #ced4da',
      fontSize: 15,
      width: 'auto',
      padding: '10px 26px 10px 12px',
      transition: theme.transitions.create(['border-color', 'box-shadow']),
      fontFamily: [
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(','),
      '&:focus': {
        borderRadius: 4,
        borderColor: '#80bdff',
        boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
      },
    },
  }))(InputBase);

class ListOfStores extends Component 
{
    constructor(props) 
    {
        super(props);
        this.state = {
            activePage: 1,
            maxStoresPerPage: 5,
            selectedSort: '',
            descending: false,
        }; 
    };

    //sorts and returns stores array
    getSortedStores=()=>
    {
        let sortedStores = this.props.stores;
        if(this.state.selectedSort === 'storeRating')
        {
            this.state.descending? sort(sortedStores).desc('rating'): sort(sortedStores).asc('rating');;
        }
        else if(this.state.selectedSort === 'price' || this.state.selectedSort === 'quantity')
        {
            let piesOfTheDay=[];
            let tempSortedStores=[];
            for(let i = 0; i < sortedStores.length; i++)
            {
                piesOfTheDay.push(this.findPieOfTheDayForAStore(sortedStores[i].id));
            }
            this.state.selectedSort === 'price'? (this.state.descending? sort(piesOfTheDay).desc('price')
            : sort(piesOfTheDay).asc('price')) : (this.state.descending? sort(piesOfTheDay).desc('quantity')
            : sort(piesOfTheDay).asc('quantity'));

            for(let i = 0; i < piesOfTheDay.length; i++)
            {
                for(let j = 0; j < sortedStores.length; j++)
                {
                    piesOfTheDay[i].storeId === sortedStores[j].id? tempSortedStores.push(sortedStores[j]):null;
                }
            }
            sortedStores = tempSortedStores;
        }
        else if(this.state.selectedSort === '')
        {
            sortedStores = this.props.stores;
        }
        return sortedStores;
    }

    //takes in storeId and returns a custom pie object which 
    //is the pie of the day for that store
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
        return {name,price,quantity,storeId};
    }
   
    //renders a list with at most 5 stores
    renderActivePage = () => 
    {
        const sortedStores = this.getSortedStores();
        let list = [];
        let counter = 0;
    
        for(let i = (this.state.activePage-1)*this.state.maxStoresPerPage; i< sortedStores.length && counter<5; i++)
        {
            list.push(sortedStores[i]);
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

    toggleChange= () =>
    {
        this.setState({descending: !this.state.descending});
    }

    handleChange = event => 
    {
        this.setState({ selectedSort: event.target.value });
    };

    render() 
    {  
        const {stores} = this.props;
        let totalItems = stores ? parseInt(stores.length) : 0;        
        let activePageDiv = this.renderActivePage();
        return (
            <div className='ListOfStores'>
                <div className='headerTitle'>Stores:</div>
                <div className='sortingContainer'>
                    <div>Sort by</div>
                    <div className="sortSelect">
                        <Select
                            value={this.state.selectedSort}
                            onChange={this.handleChange}
                            input={<BootstrapInput name="age" id="age-customized-select" />}
                        >
                            <MenuItem value=""><em>None</em></MenuItem>
                            <MenuItem value='price'>Price</MenuItem>
                            <MenuItem value='quantity'>Quantity</MenuItem>
                            <MenuItem value='storeRating'>Store Rating</MenuItem>
                        </Select>
                    </div>
                    
                    <div>Order (High to Low)</div>
                        <Switch
                            color= 'primary'
                            onChange={this.toggleChange}
                        />
                </div>
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
