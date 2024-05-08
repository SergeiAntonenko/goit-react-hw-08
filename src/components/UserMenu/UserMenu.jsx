import { NavLink } from "react-router-dom";
import css from "./UserMenu.module.css";
import { useDispatch, useSelector } from "react-redux";
import { logOut } from "../../redux/auth/operations";
import { selectUser } from "../../redux/auth/selectors";

const UserMenu = () => {
  const dispatch = useDispatch();
  const userData = useSelector(selectUser);

  const onLogout = () => {
    dispatch(logOut());
  };

  return (
    <div className={css["container"]}>
      <div className={css["header-nav-container"]}>
        <span className={css.name}>
          Welcome, <span className={css.name}>{userData.name}</span>
        </span>
        <NavLink to="/contacts" className={css["header-nav-btn"]}>
          Contacts
        </NavLink>
        <button
          type="button"
          className={css["header-nav-btn"]}
          onClick={onLogout}
        >
          Log out
        </button>
      </div>
    </div>
  );
};

export default UserMenu;
