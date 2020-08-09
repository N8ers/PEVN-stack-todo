import { attemptLogin } from '../../axios/events'

export const state = {}

export const mutations = {
  mutationTest: function () {
    alert('mutation called')
  },
  SET_USER: function ( state, userPayload ) {
    console.log('SET_USER commit: ', userPayload)
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