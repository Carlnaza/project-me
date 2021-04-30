import { Link, Redirect } from 'react-router-dom'
import { Grid, Typography, TextField, Button, Snackbar, FormControl, InputLabel, Select } from '@material-ui/core'
import Alert from '@material-ui/lab/Alert'


import { FormContext } from '../utils'
import styles from '../styles/styles.js'

const Auth = ({ page }) => {
  const classes = styles()

  const {
    register,
    handleRegisterInput,
    handleRegisterSubmit,
    login,
    handleLoginInput,
    handleLoginSubmit,
    errors,
    handleCloseSnack,
    toggleSuccessSnack, success,
    years, days, months,
  } = FormContext()

  return (
    <>
      {
        localStorage.getItem('user') && <Redirect to="/home" />
      }


      <div style={{ position: 'fixed', display: 'flex', flexDirection: 'column-reverse', left: '10px', bottom: 0, zIndex: 99 }}>

        {Object.entries(errors).sort((a, b) => b[1].length - a[1].length).map(([key, value]) =>
          <Snackbar
            key={key}
            open={errors[key]}
            style={{ marginBottom: '8px', position: 'relative', justifyContent: 'left', bottom: 0 }}
            autoHideDuration={6000}
            onClose={(() => handleCloseSnack(key))}
            ClickAwayListenerProps={{ onClickAway: () => null }}>
            <Alert
              onClose={(() => handleCloseSnack(key))}
              severity="error">
              {value}
            </Alert>
          </Snackbar>
        )}

        {<Snackbar
          open={success}
          style={{ marginBottom: '8px', position: 'relative', justifyContent: 'left', bottom: 0 }}
          autoHideDuration={2000} >
          <Alert
            onClose={toggleSuccessSnack}
            severity="success">
            {success.message}
          </Alert>
        </Snackbar>}


      </div>


      <div>

        <div className={classes.loginCard}>
          <form onSubmit={handleRegisterSubmit}>
            <Grid container className={classes.centeredFlex}>
              <Typography variant="h4">
                {page === 'Register' ? 'Create an account' : 'Login'}
              </Typography>
              {page === 'Register' && (
                <>
                  <TextField
                    className={classes.input}
                    required
                    fullWidth
                    variant="outlined"
                    margin="normal"
                    // InputLabelProps={{
                    //   shrink: true,
                    // }}
                    // placeholder="John Doe"
                    label="Full Name"
                    name="name"
                    value={register.name}
                    onChange={handleRegisterInput}
                  />

                  <TextField
                    className={classes.input}
                    required
                    fullWidth
                    inputProps={{ maxLength: 14 }}
                    variant="outlined"
                    margin="normal"
                    // InputLabelProps={{
                    //   shrink: true,
                    // }}
                    // placeholder="John Doe"
                    label="Phone Number"
                    name="phone"
                    value={register.phone}
                    onChange={handleRegisterInput}
                  />
                </>
              )}

              <TextField
                className={classes.input}
                required
                fullWidth
                variant="outlined"
                margin="normal"
                // InputLabelProps={{
                //   shrink: true,
                // }}
                type="Email"
                label="Email Address"
                // placeholder="john123@email.com"
                autoComplete="off"
                name="email"
                value={page === 'Register' ? register.email : login.email}
                onChange={page === 'Register' ? handleRegisterInput : handleLoginInput}
              />

              <TextField
                className={classes.input}
                required
                fullWidth
                variant="outlined"
                margin="normal"
                // InputLabelProps={{
                //   shrink: true,
                // }}
                // placeholder="password"
                autoComplete="new-password"
                type="password"
                label="Password"
                name="password"
                value={page === 'Register' ? register.password : login.password}
                onChange={page === 'Register' ? handleRegisterInput : handleLoginInput}
              />

              {page === 'Register' &&
                (<TextField
                  className={classes.input}
                  required
                  fullWidth
                  variant="outlined"
                  margin="normal"
                  // InputLabelProps={{
                  //   shrink: true,
                  // }}
                  // placeholder="password"
                  type="password"
                  label="Repeat Password"
                  name="password2"
                  value={register.password2}
                  onChange={handleRegisterInput}
                />)
              }

              {page === 'Register' && (
                <>
                  <hr style={{ width: '100%' }} />

                  <div style={{ width: '100%' }}>

                    <Typography variant="h6">
                      Confirm your age
                </Typography>
                    <Typography variant="body1">
                      Your date of birth will not be shown publicly
                </Typography>
                  </div>

                  <FormControl variant="outlined" className={classes.month}>
                    <InputLabel>Month</InputLabel>
                    <Select
                      native
                      value={register.month}
                      label="month"
                      onChange={handleRegisterInput}
                      inputProps={{
                        name: 'month'
                      }}>
                      <option value="" />
                      {months.map(month =>
                        <option value={month}>{month}</option>
                      )}
                    </Select>
                  </FormControl>

                  <FormControl variant="outlined" className={classes.dayYear} >
                    <InputLabel>Day</InputLabel>
                    <Select
                      native
                      value={register.day}
                      label="day"
                      onChange={handleRegisterInput}
                      inputProps={{
                        name: 'day'
                      }}>
                      <option value="" />
                      {days.map(day =>
                        <option value={day}>{day}</option>
                      )}
                    </Select>
                  </FormControl>
                  <FormControl variant="outlined" className={classes.dayYear}>
                    <InputLabel>Year</InputLabel>
                    <Select
                      native
                      value={register.year}
                      label="year"
                      onChange={handleRegisterInput}
                      inputProps={{
                        name: 'year'
                      }}>
                      <option value="" />
                      {years.map(year =>
                        <option value={year}>{year}</option>
                      )}
                    </Select>
                  </FormControl>
                </>
              )}
            </Grid>
            <Button
              className={classes.button}
              variant="contained"
              color="primary"
              type='submit'
              onClick={page === 'Register' ? handleRegisterSubmit : handleLoginSubmit}>
              Submit
              </Button>
            {page === 'Register' ?
              <Typography variant="body1">
                <Link
                  className={classes.link}
                  to='/login'>
                  Already Registered? Login Here
                </Link>
              </Typography>
              :
              <Typography variant="body1">
                <Link
                  className={classes.link}
                  to='/register'>
                  Don't Have an Account? Register Here
                </Link>
              </Typography>
            }
          </form>
        </div>
      </div>
    </>
  )
}

export default Auth
