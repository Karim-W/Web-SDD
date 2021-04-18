import firebase from  'firebase'
import 'firebase/auth'

const app = firebase.initializeApp({
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.EACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGE_SENDER_ID,
    appId: process.env.REACT_APP_FIREBASE_APP_ID,
//   apiKey: "AIzaSyAxqxtGSNNxbw4PrjF9xdMtGcJJrYga8xc",
//   authDomain: "socialdistancedetector-7a918.firebaseapp.com",
//   databaseURL: "https://socialdistancedetector-7a918.firebaseio.com",
//   projectId: "socialdistancedetector-7a918",
//   storageBucket: "socialdistancedetector-7a918.appspot.com",
//   messagingSenderId: "919085788764",
//   appId: "1:919085788764:web:7c8aab1847ea4a9d8e4099",
//   measurementId: "G-6F676HGJ6X"
})

export const auth = app.auth()
export default app