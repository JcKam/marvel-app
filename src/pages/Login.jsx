import axios from "axios";
import { useState } from "react";

// COMPONENTS
import Input from "../components/input";
import Button from "../components/button";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [btnDisabled, setBtnDisabled] = useState(false);

  return (
    <main className="container debug2">
      <h2>Se connecter</h2>

      <Input
        id="idUserName"
        label="Name"
        name="name"
        type="text"
        placeholder="Fernand Naudin"
        setState={setEmail}
        value={email}
        required={true}
      />
      <Input
        id="idPassword"
        label="Password"
        name="name"
        type="password"
        // placeholder="Fernand Naudin"
        setState={setPassword}
        value={password}
        required={true}
      />
      <Button
        label="Se connecter"
        disabled={setBtnDisabled}
        size="button-lg"
        style="button-primary"
        type="submit"
        // setState={useState}
      />
    </main>
  );
};
export default Signup;
