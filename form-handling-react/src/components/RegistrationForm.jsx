import { useState } from "react";

function RegistrationForm() {

  const [values, setValues] = useState({
    username: "",
    email: "",
    password: ""
  });

  const [errors, setErrors] = useState({});

  const handleChange = (event) => {

    const { name, value } = event.target;

    setValues({
      ...values,
      [name]: value
    });
  };

  const validate = () => {

    const newErrors = {};

    if (!values.username) {
      newErrors.username = "Username is required";
    }

    if (!values.email) {
      newErrors.email = "Email is required";
    }

    if (!values.password) {
      newErrors.password = "Password is required";
    }

    return newErrors;
  };

  const handleSubmit = (event) => {

    event.preventDefault();

    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {

      setErrors(validationErrors);

    } else {

      console.log("Submitted:", values);

      alert("Registration successful");

      setValues({
        username: "",
        email: "",
        password: ""
      });

      setErrors({});
    }
  };

  return (

    <form onSubmit={handleSubmit}>

      <h2>Registration Form (Controlled)</h2>

      <div>

        <input
          type="text"
          name="username"
          placeholder="Username"
          value={values.username}
          onChange={handleChange}
        />

        {errors.username && (
          <p style={{ color: "red" }}>
            {errors.username}
          </p>
        )}

      </div>

      <div>

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={values.email}
          onChange={handleChange}
        />

        {errors.email && (
          <p style={{ color: "red" }}>
            {errors.email}
          </p>
        )}

      </div>

      <div>

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={values.password}
          onChange={handleChange}
        />

        {errors.password && (
          <p style={{ color: "red" }}>
            {errors.password}
          </p>
        )}

      </div>

      <button type="submit">
        Register
      </button>

    </form>
  );
}

export default RegistrationForm;