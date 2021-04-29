import axios from 'axios'



const User = {
  register: (user) => fetch('/api/users/register', {
    method: 'POST',
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(user)
  })
    .then(response => response.json()),

  login: (user) => fetch('/api/users/login', {
    method: 'POST',
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem('user')}`
    },
    body: JSON.stringify(user)
  })
    .then(response => response.json()),

  edit: (user) => fetch('/api/user/profile', {
    method: 'PUT',
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem('user')}`
    },
    body: JSON.stringify(user)
  })
    .then(response => response.json()),

  getData: () => fetch('/api/user', {
    method: 'GET',
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem('user')}`
    }
  })
    .then(response => response.json()),


  follow: (targetUser) => fetch(`/api/user/follow/${targetUser}`, {
    method: 'Put',
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem('user')}`
    },
    body: JSON.stringify(targetUser)
  })
    .then(response => response.json()),
}

export default User
