import { View, Text, Button } from 'react-native'
import React from 'react'
import auth from '@react-native-firebase/auth';
import { GoogleSignin } from '@react-native-google-signin/google-signin';

export default function Login() {
   
    async function onGoogleButtonPress() {
        // Get the users ID token
        const { idToken } = await GoogleSignin.signIn();
        
        // Create a Google credential with the token
        const googleCredential = auth.GoogleAuthProvider.credential(idToken);
        console.log(googleCredential)
      
        // Sign-in the user with the credential
        return auth().signInWithCredential(googleCredential);
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