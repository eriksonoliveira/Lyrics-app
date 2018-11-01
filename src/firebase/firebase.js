import firebase from "@firebase/app";
import "@firebase/database";
import "@firebase/auth";
import { config } from "../constants/firebase_config";

// const config = {
//   apiKey: "AIzaSyD0rJ5MGF6_IjHgV4xJXWuUwZ7KKxf_2ME",
//   authDomain: "lyrics-finder-861fb.firebaseapp.com",
//   databaseURL: "https://lyrics-finder-861fb.firebaseio.com",
//   projectId: "lyrics-finder-861fb",
//   storageBucket: "lyrics-finder-861fb.appspot.com",
//   messagingSenderId: "952185169443"
// };

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

const auth = firebase.auth();
const db = firebase.database();

export { db, auth };
