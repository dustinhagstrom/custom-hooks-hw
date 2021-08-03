import React from "react";
import "./App.css";
import DynamicHooksArrayFormat from "./hooks/inputHooks";

function App() {
  const [username, usernameValue, usernameOnChange, usernameClearInput] =
    DynamicHooksArrayFormat("");
  const [email, emailValue, emailOnChange, emailClearInput] =
    DynamicHooksArrayFormat("");
  const [password, passwordValue, passwordOnChange, passwordClearInput] =
    DynamicHooksArrayFormat("");

  function handleOnSubmit(e) {
    e.preventDefault();
    usernameValue();
    emailValue();
    passwordValue();
    usernameClearInput();
    emailClearInput();
    passwordClearInput();
  }

  return (
    <div className="App">
      <form onSubmit={handleOnSubmit}>
        <div>
          <input
            type="text"
            name="username"
            value={username.value}
            placeholder="username"
            onChange={usernameOnChange}
          />
        </div>

        <div>
          <input
            type="email"
            name="email"
            value={email.value}
            placeholder="email"
            onChange={emailOnChange}
          />
        </div>
        <div>
          <input
            type="password"
            name="password"
            value={password.value}
            placeholder="password"
            onChange={passwordOnChange}
          />
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default App;
