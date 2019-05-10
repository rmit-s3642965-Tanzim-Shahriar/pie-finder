import { FETCH_STORES,FETCH_PIES } from './types';

export const fetchStores = () => dispatch =>
{
    fetch('https://pie.now.sh/stores')
        .then(res => res.json())
        .then(stores =>
            dispatch({
                type: FETCH_STORES,
                payload: stores
            })
        );    

};


export const fetchPies = () => dispatch =>
{
    fetch('https://pie.now.sh/pies')
        .then(res => res.json())
        .then(pies =>
            dispatch({
                type: FETCH_PIES,
                payload: pies
            })
        );  

};




