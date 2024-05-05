import { useDispatch, useSelector } from "react-redux";
import css from "./SearchBox.module.css";
import { changeFilter } from "../../redux/filtersSlice";

const SearchBox = () => {
  const dispatch = useDispatch();

  const handleChangeSearch = (e) => {
    const newValue = e.target.value;
    dispatch(changeFilter(newValue));
  };

  return (
    <div className={css["search"]}>
      <label className={css["search-label"]} htmlFor="search">
        {" "}
        Find contacts by name or phone number
      </label>
      <input
        className={css["search-input"]}
        id="search"
        type="text"
        onChange={handleChangeSearch}
      />
    </div>
  );
};

export default SearchBox;
