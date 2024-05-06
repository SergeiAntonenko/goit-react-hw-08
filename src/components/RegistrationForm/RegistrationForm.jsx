import { useDispatch } from "react-redux";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import css from "./RegistrationForm.module.css";
import { register } from "../../redux/auth/operations";

const inintialValues = {
  name: "",
  email: "",
  password: "",
};

const formValidation = Yup.object({
  name: Yup.string("You must enter a valid name!")
    .trim()
    .min(3, "Too short!")
    .max(50, "Too long!")
    .required("Name is required!"),
  email: Yup.string("You must enter a valid email!")
    .trim()
    .min(3, "Too short!")
    .max(30, "Too long!")
    .required("Email is required!"),
  password: Yup.string("You must enter a valid password!")
    .min(7, "Too short!")
    .max(16, "Too long!")
    .required("Password is required!"),
});

const RegistrationForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(register(values));
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={inintialValues}
      validationSchema={formValidation}
      onSubmit={handleSubmit}
    >
      <Form className={css["form"]}>
        <label className={css["form-lable"]}>
          <span className={css["form-lable-span"]}>Name:</span>
          <Field type="text" name="name" className={css["form-input"]}></Field>
          <ErrorMessage
            component="span"
            name="name"
            className={css["error-msg"]}
          />
        </label>
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
          Sign up
        </button>
      </Form>
    </Formik>
  );
};

export default RegistrationForm;
