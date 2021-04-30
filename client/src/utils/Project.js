
const Project = {
  create: (body) => fetch('/api/project', {
    method: 'POST',
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem('user')}`
    },
    body: JSON.stringify(body)
  })
    .then(response => response.json()),

  edit: (projectId, body) => fetch(`/api/project/${projectId}`, {
    method: 'PUT',
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem('user')}`
    },
    body: JSON.stringify(body)
  })
    .then(response => response.json()),

  assignUser: (projectId, user) => fetch(`/api/project/assign_user/${projectId}`, {
    method: 'PUT',
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem('user')}`
    },
    body: JSON.stringify(user)
  })
    .then(response => response.json()),

  assignTeam: (projectId, team) => fetch(`/api/project/assign_team/${projectId}`, {
    method: 'PUT',
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem('user')}`
    },
    body: JSON.stringify(team)
  })
    .then(response => response.json()),

  comment: (projectId, comment) => fetch(`/api/project/assign_team/${projectId}`, {
    method: 'PUT',
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem('user')}`
    },
    body: JSON.stringify(comment)
  })
    .then(response => response.json()),

  addViewer: (projectId, viewer) => fetch(`/api/project/assign_team/${projectId}`, {
    method: 'PUT',
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem('user')}`
    },
    body: JSON.stringify(viewer)
  })
    .then(response => response.json()),
}

export default Project
