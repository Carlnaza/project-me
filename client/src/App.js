import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import { Home, Login, Register } from './pages'
import { LockedPage } from './utils'

function App() {
  return (

    <div>

      <Router>
        <Switch>

          <Route exact path='/'>
            <Redirect to='/home' />
          </Route>
          <Route exact path='/home'>
            <LockedPage>
              <Home />
            </LockedPage>
          </Route>

          {/* Login/Registration */}
          <Route exact path='/login' component={Login} />
          <Route exact path='/register' component={Register} />


        </Switch>
      </Router>

    </div>


  );
}

export default App;
