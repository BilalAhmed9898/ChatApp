import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
import { getStorage} from "firebase/storage";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyB9E1UMIDBGIFtjShV3bu0uIUObQ8GcrK4",
  authDomain: "chatapp-ff460.firebaseapp.com",
  projectId: "chatapp-ff460",
  storageBucket: "chatapp-ff460.appspot.com",
  messagingSenderId: "783461774820",
  appId: "1:783461774820:web:d9f4ca11732f3cd96c03f1",
  measurementId: "G-91JBLRWD9W"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const analytics = getAnalytics(app);
export const storage = getStorage();
export const db =   getFirestore();