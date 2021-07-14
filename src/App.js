import './App.css';
import planetData from './data';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Planet Pages
import Mercury from './pages/mercury';
import Venus from './pages/venus';
import Earth from './pages/earth';
import Mars from './pages/mars';
import Jupiter from './pages/jupiter';
import Saturn from './pages/saturn';
import Uranus from './pages/uranus';
import Neptune from './pages/neptune';


function App() {
  return (
    <div className="App">
        <Router>
          <Switch>
            <Route exact path="/">
              <Mercury props={planetData} />
            </Route>
            <Route exact path="/venus">
              <Venus props={planetData} />
            </Route>
            <Route exact path="/earth">
              <Earth props={planetData} />
            </Route>
            <Route exact path="/mars">
              <Mars props={planetData} />
            </Route>
            <Route exact path="/jupiter">
              <Jupiter props={planetData} />
            </Route>
            <Route exact path="/saturn">
              <Saturn props={planetData} />
            </Route>
            <Route exact path="/uranus">
              <Uranus props={planetData} />
            </Route>
            <Route exact path="/neptune">
              <Neptune props={planetData} />
            </Route>

          </Switch>

        </Router>
    </div>
  );
}

export default App;
