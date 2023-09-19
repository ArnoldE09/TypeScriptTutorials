import React, { useState } from "react";
 import "../index.css";
import { useFormik } from "formik";
import * as yup from "yup";

export default function FormikLogin() {
  
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  
  const validationSchema = yup.object({
    email: yup
      .string()
      .email("Please enter a valid email address")
      .required("Email is required"),
    password: yup
      .string()
      .min(8, "Please enter a strong password")
      .required("Password is required")
  });
  const formik = useFormik({
    initialValues: {
      email: "",
      password: ""
    },
    validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
      setIsLoggedIn(true);
    }
  });
  return (
    <div className="App">
      <form className="form" onSubmit={formik.handleSubmit}>
        <div className="field">
          <input
            id="email"
            placeholder="email"
            name="email"
            type="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
          />
        </div>
        
        <p>{formik.touched.email && formik.errors.email ? (
          <span className="error">{formik.errors.email}</span>
        ) : null} </p>
        
        <div className="field">
          <input
            id="password"
            placeholder="password"
            name="password"
            type="password"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
          />
        </div>
        {formik.touched.password && formik.errors.password ? (
          <span className="error">{formik.errors.password}</span>
        ) : null}
        <div>
          <button type="submit" className="submit-btn">
            Login
          </button>
        </div>
      </form>
      {isLoggedIn && <div className="heading">Yayyy! You are back!!!</div>}
      
    </div>
  );
}
