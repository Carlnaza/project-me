import { makeStyles } from '@material-ui/core/styles'

const styles = makeStyles((theme) => ({
  container: {
    backgroundColor: theme.palette.background.paper,
  },
  loginCard: {
    justifyContent: 'center',
    padding: '20px'
  },
  centeredFlex: {
    display: 'flex',
    justifyContent: 'space-between'
  },
  halfInput: {
    width: '48%'
  }
}))

export default styles