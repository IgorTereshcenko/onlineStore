import { createStore } from 'redux';
import reducer from '../reducers';
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
    key: 'root',
    storage,
    blacklist: ["data", "shopsLoadingStatus",'total','ordering','purchased']
}

const persistedReducer = persistReducer(persistConfig, reducer)

export let store = createStore(persistedReducer)
export let persistor = persistStore(store)


/* const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()); */

/* export default {store,persistor};  */