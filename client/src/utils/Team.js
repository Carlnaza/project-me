import axios from 'axios'

const Team = {
  create: (body) => axios.post('/api/team', body, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('user')}`
    }
  })
}

export default Team
