import React, { Component } from 'react';
import Axios from 'axios';

export default class PieList extends React.Component
{
    constructor() 
    {
        super();
        this.state ={
            stores: [],
            pies: [],
        };
    };
    

    componentDidMount()
    {
        Axios.get('https://pie.now.sh/stores').then(res =>
        {
            console.log(res);
            this.setState({stores: res.data});
        });
        Axios.get('https://pie.now.sh/pies').then(res =>
        {
            console.log(res);
            this.setState({pies: res.data});
        });
    }

    render()
    {
        return(
            <div>
                <ul>
                {
                    this.state.stores.map(store => <li key={store.id}>{store.displayName}</li>)
                }
                </ul>
                <ul>
                {
                    this.state.pies.map(pie => <li key={pie.id}>{pie.displayName}</li>)
                }
                </ul>
            </div>
        )
    }
}



// import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import {fetchPosts} from '../states/actions/postAction'

// class PieList extends React.Component
// {
   
//     componentWillMount()
//     {
//         this.props.fetchPosts();
//     }

//     render()
//     {
//         return(
//             <div>
//                 <ul>
//                 {
//                     this.props.posts.map(store => <li key={store.id}>{store.displayName}</li>)
//                 }
//                 </ul>
//                 <ul>
//                 {
//                     // this.state.pies.map(pie => <li key={pie.id}>{pie.displayName}</li>)
//                 }
//                 </ul>
//             </div>
//         )
//     }
// }
// const mapStateToProps = state => ({
//     posts: state.posts.items
// });
// export default connect(mapStateToProps,{ fetchPosts })(posts);