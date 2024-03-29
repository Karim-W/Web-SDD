import SignUp from './signup'
import Dashboard from './dashboard'
import Login from './login'
import LocList from './locList'
import Analytics from './analytics'
import Location from './location'
import About from './about'
import Fetch from './fetch'
import {AuthProvider} from '../contexts/AuthContext';
import {BrowserRouter as Router, Switch,Route} from 'react-router-dom'
import V_View from "./vview";
import Settings from './userSettings'

function App() {
  return (
    // <Container className="d-flex align-items-center justify-content-center" style = {{minHeight:"100vh"}} >
    <div>
      <Router>
        <AuthProvider>
          <Switch>
            {/* <Route exact path="/" component={Dashboard}/> */}
            <Route exact path="/" component={Login} />
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/abt" component={About} />
            <Route path="/signup" component={SignUp} />
            <Route path="/login" component={Login} />
            <Route path="/manageloc" component={Location} />
            <Route exact path="/loc" component={LocList} />
            <Route path="/analytics" component={Analytics} />
            <Route exact path="/loc/violation" component={V_View} />
            <Route path = "/settings" component={Settings}/>
          </Switch>
        </AuthProvider>
      </Router>
    </div>

    // </Container>
  );
  
}

export default App;
