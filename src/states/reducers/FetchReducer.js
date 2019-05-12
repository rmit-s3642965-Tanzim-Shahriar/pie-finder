import { FETCH_STORES,FETCH_PIES, STORE_FETCH_FAIL,PIE_FETCH_FAIL } from '../actions/types';

const initialState = {
    stores: [],
    pies: [],
    errors: [],
    loaded: {storeLoaded:false,pieLoaded:false}
}

export default (state = initialState,action) =>
{
    switch(action.type)
    {
        case FETCH_STORES:
            return {
                ...state,
                stores: action.payload,
                loaded:{
                    storeLoaded : true
                }
            };
        case FETCH_PIES:
            return {
                ...state,
                pies: action.payload,
                loaded: {
                    pieLoaded: true
                }
            };
        case STORE_FETCH_FAIL:
            return{
                ...state,
                errors: action.error
            }
        case PIE_FETCH_FAIL:
            return{
                ...state,
                errors: action.error
            }
        default:
            return state;
    }
}