import { useState, useContext } from "react";
import {
  createAuthUserWithEmailAndPassword,
  createUserDocument,
} from "../../utils/firebase/firebase";
import FormInput from "../FormInput/FormInput";
import "./Signup.scss";
import Button from "../Button/Button";
import { UserContext } from "../../contexts/user";

const SignUpForm = () => {
  const [formData, setFormData] = useState({
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const { setUser } = useContext(UserContext);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (password === confirmPassword) {
      try {
        const response = await createAuthUserWithEmailAndPassword(
          email,
          password
        );
        await createUserDocument(response.user, { displayName });
        setUser(response.user);
      } catch (error) {
        console.log(error);
        if (error.code === `auth/email-already-in-use`) {
          alert("can not create user, email already in use.");
        }
      }
    } else {
      alert("Password don't match");
    }
  };

  const onchangeHandler = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const { displayName, email, password, confirmPassword } = formData;

  return (
    <div className="sign-up-container">
      <h2>Don't have an account?</h2>
      <span>Create an account using your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Display Name"
          type="text"
          required
          value={displayName}
          onChange={onchangeHandler}
          name="displayName"
        />
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
        <FormInput
          label="Confirm Password"
          type="password"
          required
          value={confirmPassword}
          onChange={onchangeHandler}
          name="confirmPassword"
        />
        <Button type="submit">Sign Up</Button>
      </form>
    </div>
  );
};

export default SignUpForm;
