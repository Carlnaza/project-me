import firebase from 'firebase/app'
import 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyBd8-cOLnbfJE0mHUqxRQRg2KkVUW4-rxo",
  authDomain: "projectme-e7883.firebaseapp.com",
  projectId: "projectme-e7883",
  storageBucket: "projectme-e7883.appspot.com",
  messagingSenderId: "483328742013",
  appId: "1:483328742013:web:ea9d07dd04ffad2e189714",
  databaseURL: "https://projectme-e7883.firebaseapp.com"
};

firebase.initializeApp(firebaseConfig)

const storage = firebase.storage()

export { storage, firebase as default }