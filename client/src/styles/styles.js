import { makeStyles } from '@material-ui/core/styles'

const styles = makeStyles((theme) => ({
  container: {
    backgroundColor: theme.palette.background.paper,
  },
  loginCard: {
    justifyContent: 'center',
    padding: '25px',
    width: '500px'
  },
  centeredFlex: {
    display: 'flex',
    justifyContent: 'space-between',
    placeContent: 'center',
    flexWrap: 'wrap'
  },
  input: {
    width: '100%'
  },
  hide: {
    display: 'none'
  },
  button: {
    width: '100%',
    margin: '16px 0px'
  },
  link: {
    textDecoration: 'none'
  },
  dayYear: {
    flexGrow: 1,
    marginLeft: '10px',
    marginTop: '16px',
    marginBottom: '8px'
  },
  month: {
    flexGrow: 2,
    marginTop: '16px',
    marginBottom: '8px'
  },
  darkMode: {
    color: "white"
  }

}))

export default styles