import React, { useState } from 'react';
import { auth, googleProvider } from '../firebase';
import { signInWithPopup } from 'firebase/auth';

const AuthTest = () => {
  const [status, setStatus] = useState('');
  const [error, setError] = useState('');

  const testBasicAuth = async () => {
    try {
      setStatus('Testing Firebase connection...');
      setError('');
      
      console.log('Auth object:', auth);
      console.log('Google provider:', googleProvider);
      
      setStatus('Attempting Google Sign-In...');
      const result = await signInWithPopup(auth, googleProvider);
      
      console.log('Sign-in result:', result);
      console.log('User email:', result.user.email);
      
      setStatus(`Success! Signed in as: ${result.user.email}`);
      
    } catch (error) {
      console.error('Auth test error:', error);
      setError(`Error: ${error.code} - ${error.message}`);
      setStatus('Authentication failed');
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-gray-800 rounded-lg">
      <h2 className="text-xl font-bold text-white mb-4">Authentication Test</h2>
      
      <button 
        onClick={testBasicAuth}
        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-4"
      >
        Test Google Sign-In
      </button>
      
      {status && (
        <div className="mb-4 p-3 bg-blue-900/50 border border-blue-500 text-blue-200 rounded">
          Status: {status}
        </div>
      )}
      
      {error && (
        <div className="mb-4 p-3 bg-red-900/50 border border-red-500 text-red-200 rounded">
          {error}
        </div>
      )}
      
      <div className="text-sm text-gray-400">
        <p>Check browser console for detailed logs</p>
        <p>Current user: {auth.currentUser?.email || 'None'}</p>
      </div>
    </div>
  );
};

export default AuthTest;