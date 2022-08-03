import Welcome from "./components/Welcome";
import { useSelector } from "react-redux";
import { useEffect } from "react";

function App() {
  let theme = useSelector((state) => state);

  useEffect(() => {
    document.body.style.background = theme.background;
    document.body.style.color = theme.fontColor;
  }, [theme]);
  
  return (
    <div className="App">
      <Welcome></Welcome>
    </div>
  );
}

export default App;
