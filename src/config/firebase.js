
import { initializeApp } from "firebase/app";
import { initializeAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyClMIQdu62v18S9fx2bC43NcxTbdeX0Mww",
  authDomain: "projeto2-7e486.firebaseapp.com",
  projectId: "projeto2-7e486",
  storageBucket: "projeto2-7e486.appspot.com",
  messagingSenderId: "625144854649",
  appId: "1:625144854649:web:433329c454574a1fb5fca8",
  measurementId: "G-T1YWHDN0BC"
};


const app = initializeApp(firebaseConfig);
const auth = initializeAuth(app)

export { app, auth }