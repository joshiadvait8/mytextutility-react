import Navbar from "./components/Navbar";
import About from "./components/About";
import TextForm from "./components/TextForm";
import { useState } from "react";
import Alert from "./components/Alert";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (text, type) => {
    setAlert({
      type: type,
      msg: text,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      console.log(mode);
      document.body.style.backgroundColor = "#1F2937";
      showAlert("Dark Mode enabled", "success");
      document.title = "Textutils - Dark Mode";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      console.log(mode);
      showAlert("Light Mode enabled", "success");
      document.title = "Textutils - Light Mode";
    }
  };
  return (
    <Router>
      <div className="App">
        <Navbar title={"TextUtils"} mode={mode} toggleMode={toggleMode} />
        <div style={{ height: "50px" }}>
          <Alert alert={alert} />
        </div>

        <div className="container my-3">
          <Switch>
            <Route exact path="/about">
              <About mode={mode} />
            </Route>
            <Route exact path="/">
              <TextForm
                heading={"Enter text to analyze"}
                mode={mode}
                showAlert={showAlert}
              />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
