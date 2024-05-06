import { useDispatch } from "react-redux";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import css from "./LoginForm.module.css";
import { login } from "../../redux/auth/operations";

const inintialValues = {
  email: "",
  password: "",
};

const formValidation = Yup.object({
  email: Yup.string("You must enter a valid email!")
    .trim()
    .min(3, "Too short!")
    .max(30, "Too long!")
    .required("Email is required!"),
  password: Yup.string("You must enter a valid password!")
    .min(3, "Too short!")
    .max(50, "Too long!")
    .required("Password is required!"),
});

const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(login(values));
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={inintialValues}
      onSubmit={handleSubmit}
      validationSchema={formValidation}
    >
      <Form className={css["form"]}>
        <label className={css["form-lable"]}>
          <span className={css["form-lable-span"]}>Email:</span>
          <Field
            type="email"
            name="email"
            className={css["form-input"]}
          ></Field>
          <ErrorMessage
            component="span"
            name="email"
            className={css["error-msg"]}
          />
        </label>
        <label className={css["form-lable"]}>
          <span className={css["form-lable-span"]}>Password:</span>
          <Field
            type="password"
            name="password"
            className={css["form-input"]}
          ></Field>
          <ErrorMessage
            component="span"
            name="password"
            className={css["error-msg"]}
          />
        </label>

        <button className={css["form-btn"]} type="submit">
          Log in
        </button>
      </Form>
    </Formik>
  );
};

export default LoginForm;
