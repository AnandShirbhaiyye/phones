
import Switch from 'react-bootstrap/esm/Switch';
import { Route, Router} from 'react-router';
import './App.css';
import Login from './component/Login';
import Register from './component/Register';
import Forget from './component/Forget'
import { createBrowserHistory } from 'history';


function App() {
  const history = createBrowserHistory();
  return (
    <div className="App">
     
        <Router history={history}>
          <Switch>
            <Route exact path="/" component = {Login}/>
            <Route exact path="/register" component = {Register}/>
            <Route exact path="/forget" component = {Forget}/>
          </Switch>
        </Router>
  
    </div>
  );
}

export default App;
