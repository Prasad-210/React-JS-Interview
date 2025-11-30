import React from "react";
import useFormInput from "./useFormInput";

export default function FormExample() {
  const firstName = useFormInput("");
  const email = useFormInput("");

  const handleSubmit = (e) => {
    e.preventDefault();

    alert(`First Name: ${firstName.value}\nEmail: ${email.value}`);

    firstName.reset();
    email.reset();
  };

  return (
    <div style={{ margin: "40px", fontFamily: "sans-serif" }}>
      <h2>Custom Hook Form Example</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="First Name"
          {...firstName}
        />
        <br /> <br />

        <input
          type="email"
          placeholder="Email"
          {...email}
        />
        <br /> <br />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
