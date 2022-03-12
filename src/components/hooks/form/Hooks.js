import React, { useEffect } from "react";
import { useForm } from "./useForm";
import "./form.css";

const Hooks = () => {
  const [values, handleChange] = useForm({
    email: "",
    password: "",
    firstName: "",
    secondName: "",
  });

  useEffect(() => {
    console.log("render again");
    localStorage.setItem("formData", JSON.stringify(values));
  }, []);

  return (
    <div className="form">
      <h1>master Hooks</h1>
      <label>email</label>
      <br />
      <input
        name="email"
        type="string"
        value={values.email}
        onChange={handleChange}
      />
      <br />
      <label> password</label>
      <br />
      <input
        name="password"
        type="password"
        value={values.password}
        onChange={handleChange}
      />
      <br />
      <label> first Name</label>
      <br />
      <input
        name="firstName"
        type="string"
        value={values.firstName}
        onChange={handleChange}
      />
      <br />
      <label> second Name</label>
      <br />
      <input
        name="secondName"
        type="string"
        value={values.secondName}
        onChange={handleChange}
      />
    </div>
  );
};

export default Hooks;
