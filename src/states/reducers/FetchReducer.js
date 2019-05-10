import { FETCH_STORES,FETCH_PIES } from '../actions/types';

const initialState = {
    stores: [],
    pies: [],
    
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
        default:
            return state;
    }
}