
import { applyMiddleware, createStore, Store } from "redux";
import thunk from "redux-thunk";
import  reducers from "./reducers/index";




/**
 * Enables the instantiation of a redux store which could be passed on
 * to the `Provider` supplied by the `react-redux` library.
 *
 * @return {Store<any, AnyAction> & Store<S & {}, A> & {dispatch: any}} Redux Store
 */
const configureStore = () => {
    //previous code
    
    return createStore(
        reducers,
        applyMiddleware(thunk)
    );

    // return createStore(
        // const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
        // const store = createStore(reducers, /* preloadedState, */ composeEnhancers(
        //     applyMiddleware(thunk)
        //   ));
        
    //);
    return store;
};

export const store = configureStore();

