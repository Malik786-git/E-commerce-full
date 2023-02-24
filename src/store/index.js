import {createStore} from 'redux';
import shopReducer from './reducers/shopReducer';
import { persistReducer, persistStore} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
    key: 'persist-store',
    storage
}

const persistedReducer = persistReducer(persistConfig, shopReducer);
export const store = createStore(persistedReducer);
export const persistor = persistStore(store);

