import React, { useEffect } from 'react'

// Components
import Account from '../components/Account'
import AccountIsLoading from '../components/AccontIsLoading'
import Navbar from '../components/Navbar'

// Library
import {
  Typography,
  Grid,
  Avatar,
  CircularProgress
} from '@material-ui/core'
import MaleAvatar from '../assets/male-avatar.svg'
import FemaleAvatar from '../assets/female-avatar.svg'
import { makeStyles } from '@material-ui/core/styles'

// Utils
import { FormContext } from '../utils'


const useStyles = makeStyles(() => ({
  root: {
    marginTop: "2%",
    marginBottom: "1%",
    height: "300px"
  },
  avatar: {
    height: "150px",
    width: "150px",
  },
  avatarSpinner: {
    height: "500px",
    width: "500px"
  },
  content: {
    backgroundColor: '#1c1f3b',
    height: "800px"
  }
}))


const Profile = () => {

  const classes = useStyles()

  const {
    loadUser,
    edit,
    isLoading,
    setIsLoading
  } = FormContext()

  useEffect(() => {
    setIsLoading(true)
    setTimeout(() => {
      loadUser()
    }, 1000)
  }, [])

  return (
    <>

      <Navbar />
      <Grid
        container
        alignItems="center"
        justify="center"
        direction="column"
        className={classes.root}
      >
        {isLoading ?
          <CircularProgress size={50} thickness={5} />
          :
          <>
            <Avatar
              className={classes.avatar}
              alt={edit.name}
              src={edit.profilePhoto ? edit.profilePhoto : edit.gender === "Male" ? MaleAvatar : FemaleAvatar}
            />
            <Typography
              variant="h2"
            >
              Hello! {edit.name}
            </Typography>
          </>
        }
      </Grid>
      <div className={classes.content}>
        <Grid
          container
          alignItems="center"
          justify="center"
          direction="column"
        >
          <Account />
        </Grid>
      </div>
    </>

  )
}

export default Profile
