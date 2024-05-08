import Contact from "../Contact/Contact.jsx";
import css from "./ContactList.module.css";
import { useSelector, useDispatch } from "react-redux";
import { selectIsLoading } from "../../redux/contacts/selectors.js";
import { ThreeCircles } from "react-loader-spinner";
import { selectFilteredContacts } from "../../redux/contacts/selectors.js";
import { useEffect } from "react";
import { fetchContacts } from "../../redux/contacts/operations.js";

export const loader = (
  <ThreeCircles
    visible={true}
    height="100"
    width="100"
    color="#032287"
    ariaLabel="three-circles-loading"
    wrapperStyle={{}}
    wrapperClass="wrapper"
  />
);
const ContactList = () => {
  const isLoading = useSelector(selectIsLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const filteredContacts = useSelector(selectFilteredContacts);

  return filteredContacts ? (
    <ul className={css["contacts-list"]}>
      {filteredContacts.map((contact) => (
        <li key={contact.id}>
          <Contact data={contact} />
        </li>
      ))}
      {isLoading && loader}
    </ul>
  ) : (
    <>
      <p>Loading...</p>
    </>
  );
};

export default ContactList;
