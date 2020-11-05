import './App.css';
import ChooseColor from './components/ChooseColor';
import Translate from './components/Translate';
import SearchBox from './components/SearchBox';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { useRef } from 'react';


function App() {
  const ref = useRef();
  return (

<Router>
      <div>
        <ul className="routes">
          <li>
            <Link to="/"><button className="ui button linkedin">Wikipedia</button></Link>
          </li>
          <li>
            <Link to="/choosecolor"><button className="ui button linkedin">Choose Color</button></Link>
          </li>
          <li>
            <Link to="/translate"><button className="ui button linkedin">Google translate</button></Link>
          </li>
        </ul>

        <hr />

        <Switch>
          <Route exact path="/">
          <div className="App ui container">
            <SearchBox />
            </div>
          </Route>
          <Route path="/choosecolor">
          <div className="App ui container">
            <ChooseColor />
            </div>
          </Route>
          <Route path="/translate">
          <div className="App ui container">

            <Translate />
            </div>
          </Route>
        </Switch>
      </div>
    </Router>
    //    <RouterLink/>
    //  </div>
  );
}



export default App;
