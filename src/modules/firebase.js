import firebase from 'firebase'

const config = {
  apiKey: "",
  authDomain: "pvc-pricing.firebaseapp.com",
  databaseURL: "https://pvc-pricing.firebaseio.com",
  projectId: "pvc-pricing",
  storageBucket: "pvc-pricing.appspot.com",
  messagingSenderId: ""
}

export const firebaseConnect = () =>firebase.initializeApp(config)
