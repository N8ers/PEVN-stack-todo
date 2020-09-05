<template>
  <div class="app container">
    <div class="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/auth">Auth</router-link>
      <button
        v-if="userIsLoggedIn"
        class="button is-primary is-pulled-right"
        @click="logoutUser"
      >
        logout
      </button>
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    logoutUser: function() {
      this.$store.dispatch("auth/logoutUser");
    }
  },
  computed: {
    userIsLoggedIn: function() {
      let user = this.$store.state.auth.user;
      if (user && user.id && user.email && user.name) {
        return true;
      }
      return false;
    }
  },
  created() {
    const token = localStorage.getItem("token");
    if (token) {
      this.$store.dispatch("auth/authenticateToken", token);
    }
  }
};
</script>

<style lang="scss">
.nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
