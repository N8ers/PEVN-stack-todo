import {
  getUserTasks,
  addNewTask,
  deleteTask,
  toggleCompletion
} from "../../axios/events";

export const state = {
  tasks: null
};

export const mutations = {
  SET_TASKS: function(store, tasks) {
    console.log(tasks);
    store.tasks = tasks;
    console.log("store ", store.tasks);
  }
};

export const actions = {
  async getTasks(store) {
    let user = store.rootGetters["auth/getUserData"];
    if (user.id && user.email) {
      getUserTasks();
    } else {
      alert("not signed in");
    }
  },

  async addTask(store, newTask) {
    console.log("newTask", newTask);
    await addNewTask(newTask);
  },

  async deleteTask(store, task) {
    await deleteTask(task);
  },

  async toggleCompletion(store, task) {
    await toggleCompletion(task);
  }
};

export default {
  namespaced: true,
  state,
  mutations,
  actions
};
