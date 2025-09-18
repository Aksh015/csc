// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
// For Firebase JS SDK v9-compat and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBYRGyPJkR0V24PJRz1jkdto5uOb1b5908",
  authDomain: "csc1-59e3e.firebaseapp.com",
  projectId: "csc1-59e3e",
  storageBucket: "csc1-59e3e.firebasestorage.app",
  messagingSenderId: "1040340638332",
  appId: "1:1040340638332:web:c7f06f35d5f5f5b3d9c7f9",
  measurementId: "G-CK90GSVS69"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

// Initialize Google Auth Provider
export const googleProvider = new GoogleAuthProvider();
// Set custom parameters to specify the domain
googleProvider.setCustomParameters({
  hd: 'nirmauni.ac.in' // Hosted domain parameter to restrict to Nirma University emails
});

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);

export default app;