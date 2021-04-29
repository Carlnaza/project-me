import { makeStyles } from '@material-ui/core/styles'

const styles = makeStyles((theme) => ({
  container: {
    backgroundColor: theme.palette.background.paper,
  },
  loginCard: {
    justifyContent: 'center',
    padding: '10px'
  },
  centeredFlex: {
    display: 'flex',
    justifyContent: 'space-between'
  },
  input: {
    margin: '10px 5px',
    flex: 1
  },
  hide: {
    display: 'none'
  }
}))

export default styles