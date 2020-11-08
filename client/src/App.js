import Saved from "./pages/Saved";
import Search from "./pages/Search";
import Navbar from  "./components/Navbar"
import './App.css';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Saved} />
          <Route exact path="/search" component={Search} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
