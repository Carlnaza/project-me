import { useState } from 'react'
import { User } from '../utils'
import { Redirect } from 'react-router-dom'

const FormContext = () => {

  const [errors, setErrors] = useState({})

  const [register, setRegister] = useState({
    name: '',
    email: '',
    username: '',
    password: '',
    password2: '',
    phone: ''
  })

  const [login, setLogin] = useState({
    email: '',
    username: '',
    password: ''
  })

  const [edit, setEdit] = useState({})
  // DatePicker and MuiPhoneNumber doesn't work with target.name setup of handleinput
  const [dob, setDOB] = useState(new Date());
  const [phone, setPhone] = useState();
  const [disabled, setDisabled] = useState(true);

  // Form Interaction Set to Disable
  const toggleDisable = () => {
    setDisabled(!disabled)
  }

  // Register Functinality Start
  const handleRegisterInput = ({ target }) => {
    setRegister({ ...register, [target.name]: target.value })
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
    } else if (response.status === 200) {
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
      return <Redirect from='/login' to='/' />
    }
  }
  // Register Functinality End

  // Redirect Function
  const moveUser = (from, to) => {

    return (
      <Redirect from={from} to={to} />
    )
  }

  // Login Functinality Start
  const handleLoginInput = ({ target }) => {
    setLogin({ ...login, [target.name]: target.value })
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
    } else if (response.status === 200) {
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
  // Login Functinality End

  // Load User Information for a Loaded Profile Form
  const loadUser = async () => {
    const { data } = await User.getData()
    let user = {}
    user.name = data.name ? data.name : ''
    user.username = data.username ? data.name : ''
    user.gender = data.gender ? data.name : ''
    user.email = data.email ? data.email : ''
    user.address = data.address ? {
      line1: data.address.line1 ? data.address.line1 : '',
      line2: data.address.line2 ? data.address.line2 : '',
      city: data.address.city ? data.address.city : '',
      zipCode: data.address.zipCode ? data.address.zipCode : '',
      country: data.address.country ? data.address.country : ''
    } : { line1: '', line2: '', city: '', zipCode: '', country: '' }
    user.profilePhoto = data.profilePhoto ? data.profilePhoto : ''

    setEdit(user)
    setPhone(data.phone.toString())
    setDOB(data.dateOfBirth)
  }

  // Profile Edit Functionality Start
  const handleEditProfile = ({ target }) => {
    let addressItems = ['line1', 'line2', 'city', 'zipCode', 'country']
    if (addressItems.includes(target.name)) {
      setEdit({ ...edit, address: { ...edit.address, [target.name]: target.value } })
    } else {
      setEdit({ ...edit, [target.name]: target.value })
    }
    console.log(edit)
  }

  const handleSubmitEdit = async (event) => {
    event.preventDefault()
    const user = {
      name: edit.name,
      email: edit.email,
      username: edit.username,
      gender: edit.gender,
      username: edit.username,
      profilePhoto: edit.profilePhoto,
      address: edit.address,
      dateOfBirth: dob.valueOf(),
      phone: parseInt(phone.replace(/\D/g, ''))
    }

    let { data: response } = await User.edit(user)
    console.log(response)
    if (response.status === 200) {
      toggleDisable()
      console.log(response.status)
    } else { console.log('Unable to Update User') }
  }
  // Profile Edit Functionality End



  return {
    register, setRegister, handleRegisterInput, handleRegisterSubmit,
    login, setLogin, handleLoginInput, handleLoginSubmit,
    dob, setDOB, phone, setPhone,
    errors, setErrors,
    loadUser, edit, setEdit, handleEditProfile, handleSubmitEdit,
    toggleDisable, disabled
  }

}

export default FormContext
