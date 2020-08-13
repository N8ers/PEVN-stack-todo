import { getUserTasks } from '../../axios/events'

export const state = {
  todos: null
}

export const mutations = {
  SET_TODOS: function ( ) {

  }
}

export const actions = {
  async getTasks (store) {
    let user = store.rootGetters['auth/getUserData']
    if (user.id && user.email) {
      getUserTasks(user)
    } else {
      alert('not signed in')
    }
    
  }
}

export default {
  namespaced: true,
  mutations,
  actions
}