import axios from 'axios'

const Project = {
  create: (body) => axios.post('/api/project', body, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('user')}`
    }
  }),

  edit: (projectId, body) => axios.put(`/api/project/${projectId}`, body, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('user')}`
    }
  }),

  assignUser: (projectId, user) => axios.put(`/api/project/assign_user/${projectId}`, user, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('user')}`
    }
  }),

  assignTeam: (projectId, team) => axios.put(`/api/project/assign_team/${projectId}`, team, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('user')}`
    }
  }),

  comment: (projectId, comment) => axios.put(`/api/project/assign_team/${projectId}`, comment, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('user')}`
    }
  }),

  addViewer: (projectId, viewer) => axios.put(`/api/project/assign_team/${projectId}`, viewer, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('user')}`
    }
  })
}

export default Project
