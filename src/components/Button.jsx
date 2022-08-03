import { useSelector, useDispatch } from "react-redux";

import ThemeSlice from "../store/ThemeSlice";
const Button = () => {
  let theme = useSelector((state) => state);
  let dispatch = useDispatch();
  let changeThemeHandler = () => {
    dispatch(ThemeSlice.actions.toggleTheme());
  };
  return (
    <button
      className="btn"
      style={{ background: theme.background, color: theme.fontColor }}
      onClick={changeThemeHandler}>
      Change Theme
    </button>
  );
};

export default Button;
