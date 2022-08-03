import Button from "./Button";
import { useSelector } from "react-redux/es/exports";

const Welcome = () => {
  let theme = useSelector((state) => state);
  
  return (
    <section
      className="welcome-section"
      style={{ background: theme.thirdColor }}
    >
      <h1>Welcome to the redux theme changer app</h1>
      <p>
        you can toggle between light and dark theme with clicking the button
      </p>
      <Button />
    </section>
  );
};

export default Welcome;
