import { configureStore } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import thunk from 'redux-thunk';
import rootReducer from '~/Redux/Slices';


const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['userInfo']
}

// const persistedReducer = persistReducer(persistConfig, rootReducer)
const persistedReducer = persistReducer(persistConfig, rootReducer)
//persistedReducer, applyMiddleware(thunk)
export const store = configureStore({
    reducer: persistedReducer,
    devTools: process.env.NODE_ENV !== 'production',
    middleware: [thunk]
});
// ,
// middleware: applyMiddleware(thunk)
export const persistor = persistStore(store)