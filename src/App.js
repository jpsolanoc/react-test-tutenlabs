import Login from "./component/Login";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Inicio from "./component/Inicio";
import Datos from "./component/Datos";

function App() {

  return (
    <Router>
      <div className="Container">
        <center>
          <div className="btn-group">
            <Link to="/" className="btn btn-dark">Inicio</Link>
            <Link to="/login" className="btn btn-dark">Login</Link>            
          </div>
        </center>
        <hr></hr>
        <Switch>
          <Route path="/datos" exact component={Datos}></Route>
          <Route path="/login" exact component={Login}></Route>
          <Route path="/" exact component={Inicio}></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
