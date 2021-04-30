import axios from 'axios'

const User = {
  register: (user) => axios.post('/api/users/register', user),
  login: (user) => fetch('/api/users/login', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${localStorage.getItem('user')}`
    },
    body: JSON.stringify(user)
  }).then(response => response.json()),
  edit: (user) => axios.put('/api/user/profile', user, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('user')}`
    }
  }),
  getData: () => axios.get('/api/user', {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('user')}`
    }
  }),
  follow: (targetUser) => axios.put(`/api/user/follow/${targetUser}`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('user')}`
    }
  })
}

export default User
