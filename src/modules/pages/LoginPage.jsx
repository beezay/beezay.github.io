import Login from "core/components/Authentication/Login";
import React from "react";

const LoginPage = ({ handleSignInWithGoogle, handleSignInBtn }) => {
  return (
    <Login
      handleSignInBtn={handleSignInBtn}
      handleSignInWithGoogle={handleSignInWithGoogle}
    />
  );
};

export default LoginPage;
