import router from "../../router/index";

import {
  attemptLogin,
  attemptAuthentication,
  attemptSignup
} from "../../axios/events";

export const state = {
  user: {
    id: null,
    email: null,
    name: null
  },
  loginFailed: false,
  loginCreationSussess: null,
  emailAlreadyInUse: null
};

export const mutations = {
  SET_USER: function(state, userPayload) {
    state.user = userPayload;
    router.push({ path: "/" });
  },
  LOG_OUT_USER: function(state) {
    state.user = null;
    localStorage.clear();
    router.push({ path: "/auth" });
  },
  LOGIN_FAILED: function(state, bool) {
    state.loginFailed = bool;
  },
  CREATE_USER_STATUS: function(state, bool) {
    state.loginCreationSussess = bool;
  },
  EMAIL_ALREADY_IN_USE: function(state, bool) {
    state.emailAlreadyInUse = bool;
  }
};

export const actions = {
  async loginUser(context, user) {
    await attemptLogin(user);
  },
  async logoutUser({ commit }) {
    commit("LOG_OUT_USER");
  },
  async authenticateToken(context, token) {
    await attemptAuthentication(token);
  },
  async signupUser(context, newUser) {
    await attemptSignup(newUser);
  }
};

export const getters = {
  getUserData() {
    return state.user;
  }
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
};
