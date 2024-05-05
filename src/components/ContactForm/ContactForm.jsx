import css from "./ContactForm.module.css";
import { Field, Form, Formik, ErrorMessage } from "formik";
import { nanoid } from "nanoid";
import { useDispatch } from "react-redux";
import * as Yup from "yup";
import { addContact } from "../../redux/contactsOps";

const ContactForm = () => {
  const dispatch = useDispatch();
  const nameId = nanoid();
  const numberId = nanoid();

  const handleAddTour = (contactItem) => {
    dispatch(addContact(contactItem));
  };

  const FeedbackSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    number: Yup.string()
      .min(3, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
  });

  const handleSubmit = (values, actions) => {
    const nextContact = {
      name: values.name.trim(),
      number: values.number,
    };
    handleAddTour(nextContact);
    actions.resetForm();
  };

  return (
    <div className={css["formik-container"]}>
      <Formik
        initialValues={{
          name: "",
          number: "",
          id: "",
        }}
        onSubmit={handleSubmit}
        validationSchema={FeedbackSchema}
      >
        <Form className={css["form"]}>
          <div className={css["form-label-container"]}>
            <label htmlFor={nameId}>Name</label>
            <Field
              className={css["form-input"]}
              type="text"
              name="name"
              id={nameId}
            ></Field>
            <ErrorMessage
              className={css["error-msg"]}
              component="span"
              name="name"
            />
          </div>
          <div className={css["form-label-container"]}>
            <label htmlFor={numberId}>Number</label>
            <Field
              className={css["form-input"]}
              type="number"
              name="number"
              id={numberId}
            ></Field>
            <ErrorMessage
              className={css["error-msg"]}
              component="span"
              name="number"
            />
          </div>

          <button className={css["form-btn"]} type="submit">
            Add contact
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default ContactForm;
