import SignUp from './signup'
import Dashboard from './dashboard'
import Login from './login'
import { Container } from 'react-bootstrap';
import {AuthProvider} from '../contexts/AuthContext';
import {BrowserRouter as Router, Switch,Route} from 'react-router-dom'

function App() {
  return (

    // <Container className="d-flex align-items-center justify-content-center" style = {{minHeight:"100vh"}} >
    <div>
      <Router>
      <AuthProvider>
        <Switch>
          <Route exact path="/" component={Dashboard}/>
          <Route path='/signup' component={SignUp}/>
          <Route path='/login' component={Login}/>
        </Switch>
      </AuthProvider>
      </Router>
    </div>
    
  // </Container>

  )
  
}

export default App;