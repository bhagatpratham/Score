import "./App.css";
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import Matches from "./components/Matches";
import Standings from "./components/Standings";
import Teams from "./components/Teams";

function App() {
  return (
    <div>
      <h1>Score</h1>
      <BrowserRouter>
        <nav>
          <ul>
            <li>
              <Link to='/matches'>Matches</Link>
            </li>
            <li>
              <Link to='/standings'>Standings</Link>
            </li>
            <li>
              <Link to='/teams'>Teams</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path='/matches'>
            <Matches />
          </Route>
          <Route path='/standings'>
            <Standings />
          </Route>
          <Route path='/teams'>
            <Teams />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
