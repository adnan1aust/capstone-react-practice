import { useState } from "react";
import {
  createAuthUserWithEmailAndPassword,
  createUserDocument,
} from "../../utils/firebase/firebase";

const SignUpForm = () => {
  const [formData, setFormData] = useState({
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (password === confirmPassword) {
      try {
        const response = await createAuthUserWithEmailAndPassword(
          email,
          password
        );
        await createUserDocument(response.user, { displayName });
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
    <div>
      <h1>SIgn in using your email and password</h1>
      <form onSubmit={handleSubmit}>
        <label>Display Name</label>
        <input
          type="text"
          required
          value={displayName}
          onChange={onchangeHandler}
          name="displayName"
        />
        <label>Email</label>
        <input
          type="email"
          required
          value={email}
          onChange={onchangeHandler}
          name="email"
        />
        <label>Password</label>
        <input
          type="password"
          required
          value={password}
          onChange={onchangeHandler}
          name="password"
        />
        <label>Confirm Password</label>
        <input
          type="password"
          required
          value={confirmPassword}
          onChange={onchangeHandler}
          name="confirmPassword"
        />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default SignUpForm;