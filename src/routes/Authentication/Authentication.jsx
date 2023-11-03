/* import {
  auth,
  signInWithGooglePopup,
   signInWithGoogleRedirect,
  createUserDocument,
} from "../../utils/firebase/firebase";

import { useEffect } from "react";
import { getRedirectResult } from "firebase/auth"; */
import SignUpForm from "../../components/SignUp/SignUp";
import SignInForm from "../../components/SignIn/SignIn";
import "./Authentication.scss";

const Authentication = () => {
  /* useEffect(() => {
    const getRedirectData = async () => {
      const res = await getRedirectResult(auth);
      if (res) {
        await createUserDocument(res.user);
      }
    };
    getRedirectData();
  }, []); */
  return (
    <div className="auth-container">
      {/* <button onClick={signInWithGoogleRedirect}>
        Sign in With Google Redirect
      </button> */}
      <SignInForm />
      <SignUpForm />
    </div>
  );
};

export default Authentication;
