# 🔥 Complete Firebase Setup Guide for CSC Website

This guide will walk you through setting up Firebase for your Cyber Security Club website with Google Authentication and Firestore database.

## 📋 Table of Contents
1. [Creating Firebase Project](#1-creating-firebase-project)
2. [Setting up Firebase Authentication](#2-setting-up-firebase-authentication)
3. [Configuring Google Sign-In](#3-configuring-google-sign-in)
4. [Setting up Firestore Database](#4-setting-up-firestore-database)
5. [Getting Firebase Configuration](#5-getting-firebase-configuration)
6. [Updating Your Code](#6-updating-your-code)
7. [Testing Your Setup](#7-testing-your-setup)
8. [Security Rules](#8-security-rules)
9. [Deployment Setup](#9-deployment-setup)
10. [Troubleshooting](#10-troubleshooting)

---

## 1. Creating Firebase Project

### Step 1.1: Go to Firebase Console
1. Open your web browser
2. Navigate to [Firebase Console](https://console.firebase.google.com/)
3. Sign in with your Google account

### Step 1.2: Create New Project
1. Click **"Create a project"** or **"Add project"**
2. Enter project name: `csc-website` (or your preferred name)
3. Click **"Continue"**
4. **Google Analytics**: Choose "Enable" or "Not right now" (recommended: Enable)
5. If enabled, select your analytics account or create new one
6. Click **"Create project"**
7. Wait for project creation (usually 30-60 seconds)
8. Click **"Continue"**

---

## 2. Setting up Firebase Authentication

### Step 2.1: Enable Authentication
1. In Firebase Console, click **"Authentication"** in left sidebar
2. Click **"Get started"** button
3. Go to **"Sign-in method"** tab

### Step 2.2: Enable Google Sign-In
1. Click on **"Google"** provider
2. Toggle **"Enable"** switch to ON
3. **Project support email**: Select your email from dropdown
4. Click **"Save"**

### Step 2.3: Configure Authorized Domains
1. Still in **"Sign-in method"** tab
2. Scroll down to **"Authorized domains"**
3. You should see `localhost` already added
4. For production, you'll add your domain here later

---

## 3. Configuring Google Sign-In

### Step 3.1: Set up OAuth Consent Screen
1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Select your Firebase project from dropdown
3. Navigate to **"APIs & Services" > "OAuth consent screen"**
4. Choose **"Internal"** (if using Google Workspace) or **"External"**
5. Fill required fields:
   - **App name**: CSC Website
   - **User support email**: Your email
   - **Developer contact email**: Your email
6. Click **"Save and Continue"**

### Step 3.2: Configure OAuth Scopes (if needed)
1. Click **"Add or Remove Scopes"**
2. Select basic scopes:
   - `../auth/userinfo.email`
   - `../auth/userinfo.profile`
   - `openid`
3. Click **"Update"** then **"Save and Continue"**

### Step 3.3: Add Test Users (for External apps)
1. If you selected "External", add test users
2. Click **"Add Users"**
3. Add email addresses that can test the app
4. Click **"Save and Continue"**

---

## 4. Setting up Firestore Database

### Step 4.1: Create Firestore Database
1. In Firebase Console, click **"Firestore Database"**
2. Click **"Create database"**
3. **Security rules**: Choose **"Start in test mode"** (we'll secure later)
4. **Location**: Choose closest region (e.g., `us-central1`)
5. Click **"Done"**

### Step 4.2: Create Collections Structure
1. Click **"Start collection"**
2. **Collection ID**: `users`
3. Click **"Next"**
4. **Document ID**: Leave as **"Auto-ID"**
5. Add first field:
   - **Field**: `email`
   - **Type**: `string`
   - **Value**: `test@nirmauni.ac.in`
6. Click **"Save"**

---

## 5. Getting Firebase Configuration

### Step 5.1: Add Web App to Firebase
1. In Firebase Console overview, click **</> (Web)** icon
2. **App nickname**: `CSC Website`
3. **Firebase Hosting**: Leave unchecked for now
4. Click **"Register app"**

### Step 5.2: Copy Configuration
1. Copy the config object that appears:
```javascript
const firebaseConfig = {
  apiKey: "your-api-key-here",
  authDomain: "your-project-id.firebaseapp.com",
  projectId: "your-project-id",
  storageBucket: "your-project-id.appspot.com",
  messagingSenderId: "123456789",
  appId: "your-app-id-here"
};
```
2. **Important**: Keep this information secure!
3. Click **"Continue to console"**

---

## 6. Updating Your Code

### Step 6.1: Update Firebase Configuration
1. Open your project in VS Code
2. Navigate to `src/firebase.js`
3. Replace the placeholder config with your actual config:

```javascript
// src/firebase.js
import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC...", // Your actual API key
  authDomain: "csc-website.firebaseapp.com", // Your actual domain
  projectId: "csc-website", // Your actual project ID
  storageBucket: "csc-website.appspot.com", // Your actual storage bucket
  messagingSenderId: "123456789", // Your actual sender ID
  appId: "1:123456789:web:abcdef..." // Your actual app ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

// Initialize Google Auth Provider
export const googleProvider = new GoogleAuthProvider();
// Set custom parameters to restrict to Nirma University emails
googleProvider.setCustomParameters({
  hd: 'nirmauni.ac.in' // Hosted domain parameter
});

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);

export default app;
```

### Step 6.2: Verify Environment Variables (Optional)
For added security, you can use environment variables:

1. Create `.env` file in project root:
```env
VITE_FIREBASE_API_KEY=your-api-key-here
VITE_FIREBASE_AUTH_DOMAIN=your-project-id.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your-project-id
VITE_FIREBASE_STORAGE_BUCKET=your-project-id.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=123456789
VITE_FIREBASE_APP_ID=your-app-id-here
```

2. Update `src/firebase.js`:
```javascript
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID
};
```

3. Add `.env` to your `.gitignore` file

---

## 7. Testing Your Setup

### Step 7.1: Start Development Server
```bash
npm run dev
```

### Step 7.2: Test Google Sign-In
1. Navigate to `http://localhost:5175/login`
2. Click **"Sign in with Nirma Google Account"**
3. You should see Google sign-in popup
4. Sign in with a `@nirmauni.ac.in` account
5. Check if you're redirected to home page
6. Verify welcome message appears

### Step 7.3: Check Firestore Data
1. Go back to Firebase Console
2. Navigate to **"Firestore Database"**
3. Check if a new user document was created in `users` collection
4. Verify it contains user data (email, displayName, etc.)

### Step 7.4: Test Authentication Flow
1. **Sign Out**: Click logout button
2. **Sign In Again**: Verify it works consistently
3. **Domain Restriction**: Try signing in with non-Nirma email (should fail)

---

## 8. Security Rules

### Step 8.1: Update Firestore Security Rules
1. In Firebase Console, go to **"Firestore Database"**
2. Click **"Rules"** tab
3. Replace default rules with:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Users can only access their own document
    match /users/{userId} {
      allow read, write: if request.auth != null && request.auth.uid == userId;
    }
    
    // Deny access to all other documents by default
    match /{document=**} {
      allow read, write: if false;
    }
  }
}
```

4. Click **"Publish"**

### Step 8.2: Authentication Rules
Authentication rules are already secure by default:
- Only `@nirmauni.ac.in` emails can sign in
- Users can only access their own data
- All requests require authentication

---

## 9. Deployment Setup

### Step 9.1: Install Firebase CLI
```bash
npm install -g firebase-tools
```

### Step 9.2: Login to Firebase
```bash
firebase login
```

### Step 9.3: Initialize Firebase Hosting
```bash
firebase init hosting
```

Choose:
- Use existing project: Select your Firebase project
- Public directory: `dist`
- Single-page app: `Yes`
- Automatic builds with GitHub: `No` (for now)

### Step 9.4: Build and Deploy
```bash
npm run build
firebase deploy
```

### Step 9.5: Update Authorized Domains
1. After deployment, note your Firebase Hosting URL
2. Go to Firebase Console > Authentication > Sign-in method
3. Add your production domain to **"Authorized domains"**

---

## 10. Troubleshooting

### Common Issues and Solutions

#### Issue: "Firebase: Error (auth/unauthorized-domain)"
**Solution**: 
1. Go to Firebase Console > Authentication > Sign-in method
2. Add your domain to "Authorized domains" list
3. For localhost, add: `localhost`
4. For production, add your actual domain

#### Issue: Google Sign-in popup blocked
**Solution**:
1. Allow popups in browser settings
2. Or use `signInWithRedirect` instead of `signInWithPopup`

#### Issue: "Firebase: Error (auth/admin-restricted-operation)"
**Solution**:
1. Check OAuth consent screen configuration
2. Ensure app is published or add test users
3. Verify Google Cloud project settings

#### Issue: Firestore permission denied
**Solution**:
1. Check Firestore security rules
2. Ensure user is authenticated
3. Verify document path matches rules

#### Issue: Environment variables not working
**Solution**:
1. Restart development server after adding `.env`
2. Ensure variables start with `VITE_`
3. Check for typos in variable names

### Debug Tools

#### Check Authentication State
```javascript
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase';

onAuthStateChanged(auth, (user) => {
  if (user) {
    console.log('User signed in:', user);
  } else {
    console.log('User signed out');
  }
});
```

#### Check Firestore Connection
```javascript
import { doc, getDoc } from 'firebase/firestore';
import { db } from './firebase';

const testFirestore = async () => {
  try {
    const docRef = doc(db, 'users', 'test');
    const docSnap = await getDoc(docRef);
    console.log('Firestore connected successfully');
  } catch (error) {
    console.error('Firestore connection failed:', error);
  }
};
```

---

## 🎉 Congratulations!

You have successfully set up Firebase for your CSC website! Your application now supports:

- ✅ Google Sign-In for Nirma University accounts only
- ✅ Secure user data storage in Firestore
- ✅ Proper security rules
- ✅ Production-ready configuration

### Next Steps
1. Test thoroughly with different accounts
2. Deploy to production
3. Monitor usage in Firebase Console
4. Set up analytics (optional)
5. Configure additional features as needed

### Support Resources
- [Firebase Documentation](https://firebase.google.com/docs)
- [Firebase Console](https://console.firebase.google.com/)
- [Google Cloud Console](https://console.cloud.google.com/)
- [Stack Overflow - Firebase](https://stackoverflow.com/questions/tagged/firebase)

---

**Note**: Keep your Firebase configuration secure and never commit sensitive keys to public repositories!