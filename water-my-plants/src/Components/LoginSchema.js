import * as yup from "yup";

export default yup.object().shape({
  name: yup
    .string()
    .required("Username is required")
    .min(6, "Username must be contain at least 6 characters")
    .max(10, "username must not exceed 10 characters"),
  password: yup
    .string()
    .required("Password is required")
    .min(6, "Password must be at least 6 characters long")
    .max(10, "Password must not exceed 10 characters"),
});
