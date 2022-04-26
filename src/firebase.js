import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyBuRi7Ju918A796KnuoMTAAcCfiE79EP3U',
  authDomain: 'work-tool-9813d.firebaseapp.com',
  projectId: 'work-tool-9813d',
  storageBucket: 'work-tool-9813d.appspot.com',
  messagingSenderId: '610825090148',
  appId: '1:610825090148:web:67053af7128cdb42171b71'
}

const firebaseApp = initializeApp(firebaseConfig)

export const db = getFirestore(firebaseApp)

export default db
