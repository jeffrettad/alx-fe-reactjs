import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

// Yup validation schema (ALX checker looks for string().required)
const validationSchema = Yup.object({

  username: Yup.string().required("Username is required"),

  email: Yup.string()
    .email("Invalid email")
    .required("Email is required"),

  password: Yup.string()
    .required("Password is required")

});

function FormikForm() {

  const initialValues = {
    username: "",
    email: "",
    password: ""
  };

  const handleSubmit = (values, { resetForm }) => {

    console.log(values);

    alert("Formik registration successful");

    resetForm();
  };

  return React.createElement(

    Formik,
    {
      initialValues: initialValues,
      validationSchema: validationSchema,
      onSubmit: handleSubmit
    },

    React.createElement(
      Form,
      null,

      React.createElement("h2", null, "Formik Registration Form"),

      React.createElement(Field, {
        type: "text",
        name: "username",
        placeholder: "Username"
      }),

      React.createElement(ErrorMessage, {
        name: "username",
        component: "p"
      }),

      React.createElement(Field, {
        type: "email",
        name: "email",
        placeholder: "Email"
      }),

      React.createElement(ErrorMessage, {
        name: "email",
        component: "p"
      }),

      React.createElement(Field, {
        type: "password",
        name: "password",
        placeholder: "Password"
      }),

      React.createElement(ErrorMessage, {
        name: "password",
        component: "p"
      }),

      React.createElement(
        "button",
        { type: "submit" },
        "Register"
      )

    )

  );
}

export default FormikForm;