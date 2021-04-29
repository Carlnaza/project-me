
import { Container } from '@material-ui/core'


import styles from '../styles/styles.js'
import Auth from '../components/Auth'


const Register = () => {
  const classes = styles()


  return (
    <main>
      <Container maxWidth='sm'>
        <Auth page='Register' />
      </Container>
    </main>

  )
}

export default Register
