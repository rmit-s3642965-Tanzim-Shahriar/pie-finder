import { FETCH_POSTS,NEW_POST } from './types';

export const fetchPosts = () => dispatch =>
{
    fetch('https://pie.now.sh/stores')
        .then(res => res.json())
        .then(posts =>
            dispatch({
                type: FETCH_POSTS,
                payload: posts
            })
        );    
       
    // Axios.get('https://pie.now.sh/pies').then(res =>
    // {
    //     console.log(res);
    //     this.setState({pies: res.data});
    // });

};