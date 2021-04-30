import { Route, Switch, Redirect } from 'react-router-dom'
import { Home, Login, Register, Profile } from './pages'
import { LockedPage } from './utils'

function App() {
  return (
    <div>
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
    </div>


  );
}

export default App;
