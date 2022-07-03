import { Link } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import Input from "../../common/input";
import { useState } from "react";
import { loginUser } from "../../services/loginService";
const LoginForm = () => {
  const [error,setError]=useState(null)
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: async(values) => {
     try {
      const response=await loginUser(values);
      console.log(response.data)
      setError(null)
     } catch (error) {
      if (error.response && error.response.data.message) {
        setError(error.response.data.message);
      }
     }
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Invalid email format")
        .required("Email is required"),
      password: Yup.string().required(" Password is required"),
    }),
    validateOnMount: true,
    enableReinitialize: true,
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <Input formik={formik} name="email" label="Email" type="email" />

      <Input formik={formik} name="password" label="Password" type="password" />

      <button type="submit" disabled={!formik.isValid} className="btn">
        login
      </button>
      {error && <p style={{color:"red"}}>error is :{error}</p>}
      <Link to="/signup">
        <p>Not singup yet?</p>
      </Link>
    </form>
  );
};

export default LoginForm;
