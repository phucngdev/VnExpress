import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCVbw54SSWfc7hSTO0uvOuksyc3QdGBu10",
  authDomain: "vnexpress-14185.firebaseapp.com",
  databaseURL: "https://vnexpress-14185-default-rtdb.firebaseio.com",
  projectId: "vnexpress-14185",
  storageBucket: "vnexpress-14185.appspot.com",
  messagingSenderId: "367296333138",
  appId: "1:367296333138:web:65e879dea7f2dfc426268b",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const storage = getStorage(app);
const database = getDatabase(app);
export { auth, database, storage };
