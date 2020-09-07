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

function setToken() {
  const token = localStorage.getItem("token");
  apiClient.defaults.headers["Authorization"] = `Bearer ${token}`;
}

export async function attemptLogin(payload) {
  console.log("payload ", payload);
  let response = await apiClient.post("/auth/login", { payload });

  if (response.data.loginSuccess == false) {
    store.commit("auth/LOGIN_FAILED", true);
  } else {
    localStorage.setItem("token", response.data.jwt);
    store.commit("auth/SET_USER", response.data.userData);
  }
}

export async function attemptAuthentication(payload) {
  apiClient.defaults.headers["Authorization"] = `Bearer ${payload}`;
  let response = await apiClient.post("/auth/check-jwt");

  if (response.data.loginSuccess === "false") {
    store.commit("auth/LOGIN_FAILED", true);
  } else {
    store.commit("auth/SET_USER", response.data.userData);
  }
}

export async function attemptSignup(newUser) {
  console.log("axios ", newUser);
  let response = await apiClient.post("/auth/createUser", newUser);

  console.log("response ", response);

  if (response.data.message && response.data.message === "success") {
    store.commit("auth/CREATE_USER_STATUS", true);
  } else if (
    response.data.message &&
    response.data.message === "email already in use"
  ) {
    store.commit("auth/EMAIL_ALREADY_IN_USE", true);
  } else {
    store.commit("auth/CREATE_USER_STATUS", false);
  }
}

export async function getUserTasks() {
  setToken();
  let response = await apiClient.get("/tasks/getTasks");

  store.commit("tasks/SET_TASKS", response.data.tasks);
}

export async function addNewTask(newTask) {
  setToken();
  let response = await apiClient.post("/tasks/addTask", newTask);

  if (response.data.message && response.data.message === "success") {
    getUserTasks();
  }
}

export async function deleteTask(task) {
  setToken();
  let response = await apiClient.post("/tasks/deleteTask", task);

  if (response.data.message && response.data.message === "success") {
    getUserTasks();
  }
}

export async function toggleCompletion(task) {
  setToken();
  let response = await apiClient.put("/tasks/toggleCompletion", task);

  if (response.data.message && response.data.message === "success") {
    getUserTasks();
  }
}

export async function updateTask(task) {
  setToken();
  let response = await apiClient.put("/tasks/updateTask", task);

  if (response.data.message && response.data.message === "success") {
    getUserTasks();
  }
}

export async function updateSortOrder(tasks) {
  setToken();
  let response = await apiClient.put("/tasks/updateSortOrder", tasks);

  if (response.data.message && response.data.message === "success") {
    getUserTasks();
  }
}
