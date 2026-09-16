
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "interviewiq-aaaa7.firebaseapp.com",
  projectId: "interviewiq-aaaa7",
  storageBucket: "interviewiq-aaaa7.firebasestorage.app",
  messagingSenderId: "407513180708",
  appId: "1:407513180708:web:93e61c7de8f7e3f161c6b1"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const provider = new GoogleAuthProvider()
provider.setCustomParameters({ prompt: "select_account" })

export {auth , provider}