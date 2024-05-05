import css from "./Contact.module.css";
import { RiContactsFill } from "react-icons/ri";
import { FaPhoneVolume } from "react-icons/fa";
import { IconContext } from "react-icons";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsOps";

const Contact = ({ data: { name, number, id } }) => {
  const dispatch = useDispatch();
  const handleDeleteContact = (id) => {
    dispatch(deleteContact(id));
  };

  return (
    <div className={css["contacts-item"]}>
      <div>
        <IconContext.Provider value={{ className: css["contact-item-icon"] }}>
          <p className={css["contact-item-text"]}>
            <RiContactsFill />
            {name}
          </p>
        </IconContext.Provider>
        <IconContext.Provider value={{ className: css["contact-item-icon"] }}>
          <p className={css["contact-item-text"]}>
            <FaPhoneVolume />
            {number}
          </p>
        </IconContext.Provider>
      </div>
      <button
        className={css["contacts-item-btn"]}
        onClick={() => handleDeleteContact(id)}
      >
        Delete
      </button>
    </div>
  );
};

export default Contact;
