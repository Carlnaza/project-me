
import { Container } from '@material-ui/core'


import styles from '../styles/styles.js'
import Auth from '../components/Auth'

const Login = () => {
  const classes = styles()

  return (
    <main>
      <Container maxWidth='sm'>
        <Auth page='Login' />
      </Container>
    </main>

  )
}

export default Login
