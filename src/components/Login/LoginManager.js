import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';

export const initializeLoginFramework = () => {
    if(firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig);
    }
}

export const handleGoogleSignIn = () => {
    const googleProvider = new firebase.auth.GoogleAuthProvider();
    return firebase.auth().signInWithPopup(googleProvider)
    .then(res => {
      const {displayName, photoURL, email} = res.user;
      const signedInUser = {
        isSignedIn: true,
        name: displayName,
        email: email,
        photo: photoURL,
        success: true
      };
      storeUserToken();
      return signedInUser;
    })
    .catch(error => {
        const errorMessage = error.message;
      console.log(error.message);
      return errorMessage;
    })
  };

  const storeUserToken = () => {
    firebase.auth().currentUser.getIdToken(true)
    .then(function(idToken) {
      sessionStorage.setItem('token', idToken)
    })
    .catch(function(error) {
      const errorMessage = error.message;
      return errorMessage;
    });
    
    
  };


  export const handleSignOut = () => {
    return firebase.auth().signOut()
    .then(res => {
      const signedOutUser = {
        isSignedIn: false,
        name: '',
        email: '',
        photo: '',
        error: '',
        success: false
      }
      return signedOutUser;
    }).catch(error => {
        const errorMessage = error.message;
        console.log(error.message);
        return errorMessage;
    });
  }

