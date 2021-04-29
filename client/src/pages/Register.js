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


const Register = () => {
  const classes = styles()

  const {
    register, setRegister,
    dob, setDOB,
    phone, setPhone,
    handleRegisterInput,
    handleRegisterSubmit,
    errors
  } = FormContext()


  return (
    <main>
      <Container maxWidth='sm'>
        <Card className={classes.loginCard}>
          <form onSubmit={handleRegisterSubmit}>
            <Grid container direction="column" >
              <Typography variant="h4">
                Register
              </Typography>
              <TextField
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
                    className={classes.halfInput}
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
                  className={classes.halfInput}
                  required
                  disableAreaCodes
                  variant="outlined"
                  margin="normal"
                  defaultCountry={"us"}
                  label="Phone Number"
                  name="phone"
                  value={phone}
                  onChange={setPhone}
                />
              </Box>
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
                value={register.email}
                onChange={handleRegisterInput}
              />
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
                name="username"
                value={register.username}
                onChange={handleRegisterInput}
              /> */}
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
                value={register.password}
                onChange={handleRegisterInput}
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
                label="Repeat Password"
                name="password2"
                value={register.password2}
                onChange={handleRegisterInput}
              />
            </Grid>
            <Button type='submit' onClick={handleRegisterSubmit}>Submit</Button>
            <Link to='/login'>Already Registered? Login Here</Link>
          </form>
        </Card>
      </Container>
    </main>

  )
}

export default Register
