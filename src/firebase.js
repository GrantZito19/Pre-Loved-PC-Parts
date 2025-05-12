// File: src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Load your Firebase config from environment variables to keep sensitive keys out of source control.
// Create a .env file at your project root with the following variables:
// REACT_APP_FIREBASE_API_KEY=your_api_key
// REACT_APP_FIREBASE_AUTH_DOMAIN=your_project_id.firebaseapp.com
// REACT_APP_FIREBASE_PROJECT_ID=your_project_id
// REACT_APP_FIREBASE_STORAGE_BUCKET=your_project_id.appspot.com
// REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
// REACT_APP_FIREBASE_APP_ID=your_app_id
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

// Firestore Security rules example (to be set in Firebase console under Firestore → Rules):
// rules_version = '2';
// service cloud.firestore {
//   match /databases/{database}/documents {
//     // Allow read/write access only to authenticated users for 'parts' collection
//     match /parts/{partId} {
//       allow read, write: if request.auth != null
//         && request.resource.data.keys().hasAll(['name', 'description', 'category', 'createdAt'])
//         && request.resource.data.name is string
//         && request.resource.data.description is string
//         && request.resource.data.category is string
//         && request.resource.data.createdAt is timestamp;
//     }
//   }
// }

