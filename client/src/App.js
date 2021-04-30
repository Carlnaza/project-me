import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import { Home, Login, Register, Profile } from './pages'
import Navbar from './components/Navbar'
import { LockedPage } from './utils'

function App() {
  return (

    <div>
      {/* <Navbar /> */}
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
          <Route exact path='/profile'>
            <LockedPage>
              <Profile />
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
