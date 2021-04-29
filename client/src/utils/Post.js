import axios from 'axios'

const Post = {
  create: (body) => fetch('/api/project', {
    method: 'POST',
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem('user')}`
    },
    body: JSON.stringify(body)
  })
    .then(response => response.json()),
}

export default Post
