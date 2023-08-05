import React, { useEffect } from "react";
import Form from "./Form";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
/* zustand set - будем данный пушить в стор */

const Login = () => {
  const handleLogin = () => {
    const auth = getAuth();

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  };

  return (
    <div>
      <Form />
    </div>
  );
};

export default Login;
