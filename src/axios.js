import axios from 'axios'

// const url = 'https://rzywczak-task-menager.herokuapp.com/api'

axios.defaults.baseURL = VUE_APP_API_URL
axios.defaults.headers.common['Authorization'] = 'Bearer '+ localStorage.getItem('token')