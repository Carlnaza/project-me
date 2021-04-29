import axios from 'axios'

const Team = {
  create: (body) => axios.post('/team', body, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('user')}`
    }
  }
}

export default Team
