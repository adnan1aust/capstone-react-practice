import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { getFirestore, doc, setDoc, getDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCeHZxTsHkH1QImmKWNDuevi97pDHM8jXg",
  authDomain: "react-ecom-demo-db-8c36f.firebaseapp.com",
  projectId: "react-ecom-demo-db-8c36f",
  storageBucket: "react-ecom-demo-db-8c36f.appspot.com",
  messagingSenderId: "965078386984",
  appId: "1:965078386984:web:241604e53352e0bca7e81d",
};

const firebaseApp = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const db = getFirestore(firebaseApp); // Pass the Firebase app instance
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
export const signInWithGoogleRedirect = () =>
  signInWithRedirect(auth, provider);

//create document, db if not available
export const createUserDocument = async (userAuth, additionalInfo = {}) => {
  if (!userAuth) return;
  const userDocRef = doc(db, "users", userAuth.uid);
  const userSnapShot = await getDoc(userDocRef);
  if (!userSnapShot.exists()) {
    const { displayName, email } = userAuth;
    const createAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createAt,
        ...additionalInfo,
      });
    } catch (error) {
      console.log(error);
    }
  }
  return userDocRef;
};

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;
  const response = await createUserWithEmailAndPassword(auth, email, password);
  return response;
};

export const signInAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;
  const response = await signInWithEmailAndPassword(auth, email, password);
  return response;
};

export const signOutUser = async () => await signOut(auth);
