import axios from "axios";

import store from "../store/index";

const apiClient = axios.create({
  baseURL: "http://localhost:3000",
  withCredentials: false,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json"
  },
  timeout: 10000
});

export async function attemptLogin(payload) {
  let response = await apiClient.post("/auth/login", { payload });

  if (response.data.loginSuccess === "false") {
    alert("login failed");
  } else {
    localStorage.setItem("token", response.data.jwt);
    store.commit("auth/SET_USER", response.data.userData);
  }
}

export async function attemptAuthentication(payload) {
  apiClient.defaults.headers["Authorization"] = `Bearer ${payload}`;
  let response = await apiClient.post("/auth/check-jwt");

  if (response.data.loginSuccess === "false") {
    alert("login failed");
  } else {
    store.commit("auth/SET_USER", response.data.userData);
  }
}

export async function getUserTasks() {
  // I don't love how jwt is handled here
  const token = localStorage.getItem("token");
  apiClient.defaults.headers["Authorization"] = `Bearer ${token}`;
  let response = await apiClient.get("/tasks/getTasks");

  store.commit("tasks/SET_TASKS", response.data.tasks);
}

export async function addNewTask(newTask) {
  const token = localStorage.getItem("token");
  apiClient.defaults.headers["Authorization"] = `Bearer ${token}`;
  let response = await apiClient.post("/tasks/addTask", newTask);

  if (response.data.message && response.data.message === "success") {
    getUserTasks();
  }
}

export async function deleteTask(task) {
  const token = localStorage.getItem("token");
  apiClient.defaults.headers["Authorization"] = `Bearer ${token}`;
  let response = await apiClient.post("/tasks/deleteTask", task);

  if (response.data.message && response.data.message === "success") {
    getUserTasks();
  }
}
