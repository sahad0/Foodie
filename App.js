import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { configureStore } from '@reduxjs/toolkit';
import React, { useEffect } from 'react';
import SplashScreen from 'react-native-splash-screen';
import RootNavigation from './Router/Router';
import cartReducer from "./features/cart";
import { Provider } from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {persistReducer,persistStore} from "redux-persist";
import { PersistGate } from 'redux-persist/lib/integration/react'



export default function App() {

  useEffect(() => {
    SplashScreen.hide();

    GoogleSignin.configure({
      webClientId: "378059491355-jgjqbvkbs1g7jhkgei2787v4chebchu6.apps.googleusercontent.com",
    });
  }, []);


 

  const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
  }
  const persistedReducer = persistReducer(persistConfig, cartReducer);
  
  const store = configureStore({
    reducer: {
        cart: persistedReducer,
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
  });

  const persistor = persistStore(store)



  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
      <RootNavigation />
      </PersistGate>
    </Provider>

  )
}

