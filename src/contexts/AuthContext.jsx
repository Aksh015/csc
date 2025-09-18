import React, { createContext, useContext, useState, useEffect } from 'react';
import { 
  signInWithPopup,
  signInWithRedirect,
  getRedirectResult,
  signOut,
  onAuthStateChanged
} from 'firebase/auth';
import { doc, setDoc, getDoc } from 'firebase/firestore';
import { auth, db, googleProvider } from '../firebase';

const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Google Sign-In function for Nirma University accounts (with fallback to redirect)
  async function signInWithGoogle() {
    try {
      console.log('Attempting Google Sign-In...');
      
      // Try popup first
      const result = await signInWithPopup(auth, googleProvider);
      console.log('Sign-in successful:', result.user.email);
      return await handleAuthResult(result);
    } catch (error) {
      console.error('Sign-in error:', error.code, error.message);
      
      if (error.code === 'auth/popup-blocked' || error.code === 'auth/unauthorized-domain') {
        // Fallback to redirect if popup fails
        console.log('Popup blocked or unauthorized domain, trying redirect...');
        try {
          await signInWithRedirect(auth, googleProvider);
          return null; // Result will be handled by getRedirectResult
        } catch (redirectError) {
          console.error('Redirect also failed:', redirectError.code, redirectError.message);
          throw redirectError;
        }
      }
      
      // Handle specific auth errors with user-friendly messages
      if (error.code === 'auth/cancelled-popup-request') {
        throw new Error('Sign-in was cancelled. Please try again.');
      } else if (error.code === 'auth/popup-closed-by-user') {
        throw new Error('Sign-in popup was closed. Please try again.');
      } else if (error.code === 'auth/network-request-failed') {
        throw new Error('Network error. Please check your connection and try again.');
      }
      
      throw error;
    }
  }

  // Handle authentication result (common logic for popup and redirect)
  async function handleAuthResult(result) {
    if (!result) return null;
    
    const user = result.user;
    
    // Check if the user's email is from Nirma University
    if (!user.email.endsWith('@nirmauni.ac.in')) {
      // Sign out the user if they're not from Nirma University
      await signOut(auth);
      throw new Error('Please use your Nirma University email (@nirmauni.ac.in) to sign in.');
    }
    
    // Optional: Try to save user profile to Firestore (don't fail if it doesn't work)
    try {
      const userDoc = await getDoc(doc(db, 'users', user.uid));
      
      if (!userDoc.exists()) {
        // Create new user profile
        const userData = {
          uid: user.uid,
          email: user.email,
          displayName: user.displayName,
          photoURL: user.photoURL,
          createdAt: new Date().toISOString(),
          isNewUser: true
        };
        
        await setDoc(doc(db, 'users', user.uid), userData);
        console.log('User profile created successfully');
      } else {
        console.log('User profile already exists');
      }
    } catch (firestoreError) {
      console.warn('Firestore is not available, continuing without user profile storage:', firestoreError.message);
      // Authentication continues to work even without Firestore
    }
    
    return result;
  }

  // Logout function
  function logout() {
    return signOut(auth);
  }

  // Get user profile from Firestore
  async function getUserProfile(uid) {
    try {
      const docRef = doc(db, 'users', uid);
      const docSnap = await getDoc(docRef);
      
      if (docSnap.exists()) {
        return docSnap.data();
      }
      return null;
    } catch (error) {
      console.warn('Failed to get user profile from Firestore:', error.message);
      return null;
    }
  }

  useEffect(() => {
    // Handle redirect result on page load
    const handleRedirectResult = async () => {
      try {
        const result = await getRedirectResult(auth);
        if (result) {
          await handleAuthResult(result);
        }
      } catch (error) {
        console.error('Redirect authentication failed:', error);
      }
    };

    handleRedirectResult();

    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  const value = {
    currentUser,
    signInWithGoogle,
    logout,
    getUserProfile
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}