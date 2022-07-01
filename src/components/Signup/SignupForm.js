import { useFormik } from "formik";
import * as Yup from "yup";
import Input from "../../common/input";
import "./SignupForm.css"
const SignupForm = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phoneNumber: "",
      password: "",
      passwordConfirm: "",
    },
    onSubmit: (values) => {
      console.log(values);
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .required(" Name is required")
        .min(6, "Name length is not valid"),
      email: Yup.string()
        .email("Invalid email format")
        .required("Email is required"),
      phoneNumber: Yup.string()
        .required("Phone number is required")
        .matches(/^[0-9]{11}$/, "Invalid phone number")
        .nullable(),
      password: Yup.string()
        .required(" Password is required")
        .matches(
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
          "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
        ),
      passwordConfirm: Yup.string()
        .required("Password confirmation is required")
        .oneOf([Yup.ref("password"), null], "Password must maych"),
    }),
    validateOnMount: true,
    enableReinitialize: true,
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <Input formik={formik} name="name" label="Name" />
      <Input formik={formik} name="email" label="Email" type="email" />
      <Input
        formik={formik}
        name="phoneNumber"
        label="Phone Number"
        type="tel"
      />
      <Input formik={formik} name="password" label="Password" type="password" />
      <Input
        formik={formik}
        name="passwordConfirm"
        label="Password Confirmation"
        type="password"
      />
      <button type="submit" disabled={!formik.isValid} className="btn">
        Submit
      </button>
    </form>
  );
};

export default SignupForm;
