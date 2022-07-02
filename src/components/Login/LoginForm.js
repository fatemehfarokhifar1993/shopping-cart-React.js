import { Link } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import Input from "../../common/input";
const LoginForm = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      console.log(values);
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
      <Link to="/signup">
        <p>Not singup yet?</p>
      </Link>
    </form>
  );
};

export default LoginForm;
