import firebase from 'firebase/app';
import * as firebaseui from 'firebaseui';
import 'firebase/firestore';

// Configuration (mettez-y les vôtres !)
const firebaseConfig = {
  apiKey: "AIzaSyCq8AIp4VBWtww6QRA2uaU2q_zcZ8CYlHY",
  authDomain: "panier-achats.firebaseapp.com",
  databaseURL: "https://panier-achats-default-rtdb.firebaseio.com",
  projectId: "panier-achats",
  storageBucket: "panier-achats.appspot.com",
  messagingSenderId: "786866074949",
  appId: "1:786866074949:web:58cae68329b89d0f00ba2c"
};

// Initialiser Firebase
if(!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

// Initialiser FirebaseUI
export const instanceFirebaseUI = new firebaseui.auth.AuthUI(firebase.auth());

// Initialiser Firestore
export const firestore = firebase.firestore();
