import { FETCH_STORES,FETCH_PIES, FETCH_FAIL } from '../actions/types';

const initialState = {
    stores: [],
    pies: [],
    errors: []
    
}

export default (state = initialState,action) =>
{
    switch(action.type)
    {
        case FETCH_STORES:
            return {
                ...state,
                stores: action.payload
            };
        case FETCH_PIES:
            return {
                ...state,
                pies: action.payload
            };
        case FETCH_FAIL:
            return{
                ...state,
                errors: action.error         
            }
        default:
            return state;
    }
}