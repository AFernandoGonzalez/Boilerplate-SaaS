import React, { useContext } from 'react';
// import { auth } from '../services/firebase';
import { AuthContext } from '../context/AuthContext';

export const Login = () => {
  const { user } = useContext(AuthContext);

  // const loginWithGoogle = async () => {
  //   const provider = new firebase.auth.GoogleAuthProvider();
  //   await auth.signInWithPopup(provider);
  // };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-3xl font-bold mb-4">Login</h2>
      {user ? (
        <p className="text-green-600">Welcome, {user.displayName}</p>
      ) : (
        <button
          // onClick={loginWithGoogle}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Login with Google
        </button>
      )}
    </div>
  );
};

