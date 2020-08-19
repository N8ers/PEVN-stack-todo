import { attemptLogin, attemptAuthentication } from '../../axios/events'

export const state = {
  user: {
    id: null,
    email: null,
    name: null
  }
}

export const mutations = {
  mutationTest: function () {
    alert('mutation called')
  },
  SET_USER: function ( state, userPayload ) {
    state.user = userPayload
  },
  LOG_OUT_USER: function ( state ) {
    state.user = null
    localStorage.clear()
  }
}

export const actions = {
  async loginUser ( context, user ) {
    await attemptLogin( user )
  },
  async logoutUser ({ commit }) {
    commit('LOG_OUT_USER');
  },
  async authenticateToken (context, token) {
    await attemptAuthentication(token)
  }
}

export const getters = {
  getUserData() {
    return state.user
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}