import { NavLink } from "react-router-dom";
import css from "./Navigation.module.css";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import AuthNav from "../AuthNav/AuthNav";
import UserMenu from "../UserMenu/UserMenu";

const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <div className={css["container"]}>
      <NavLink to="/" className={css["header-nav-btn"]}>
        Home
      </NavLink>
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </div>
  );
};

export default Navigation;
