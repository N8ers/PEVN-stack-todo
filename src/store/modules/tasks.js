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
    store.tasks = tasks;
  }
};

export const actions = {
  async getTasks() {
    getUserTasks();
  },

  async addTask(store, newTask) {
    let result = await addNewTask(newTask);
    return result;
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
