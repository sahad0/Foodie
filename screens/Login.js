import { View, Text, Button } from 'react-native'
import React from 'react'
import auth from '@react-native-firebase/auth';
import { GoogleSignin } from '@react-native-google-signin/google-signin';

export default function Login() {
   
    async function onGoogleButtonPress() {
        const { idToken } = await GoogleSignin.signIn();
        const googleCredential = auth.GoogleAuthProvider.credential(idToken);
        const res = await auth().signInWithCredential(googleCredential) ;
       console.log(res)
      }
     async function signOut()  {
        try {
          await GoogleSignin.revokeAccess();
          await GoogleSignin.signOut();
          return auth().signOut();
          
        } catch (error) {
          console.error(error);
        }
      };  
   
      return (
        <>
        <Button
          title="Google Sign-In"
          onPress={() => onGoogleButtonPress().then(() => console.log('Signed in with Google!'))}
        />
        <Button title='SignOut' onPress={()=>signOut().then(() => console.log('Signed out with Google!')) }/>
        </>
      );
    
}