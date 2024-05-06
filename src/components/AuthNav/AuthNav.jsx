import { NavLink } from "react-router-dom";
import css from "./AuthNav.module.css";

const AuthNav = () => {
  return (
    <div className={css["container"]}>
      <div className={css["header-nav-container"]}>
        <NavLink to="/register" className={css["header-nav-btn"]}>
          Register
        </NavLink>
        <NavLink to="/login" className={css["header-nav-btn"]}>
          Log In
        </NavLink>
      </div>
    </div>
  );
};

export default AuthNav;
