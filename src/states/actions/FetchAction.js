import { FETCH_STORES,FETCH_PIES, FETCH_FAIL } from './types';

export const fetchStores = () => dispatch =>
{
    fetch('https://pie.now.sh/stores')
        .then(res => res.json())
        .then(stores =>
            dispatch({
                type: FETCH_STORES,
                payload: stores
            })
        )
        .catch(err => {
            dispatch({
                type:FETCH_FAIL,
                error: "Fetching stores from api failed"
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
                payload: pies
            })
        ).catch(err => {
            dispatch({
                type:FETCH_FAIL,
                error: "Fetching pies from api failed"
            });
        });  

};




