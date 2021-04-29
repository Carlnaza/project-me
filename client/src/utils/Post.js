import axios from 'axios'

const Post = {
  create: (body) => axios.post('/api/project', body, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('user')}`
    }
  })
}

export default Post
