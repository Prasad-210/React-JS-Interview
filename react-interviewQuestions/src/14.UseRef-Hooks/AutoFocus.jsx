import { useEffect, useRef, useState } from "react";

const AutoFocus = () => {
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Auto Focus Input Example</h1>
      <input
        ref={inputRef}
        placeholder="Focus will applicable here"
        type="text"
        style={{ padding: "10px", width: "250px" }}
      />
    </div>
  );
};

export default AutoFocus;
