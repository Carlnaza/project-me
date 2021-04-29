import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Container, Card, Grid, Typography, TextField, Box, Button, FormControl, InputLabel, Select } from '@material-ui/core'

import {
  KeyboardDatePicker,
  MuiPickersUtilsProvider,
} from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns'; // choose your lib

import MuiPhoneNumber from 'material-ui-phone-number'
import { FormContext } from '../utils'
import styles from '../styles/styles.js'

const Account = (page) => {
  const classes = styles()

  const {
    loadUser,
    dob, setDOB,
    phone, setPhone,
    edit, setEdit,
    handleEditProfile,
    handleSubmitEdit,
    toggleDisable,
    disabled,
    errors
  } = FormContext()

  useEffect(() => {
    loadUser()
  }, [])


  return (
    <>
      <Card className={classes.loginCard}>
        {/* <form onSubmit={ }> */}
        <form>
          <Grid container direction="column" >
            <Typography variant="h4">
              Account Overview
            </Typography>
            <Box className={classes.centeredFlex}>
              <TextField
                disabled={disabled}
                label="Full Name"
                className={classes.input}
                required
                fullwidth
                variant="outlined"
                margin="normal"
                InputLabelProps={{
                  shrink: true,
                }}
                name="name"
                value={edit.name}
                onChange={handleEditProfile}
              />
              <FormControl variant="outlined" className={classes.input} disabled={disabled}>
                <InputLabel htmlFor="outlined-age-native-simple">Age</InputLabel>
                <Select
                  native
                  value={edit.gender}
                  onChange={handleEditProfile}
                  label="Gender"
                  inputProps={{
                    name: 'gender',
                  }}
                >
                  {/* <option aria-label="None" value="" /> */}
                  <option value={'Male'}>Male</option>
                  <option value={'Female'}>Female</option>
                  <option value={'Other'}>Other</option>
                </Select>
              </FormControl>
            </Box>
            <Box className={classes.centeredFlex}>
              <MuiPickersUtilsProvider utils={DateFnsUtils} >
                <KeyboardDatePicker
                  disabled={disabled}
                  label="Date of Birth"
                  className={classes.input}
                  required
                  variant="outlined"
                  margin="normal"
                  inputVariant="outlined"
                  value={dob}
                  onChange={data => setDOB(data.valueOf())}
                  format="yyyy/MM/dd"
                />
              </MuiPickersUtilsProvider>
              <MuiPhoneNumber
                disabled={disabled}
                label="Phone Number"
                className={classes.input}
                required
                disableAreaCodes
                variant="outlined"
                margin="normal"
                defaultCountry={"us"}
                name="phone"
                value={phone}
                onChange={setPhone}
              />
            </Box>
            <Box className={classes.centeredFlex}>
              <TextField
                disabled={disabled}
                label="Street"
                className={classes.input}
                required
                fullwidth
                variant="outlined"
                margin="normal"
                InputLabelProps={{
                  shrink: true,
                }}
                name="line1"
                value={edit.address && (edit.address.line1 ? edit.address.line1 : '')}
                onChange={handleEditProfile}
              />
              <TextField
                disabled={disabled}
                label="Apt / Suite / Other"
                className={classes.input}
                required
                fullwidth
                variant="outlined"
                margin="normal"
                InputLabelProps={{
                  shrink: true,
                }}
                name="line2"
                value={edit.address && (edit.address.line2 ? edit.address.line2 : '')}
                onChange={handleEditProfile}
              />
            </Box>
            <Box className={classes.centeredFlex}>
              <TextField
                disabled={disabled}
                label="City"
                className={classes.input}
                required
                fullwidth
                variant="outlined"
                margin="normal"
                InputLabelProps={{
                  shrink: true,
                }}
                name="city"
                value={edit.address && (edit.address.city ? edit.address.city : '')}
                onChange={handleEditProfile}
              />

              <TextField
                disabled={disabled}
                label="Zip Code"
                className={classes.input}
                required
                fullwidth
                variant="outlined"
                margin="normal"
                InputLabelProps={{
                  shrink: true,
                }}
                name="zipCode"
                value={edit.address && (edit.address.zipCode ? edit.address.zipCode : '')}
                onChange={handleEditProfile}
              />

              <TextField
                disabled={disabled}
                label="Country"
                className={classes.input}
                required
                fullwidth
                variant="outlined"
                margin="normal"
                InputLabelProps={{
                  shrink: true,
                }}
                name="country"
                value={edit.address && (edit.address.country ? edit.address.country : '')}
                onChange={handleEditProfile}
              />
            </Box>


            <TextField
              className={classes.input}
              required
              fullwidth
              variant="outlined"
              margin="normal"
              InputLabelProps={{
                shrink: true,
              }}
              type="email"
              disabled={disabled}
              label="Email Address"
              placeholder="john123@email.com"
              name="email"
              value={edit.email}
              onChange={handleEditProfile}
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
              type="username"
              disabled={disabled}
              label="Username"
              placeholder="john123"
              name="username"
              value={edit.username}
              onChange={handleEditProfile}
            />



          </Grid>

          <Button
            onClick={handleSubmitEdit}
            className={disabled && classes.hide}>
            Save
          </Button>
        </form>
        <Button
          onClick={toggleDisable}
          className={!disabled && classes.hide}>
          Edit Profile
          </Button>
      </Card>
    </>
  )
}

export default Account
