import { useState } from 'react'
import { User } from '../utils'
import { useHistory } from 'react-router-dom'

const FormContext = () => {

  const history = useHistory()

  const [errors, setErrors] = useState({})

  const [register, setRegister] = useState({
    name: '',
    email: '',
    username: '',
    password: '',
    password2: '',
    dob: '',
    phone: '',
    month: '',
    day: '',
    year: '',
  })

  const [login, setLogin] = useState({
    email: '',
    username: '',
    password: ''
  })

  const [edit, setEdit] = useState({})
  // DatePicker and MuiPhoneNumber doesn't work with target.name setup of handleinput
  const [phone, setPhone] = useState();
  const [disabled, setDisabled] = useState(true);
  const [success, setSuccess] = useState(false)

  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ]
  const days = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 30, 31]
  const currentYear = new Date().getFullYear()
  let startYear = 1900
  let years = []
  while (startYear <= currentYear) {
    years.push(startYear++)
  }

  const toggleSuccessSnack = (key) => {
    setSuccess(!success)
  }

  const handleCloseSnack = (key) => {
    if (errors[key]) {
      setErrors({ ...errors, [key]: '' })
    }
    console.log(key)
  }

  // Form Interaction Set to Disable
  const toggleDisable = () => {
    setDisabled(!disabled)
  }

  // Register Functinality Start
  const handleRegisterInput = ({ target }) => {
    if (target.name === 'phone') {
      let phone = target.value.replace(/\D/g, '')
      const match = phone.match(/^(\d{1,3})(\d{0,3})(\d{0,4})$/)
      if (match) {
        phone = `(${match[1]})${match[2] ? ' ' : ''}${match[2]}${match[3] ? '-' : ''}${match[3]}`;
      }
      setRegister({ ...register, [target.name]: phone })
    } else {
      setRegister({ ...register, [target.name]: target.value })
    }
  }

  const handleRegisterSubmit = async (event) => {
    event.preventDefault()
    const user = {
      name: register.name,
      email: register.email,
      // username: register.username,
      dateOfBirth: `${register.year}-${register.month}-${register.day}`,
      phone: parseInt(register.phone.replace(/\D/g, '')),
      password: register.password,
      password2: register.password2
    }

    console.log(user)
    let response = await User.register(user)
    console.log(response)
    if (response.status === 400) {
      setErrors(response.data)
      console.log(response.data)
    } else if (response.status === 200) {
      setErrors({})
      toggleSuccessSnack()
      setRegister({
        name: '',
        email: '',
        username: '',
        password: '',
        password2: '',
        dob: '',
        phone: '',
        month: '',
        day: '',
        year: '',
      })
      setPhone('')
      console.log(response)
      // add time before being sent to login
      history.push('/login')
    }
  }
  // Register Functinality End

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
    let response = await User.login(user)
    console.log(response)
    if (response.status === 400) {
      setErrors(response.data)
    } else if (response.status === 200) {
      setErrors({})
      toggleSuccessSnack()
      setLogin({
        email: '',
        password: ''
      })
      console.log(response.token)
      localStorage.setItem('user', response.token)
      // add time before being sent to login

      history.push('/')
    }
  }
  // Login Functinality End

  // Load User Information for a Loaded Profile Form
  const loadUser = async () => {
    const data = await User.getData()
    let user = {}
    user.name = data.name ? data.name : ''
    user.username = data.username ? data.name : ''
    user.gender = data.gender ? data.gender : ''
    user.email = data.email ? data.email : ''
    user.address = data.address ? {
      line1: data.address.line1 ? data.address.line1 : '',
      line2: data.address.line2 ? data.address.line2 : '',
      city: data.address.city ? data.address.city : '',
      zipCode: data.address.zipCode ? data.address.zipCode : '',
      country: data.address.country ? data.address.country : ''
    } : { line1: '', line2: '', city: '', zipCode: '', country: '' }
    user.profilePhoto = data.profilePhoto ? data.profilePhoto : ''
    console.log(user)
    setEdit(user)
    setPhone(data.phone.toString())
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
      profilePhoto: edit.profilePhoto,
      address: edit.address,
      dateOfBirth: edit.dob,
      phone: parseInt(phone.replace(/\D/g, ''))
    }

    let response = await User.edit(user)
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
    // dob, setDOB, phone, setPhone,
    errors, setErrors,
    loadUser, edit, setEdit, handleEditProfile, handleSubmitEdit,
    toggleDisable, disabled, handleCloseSnack, toggleSuccessSnack, success,
    years, days, months
  }

}

export default FormContext
