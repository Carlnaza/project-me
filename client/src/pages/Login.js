import { Link } from 'react-router-dom'
import { Container, Card, Grid, Typography, TextField, Box, Button } from '@material-ui/core'

import {
  KeyboardDatePicker,
  MuiPickersUtilsProvider,
} from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns'; // choose your lib

import MuiPhoneNumber from 'material-ui-phone-number'
import { FormContext } from '../utils'
import styles from '../styles/styles.js'

const Login = () => {
  const classes = styles()

  const {
    login, setLogin,
    handleLoginInput,
    handleLoginSubmit,
    errors
  } = FormContext()


  return (
    <main>
      <Container maxWidth='sm'>
        <Card className={classes.loginCard}>
          <form onSubmit={handleLoginSubmit}>
            <Grid container direction="column" >
              <Typography variant="h4">
                Login
              </Typography>

              {/* <TextField
                required
                fullwidth
                variant="outlined"
                margin="normal"
                InputLabelProps={{
                  shrink: true,
                }}
                label="Username"
                placeholder="john123"
                type="username"
                name="username"
                value={login.username}
                onChange={handleLoginInput}
              /> */}
              <TextField
                required
                fullwidth
                variant="outlined"
                margin="normal"
                InputLabelProps={{
                  shrink: true,
                }}
                type="Email"
                label="Email Address"
                placeholder="john123@email.com"
                name="email"
                value={login.email}
                onChange={handleLoginInput}
              />
              <TextField
                required
                fullwidth
                variant="outlined"
                margin="normal"
                InputLabelProps={{
                  shrink: true,
                }}
                placeholder="password"
                type="password"
                label="Password"
                name="password"
                value={login.password}
                onChange={handleLoginInput}
              />
            </Grid>
          </form>
          <Button onClick={handleLoginSubmit}>Submit</Button>
          <Link to='/register'>Don't Have an Account? Register Here</Link>
        </Card>
      </Container>
    </main>

  )
}

export default Login
