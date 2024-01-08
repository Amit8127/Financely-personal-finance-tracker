import React, { useState } from "react";
import "./style.css";
import Input from "../Input/Input";
import Button from "../Button/Button";

const SignupSignin = () => {
  const [name, setName] = useState("");
  const[email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  return (
    <div className="signup-wrapper">
      <h2 className="title">
        Sign Up on <span style={{ color: "var(--theme)" }}>Financely</span>
      </h2>
      <form>
        <Input
          label={"Full Name"}
          state={name}
          setState={setName}
          placeholder={"Amit Kumar"}
        />
        <Input
          label={"Email"}
          state={email}
          setState={setEmail}
          placeholder={"Amit@gmail.com"}
        />
        <Input
          label={"Password"}
          state={password}
          setState={setPassword}
          placeholder={"Example@123"}
        />
        <Input
          label={"Confirm Password"}
          state={confirmPassword}
          setState={setConfirmPassword}
          placeholder={"Example@123"}
        />
        <Button text={'SignUp Using Email and Password'}/>
        <p style={{textAlign:"center"}}>or</p>
        <Button text={'SignUp Using Google'} blue={true}/>
      </form>
    </div>
  );
};

export default SignupSignin;
