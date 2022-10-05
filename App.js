import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { configureStore } from '@reduxjs/toolkit';
import React, { useEffect } from 'react';
import SplashScreen from 'react-native-splash-screen';
import RootNavigation from './Router/navigation';
import cartReducer from "./features/cart";
import { Provider } from 'react-redux';


export default function App() {

  useEffect(() => {
    SplashScreen.hide();

    GoogleSignin.configure({
      webClientId: "378059491355-jgjqbvkbs1g7jhkgei2787v4chebchu6.apps.googleusercontent.com",
    });
  }, []);


  const store = configureStore({
    reducer: {
        cart: cartReducer,
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});


  return (
    <Provider store={store}>
      <RootNavigation />
    </Provider>

  )
}

