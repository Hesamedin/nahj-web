import { applyMiddleware, compose, createStore } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createHistory from 'history/createBrowserHistory';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';

export const history = createHistory();

const initialState = {};
// const enhancers = [];
const middleware = [
    thunk,
    routerMiddleware(history)
];

const composedEnhancersInDebug = composeWithDevTools(
    applyMiddleware(...middleware),
    // ...enhancers
);

const composedEnhancersInProduction = compose(
    applyMiddleware(...middleware),
    // ...enhancers
);

const composedEnhancers = (process.env.NODE_ENV === 'development') ? composedEnhancersInDebug :
    composedEnhancersInProduction;

export default () => {
    return createStore(
        rootReducer,
        initialState,
        composedEnhancers
    );
};
