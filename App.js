import { GoogleSignin } from '@react-native-google-signin/google-signin';
import React, { useEffect } from 'react';
import SplashScreen from 'react-native-splash-screen';
import RootNavigation from './Router/navigation';


export default function App() {

  useEffect(() => {
    SplashScreen.hide();

GoogleSignin.configure({
  webClientId: "378059491355-jgjqbvkbs1g7jhkgei2787v4chebchu6.apps.googleusercontent.com",
});
  }, [])

  return (

    <RootNavigation />

  )
}

