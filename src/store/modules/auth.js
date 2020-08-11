import { attemptLogin } from '../../axios/events'

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
    state.user.id = userPayload.id
    state.user.email = userPayload.email
    state.user.name = userPayload.name
  },
  LOG_OUT_USER: function ( state ) {
    state.user.id = null
    state.user.email = null
    state.user.name = null
    localStorage.clear()
  }
}

export const actions = {
  async loginUser ( { commit }, user ) {
    let result = await attemptLogin( user )

    console.log('result: ', result)
    if ( result ) {
      commit('SET_USER', result)
    }
  }
}

export default {
  namespaced: true,
  mutations,
  actions
}