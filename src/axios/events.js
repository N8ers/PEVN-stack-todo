import axios from "axios"

import store from "../store/index"

const apiClient = axios.create({
  baseURL: "http://localhost:3000",
  withCredentials: false,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
  timeout: 10000
})

export async function attemptLogin ( payload ) {
  let response = await apiClient.post('/auth/login', { payload })

  if (response.data.loginSuccess === 'false') {
    alert('login failed')
  } else {
    localStorage.setItem('token', response.data.jwt)
    store.commit('auth/SET_USER', response.data.userData)
  }
}

export async function attemptAuthentication ( payload ) {
  apiClient.defaults.headers['Authorization'] = `Bearer ${payload}`;
  let response = await apiClient.post('/auth/check-jwt')

  if (response.data.loginSuccess === 'false') {
    alert('login failed')
  } else {
    store.commit('auth/SET_USER', response.data.userData)
  }
}

export async function getUserTasks (user) {
  alert('hi ', user)
}