import css from "./AppBar.module.css";
import Navigation from "../Navigation/Navigation";

const AppBar = () => {
  return (
    <header className={css["header-nav"]}>
      <Navigation />
    </header>
  );
};

export default AppBar;
