import firebase from 'firebase/app'
import "firebase/firestore"

const app = firebase.initializeApp({
  apiKey: "AIzaSyAIbcfPvZqbcziGLm92MQXo5v60jqPhpgI",
  authDomain: "react-store-8df9a.firebaseapp.com",
  projectId: "react-store-8df9a",
  storageBucket: "react-store-8df9a.appspot.com",
  messagingSenderId: "566504619343",
  appId: "1:566504619343:web:60de631f0f9acb0f0d193a"
})

export function getFirebase() {
  return app
}

export function getFirestore() {
  return firebase.firestore(app)
}

export function getDocumentIdField() {
  return firebase.firestore.FieldPath.documentId()
}