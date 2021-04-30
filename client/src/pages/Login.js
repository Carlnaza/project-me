
import { Container } from '@material-ui/core'


import Auth from '../components/Auth'

const Login = () => {

  return (
    <main style={{ display: 'flex', height: '100vh', justifyContent: 'center' }}>
      <Auth page='Login' />
    </main>

  )
}

export default Login
