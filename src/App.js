import './App.css'
import Topbar from './components/Topbar';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import certificationpage from './certificationpage';
function App() {
  return (
    <div className="App">
      <Topbar />
    </div>
  );
}
const App = () => {
  return (
    <Router>
      <Route path="/certificate" component={certificationpage} />
    </Router>
  );
};

export default App;
