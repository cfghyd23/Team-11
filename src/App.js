import "./App.css";
import Topbar from "./components/Topbar";
import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter as Router, Route } from "react-router-dom";

const App = () => {
  return (
    <div className="app">
      <Router>
        <Topbar />
      </Router>
    </div>
  );
};

export default App;
