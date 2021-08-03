import React, { useState } from "react";
import "./App.css";

function DynamicHooksObjectFormat(initialState) {
  const [value, setValue] = useState(initialState);

  function onChange(e) {
    setValue(e.target.value);
  }

  function clearInput() {
    setValue("");
  }

  return { value, onChange, clearInput };
}

function App() {
  function handleOnSubmit(e) {
    e.preventDefault();
    console.log(usernameValue);
    console.log(emailValue);
    console.log(passwordValue);
    usernameClearInput();
    emailClearInput();
    passwordClearInput();
  }

  const {
    value: usernameValue,
    onChange: usernameOnChange,
    clearInput: usernameClearInput,
  } = DynamicHooksObjectFormat("");
  const {
    value: emailValue,
    onChange: emailOnChange,
    clearInput: emailClearInput,
  } = DynamicHooksObjectFormat("");
  const {
    value: passwordValue,
    onChange: passwordOnChange,
    clearInput: passwordClearInput,
  } = DynamicHooksObjectFormat("");

  return (
    <div className="App">
      <form onSubmit={handleOnSubmit}>
        <div>
          <input
            type="text"
            name="username"
            value={usernameValue}
            placeholder="username"
            onChange={usernameOnChange}
          />
        </div>

        <div>
          <input
            type="email"
            name="email"
            value={emailValue}
            placeholder="email"
            onChange={emailOnChange}
          />
        </div>
        <div>
          <input
            type="password"
            name="password"
            value={passwordValue}
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
