import {
  getUserTasks,
  addNewTask,
  deleteTask,
  toggleCompletion,
  updateTask
} from "../../axios/events";

export const state = {
  tasks: null
};

export const mutations = {
  SET_TASKS: function(store, tasks) {
    store.tasks = tasks;
  },
  UPDATE_TASKS: function(store, tasks) {
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
  },

  async updateTask(store, task) {
    await updateTask(task);
  }
};

export default {
  namespaced: true,
  state,
  mutations,
  actions
};
