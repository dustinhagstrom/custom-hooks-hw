import { useState } from "react";

function DynamicHooksArrayFormat(initialState) {
  const [value, setValue] = useState(initialState);

  function onChange(e) {
    setValue(e.target.value);
  }

  function clearInput() {
    setValue("");
  }

  function showValue() {
    console.log(value);
  }

  return [value, showValue, onChange, clearInput];
}

export default DynamicHooksArrayFormat;
