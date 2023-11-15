import { useState } from "react";
import {
  createUserDocument,
  signInWithGooglePopup,
  signInAuthUserWithEmailAndPassword,
} from "../../utils/firebase/firebase";
import FormInput from "../FormInput/FormInput";
import "./Signin.scss";
import Button from "../Button/Button";
import { UserContext } from "../../contexts/user";

const SignInForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const logGoogleUser = async () => {
    const response = await signInWithGooglePopup();
    await createUserDocument(response.user, {});
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await signInAuthUserWithEmailAndPassword(
        email,
        password
      );
      setUser(response.user);
    } catch (error) {
      console.log(error);
      if (error.code === "auth/wrong-password") {
        alert("incorrect password for email");
      } else if (error.code === "auth/user-not-found") {
        alert("No user associated with the email");
      }
    }
  };

  const onchangeHandler = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const { email, password } = formData;

  return (
    <div className="sign-up-container">
      <h2>Already an account?</h2>
      <span>SIgn in using your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Email"
          type="email"
          required
          value={email}
          onChange={onchangeHandler}
          name="email"
        />
        <FormInput
          label="Password"
          type="password"
          required
          value={password}
          onChange={onchangeHandler}
          name="password"
        />
        <div className="buttons-container">
          <Button type="submit">Sign In</Button>
          <Button type="button" onClick={logGoogleUser} buttonType="google">
            Google Sign In
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
