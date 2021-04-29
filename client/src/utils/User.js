import axios from 'axios'

const User = {
  register: (user) => axios.post('/api/users/register', user),
  login: (user) => axios.post('/api/users/login', user, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('user')}`
    }
  }),
  edit: (user) => axios.put('/api/users/profile', user, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('user')}`
    }
  }),
  getData: () => axios.get('/api/user', {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('user')}`
    }
  })
}

export default User
