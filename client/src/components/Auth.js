import { Link } from 'react-router-dom'
import { Card, Grid, Typography, TextField, Box, Button } from '@material-ui/core'

import {
  KeyboardDatePicker,
  MuiPickersUtilsProvider,
} from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns'; // choose your lib

import MuiPhoneNumber from 'material-ui-phone-number'
import { FormContext } from '../utils'
import styles from '../styles/styles.js'


const Auth = ({ page }) => {
  const classes = styles()

  const {
    register, setRegister,
    dob, setDOB,
    phone, setPhone,
    handleRegisterInput,
    handleRegisterSubmit,
    login, setLogin,
    handleLoginInput,
    handleLoginSubmit,
    errors
  } = FormContext()

  return (
    <>
      <Card className={classes.loginCard}>
        <form onSubmit={handleRegisterSubmit}>
          <Grid container direction="column" >
            <Typography variant="h4">
              {page}
            </Typography>
            {page == 'Register' && (
              <>
                <TextField
                  className={classes.input}
                  required
                  fullwidth
                  variant="outlined"
                  margin="normal"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  placeholder="John Doe"
                  label="Full Name"
                  name="name"
                  value={register.name}
                  onChange={handleRegisterInput}
                />
                <Box className={classes.centeredFlex}>
                  <MuiPickersUtilsProvider utils={DateFnsUtils} >
                    <KeyboardDatePicker
                      className={classes.input}
                      required
                      variant="outlined"
                      margin="normal"
                      inputVariant="outlined"
                      label="Date of Birth"
                      placeholder="2018/10/10"
                      value={dob}
                      onChange={data => setDOB(data.valueOf())}
                      format="yyyy/MM/dd"
                    />
                  </MuiPickersUtilsProvider>
                  <MuiPhoneNumber
                    className={classes.input}
                    required
                    disableAreaCodes
                    variant="outlined"
                    margin="normal"
                    defaultCountry={"us"}
                    label="Phone Number"
                    value={phone}
                    onChange={setPhone}
                  />
                </Box>
              </>
            )}

            <TextField
              className={classes.input}
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
              value={page == 'Register' ? register.email : login.email}
              onChange={page == 'Register' ? handleRegisterInput : handleLoginInput}
            />
            <TextField
              className={classes.input}
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
              value={page == 'Register' ? register.password : login.password}
              onChange={page == 'Register' ? handleRegisterInput : handleLoginInput}
            />

            {page == 'Register' &&
              (<TextField
                className={classes.input}
                required
                fullwidth
                variant="outlined"
                margin="normal"
                InputLabelProps={{
                  shrink: true,
                }}
                placeholder="password"
                type="password"
                label="Repeat Password"
                name="password2"
                value={register.password2}
                onChange={handleRegisterInput}
              />)
            }
          </Grid>
          <Button type='submit' onClick={page == 'Register' ? handleRegisterSubmit : handleLoginSubmit}>Submit</Button>
          {page == 'Register' ?
            <Link to='/login'>Already Registered? Login Here</Link>
            :
            <Link to='/register'>Don't Have an Account? Register Here</Link>
          }
        </form>
      </Card>
    </>
  )
}

export default Auth
