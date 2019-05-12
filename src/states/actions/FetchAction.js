import { FETCH_STORES,FETCH_PIES, STORE_FETCH_FAIL,PIE_FETCH_FAIL } from './types';
import { isFlowBaseAnnotation } from '@babel/types';

export const fetchStores = () => dispatch =>
{
    fetch('https://pie.now.sh/stores')
        .then(res => res.json())
        .then(stores =>
            dispatch({
                type: FETCH_STORES,
                payload: stores,
                storeLoaded: true
            })
        )
        .catch(err => {
            dispatch({
                type:STORE_FETCH_FAIL,
                error: ("Fetching Stores Failed.")
            });
        });    

};


export const fetchPies = () => dispatch =>
{
    fetch('https://pie.now.sh/pies')
        .then(res => res.json())
        .then(pies =>
            dispatch({
                type: FETCH_PIES,
                payload: pies,
                pieLoaded:true
            })
        ).catch(err => {
            dispatch({
                type:PIE_FETCH_FAIL,
                error: ("Fetching Pies Failed.")
            });
        });  

};




