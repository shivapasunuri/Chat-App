import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCQtCwY4V4em-qb5RQyeqzyhtpbF0cxMTc",
  authDomain: "chat-web-app-4b981.firebaseapp.com",
  databaseURL:
    "https://chat-web-app-4b981-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "chat-web-app-4b981",
  storageBucket: "chat-web-app-4b981.appspot.com",
  messagingSenderId: "226071262451",
  appId: "1:226071262451:web:7ede6d3d317b0768bbf386",
};

const app = firebase.initializeApp(firebaseConfig);
export const auth = app.auth();
export const database = app.database();
export const storage = app.storage();
