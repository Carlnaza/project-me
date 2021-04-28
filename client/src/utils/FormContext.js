import { useState } from 'react'
import { User } from '../utils'

const FormContext = () => {

  const [errors, setErrors] = useState({})

  const [register, setRegister] = useState({
    name: '',
    email: '',
    username: '',
    password: '',
    password2: ''
  })

  const [login, setLogin] = useState({
    email: '',
    username: '',
    password: ''
  })

  // DatePicker and MuiPhoneNumber doesn't work with target.name setup of handleinput
  const [dob, setDOB] = useState(new Date());
  const [phone, setPhone] = useState();

  const handleRegisterInput = ({ target }) => {
    setRegister({ ...register, [target.name]: target.value })
    console.log(register)
  }

  const handleLoginInput = ({ target }) => {
    setLogin({ ...login, [target.name]: target.value })
  }

  const handleRegisterSubmit = async (event) => {
    event.preventDefault()
    const user = {
      name: register.name,
      email: register.email,
      username: register.username,
      dateOfBirth: dob.valueOf(),
      phone: parseInt(phone.replace(/\D/g, '')),
      password: register.password,
      password2: register.password2
    }

    console.log(user)
    let { data: response } = await User.register(user)
    console.log(response)
    if (response.status === 400) {
      setErrors(response.data)
    } else if (response.status == 200) {
      setErrors({})
      setRegister({
        name: '',
        email: '',
        username: '',
        password: '',
        password2: ''
      })
      setDOB(new Date())
      setPhone('')
      console.log(response)
      // set logic so that snack alert is triggered with response.message if it contains success and register
      // add time before being sent to login
      window.location = '/login'
    }
  }

  const handleLoginSubmit = async (event) => {
    event.preventDefault()
    let user = {
      email: login.email,
      password: login.password
    }
    console.log(user)
    let { data: response } = await User.login(user)

    if (response.status === 400) {
      setErrors(response.data)
    } else if (response.status == 200) {
      setErrors({})
      setLogin({
        email: '',
        password: ''
      })
      console.log(response.token)
      localStorage.setItem('user', response.token)
      // set logic so that snack alert is triggered with response.message if it contains success and login
      // add time before being sent to home
      window.location = '/'
    }

  }

  return {
    register, setRegister, handleRegisterInput, handleRegisterSubmit,
    login, setLogin, handleLoginInput, handleLoginSubmit,
    dob, setDOB, phone, setPhone,
    errors, setErrors
  }

}

export default FormContext
