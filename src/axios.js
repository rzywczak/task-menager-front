import axios from 'axios'

const url = 'https://rzywczak-task-menager.herokuapp.com/api'

axios.defaults.baseURL = url
axios.defaults.headers.common['Authorization'] = 'Bearer '+ localStorage.getItem('token')