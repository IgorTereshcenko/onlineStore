import { createStore,combineReducers } from 'redux';
import data from '../components/catalog/catalogSlice';
import shoppingcard from '../components/shoppingcard/shoppingcardSlice';
import ordering from '../components/ordering/orderingSlice';
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
    key: 'root',
    storage,
    blacklist: ["data", "shopsLoadingStatus",'total','ordering','purchased']
}

const rootReducer = combineReducers({
    data,
    shoppingcard,
    ordering
})  

const persistedReducer = persistReducer(persistConfig,rootReducer)

export let store = createStore(persistedReducer)
export let persistor = persistStore(store)