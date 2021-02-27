import React from "react";
import AuthForm from "../../components/Auth/AuthForm";
import { signup } from "../../service/auth.service";

function Signup() {
  const handleSignup = async (user) => {
    try {
      const user = await signup(user);
      console.log(user);
    } catch (e) {
      console.error(e);
    }
  };

  return <AuthForm btnText="signup" onSubmit={handleSignup} />;
}

export default Signup;
