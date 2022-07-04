import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import Input from "../../common/input";
import { useEffect, useState } from "react";
import { loginUser } from "../../services/loginService";
import { useAuth, useAuthActions } from "../../Providers/AuthProvider";
import { useQuery } from "../../hooks/useQuery";
const LoginForm = () => {
  const setAuth = useAuthActions();
  const navigate = useNavigate();
  const query=useQuery();
  const redirect=query.get("redirect") || "/";
  const [error, setError] = useState(null);
  const auth=useAuth()
  useEffect(()=>{
    if(auth)  navigate(`/${redirect}`);
      },[redirect,auth])
      
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: async (values) => {
      try {
        const response = await loginUser(values);
       // console.log(response.data);
        setAuth(response.data);
        setError(null);
        console.log(redirect)
        navigate(`/${redirect}`);
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
      {error && <p style={{ color: "red" }}>error is :{error}</p>}
      <Link to={`/signup?redirect=${redirect}`}>
        <p>Not singup yet?</p>
      </Link>
    </form>
  );
};

export default LoginForm;
