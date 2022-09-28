import { configureStore } from '@reduxjs/toolkit';
import React, { useEffect } from 'react';
import SplashScreen from 'react-native-splash-screen';

import RootNavigation from './navigation';


export default function App() {

  useEffect(() => {
    SplashScreen.hide();
  }, [])

  return (

    <RootNavigation />

  )
}

