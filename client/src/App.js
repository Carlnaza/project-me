import { Route, Switch, Redirect } from 'react-router-dom'
import { Home, Login, Register } from './pages'
import { LockedPage } from './utils'

function App() {
  return (
    <>
      {/* NavBar Space */}


      {/* Main App */}
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
        <Route exact path='/login' component={login} />
        <Route exact path='/register' component={register} />




      </Switch>
      {/* Footer Space */}

    </>
  );
}

export default App;
