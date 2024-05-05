import Contact from "../Contact/Contact.jsx";
import css from "./ContactList.module.css";
import { useSelector } from "react-redux";
import { selectIsLoading } from "../../redux/contactsSlice.js";
import { ThreeCircles } from "react-loader-spinner";
import { selectFilteredContacts } from "../../redux/contactsSlice.js";

const loader = (
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

  const filteredContacts = useSelector(selectFilteredContacts);

  return (
    <ul className={css["contacts-list"]}>
      {filteredContacts.map((contact) => (
        <li key={contact.id}>
          <Contact data={contact} />
        </li>
      ))}
      {isLoading && loader}
    </ul>
  );
};

export default ContactList;
