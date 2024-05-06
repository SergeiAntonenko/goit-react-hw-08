import { NavLink } from "react-router-dom";
import css from "./Navigation.module.css";

const Navigation = () => {
  return (
    <div className={css["container"]}>
      <NavLink to="/" className={css["header-nav-btn"]}>
        Home
      </NavLink>
    </div>
  );
};

export default Navigation;
