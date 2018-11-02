import firebase from "firebase/app";
import "firebase/database";
import "firebase/auth";
import { config } from "../constants/firebase_config"; //Firebase config

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

const auth = firebase.auth();
const db = firebase.database();

export { db, auth };
