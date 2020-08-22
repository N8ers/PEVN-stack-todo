<template>
  <div>
    <form @submit.prevent="attemptLogin">
      <h3>Sign In</h3>
      <label>email</label>
      <input v-model="user.email" type="email" />
      <label>password</label>
      <input v-model="user.password" type="password" />
      <button type="submit">Sign In</button>
    </form>
    <form @submit.prevent="attemptSignup">
      <h3>Sign Up</h3>
      <label>email</label>
      <input v-model="newUser.email" type="email" />
      <label>name</label>
      <input v-model="newUser.name" type="text" />
      <label>password</label>
      <input v-model="newUser.password" type="password" />
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
      },
      newUser: {
        email: null,
        name: null,
        password: null
      }
    };
  },
  methods: {
    attemptLogin: function() {
      this.$store.dispatch("auth/loginUser", this.user);
    },
    attemptSignup: function() {
      this.$store.dispatch("auth/signupUser", this.newUser);
      this.newUser.email = null;
      this.newUser.name = null;
      this.newUser.password = null;
    }
  }
};
</script>
