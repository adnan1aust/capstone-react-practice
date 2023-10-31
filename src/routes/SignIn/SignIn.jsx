import {
  /* auth, */
  signInWithGooglePopup,
  /*  signInWithGoogleRedirect, */
  createUserDocument,
} from "../../utils/firebase/firebase";

/* import { useEffect } from "react";
import { getRedirectResult } from "firebase/auth"; */
import SignUpForm from "../../components/SignUp/SignUp";

const SignIn = () => {
  /* useEffect(() => {
    const getRedirectData = async () => {
      const res = await getRedirectResult(auth);
      if (res) {
        await createUserDocument(res.user);
      }
    };
    getRedirectData();
  }, []); */

  const logGoogleUser = async () => {
    const response = await signInWithGooglePopup();
    await createUserDocument(response.user, {});
  };

  return (
    <>
      <h1>SignIn page</h1>
      <button onClick={logGoogleUser}>Sign in With Google</button>
      {/* <button onClick={signInWithGoogleRedirect}>
        Sign in With Google Redirect
      </button> */}
      <SignUpForm />
    </>
  );
};

export default SignIn;
