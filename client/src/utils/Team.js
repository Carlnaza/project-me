
const Team = {
  create: (body) => fetch('/api/team', {
    method: 'POST',
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem('user')}`
    },
    body: JSON.stringify(body)
  })
    .then(response => response.json()),
}

export default Team
