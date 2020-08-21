<template>
  <div>
    <form @submit.prevent="attemptLogin">
      <h3>Sign In</h3>
      <input v-model="user.email" type="email" />
      <input v-model="user.password" type="password" />
      <button type="submit">Sign In</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "Auth",
  props: {},
  data() {
    return {
      user: {
        email: null,
        password: null
      }
    };
  },
  methods: {
    attemptLogin: function() {
      this.$store.dispatch("auth/loginUser", this.user);
    }
  }
};
</script>
