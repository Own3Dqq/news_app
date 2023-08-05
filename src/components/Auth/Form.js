import { useState } from "react";

const Form = ({ title, handleClick }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div>
      <input
        type="email"
        value={email}
        onChange={() => setEmail(e.target.value)}
        placeholder="email"
      />
      <input
        type="password"
        value={password}
        onChange={() => setPassword(e.target.value)}
        placeholder="password"
      />
      <button onClick={handleClick}>{title}</button>
    </div>
  );
};

export default Form;
