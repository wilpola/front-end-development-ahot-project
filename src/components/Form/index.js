// Signin form component

//Imports
import { useState } from "react";

// import styles
import "./form.scss";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [PWD, setPWD] = useState("");

  // function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.length > 0 && PWD.length >= 8) {
      console.log(email);
      console.log(PWD);
      setEmail("");
      setPWD("");
    }
  };

  // rendered content
  return (
    <div id={"signin"}>
      <form className="signin form" onSubmit={handleSubmit}>
        <h2>Sign in</h2>
        <label>Email</label>
        <input
          type={"email"}
          placeholder={"Enter email..."}
          autoComplete={"off"}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label>Password (min: 8 characters)</label>
        <input
          type={"password"}
          placeholder={"Enter password..."}
          value={PWD}
          onChange={(e) => setPWD(e.target.value)}
          minLength="8"
        />
        <button type="submit" className="sign-in__btn">
          Sign in
        </button>
      </form>
    </div>
  );
};

export default SignIn;
