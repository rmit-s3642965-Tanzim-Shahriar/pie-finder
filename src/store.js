import { createStore,applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './states/reducers';
const initialState = {};

const middleware = [thunk];

const store = createStore(
    rootReducer,
    initialState,
    compose(
        applyMiddleware(...middleware),
        // Uncomment the next line to use redux devtools
        // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
      )
);
export default store;