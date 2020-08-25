<template>
  <div class="container mt-6">
    <div class="columns">
      <div class="column is-half">
        <h4 class="is-size-2">Are you always forgetting what to do?</h4>
        <p class="is-size-6">
          Tote bag mustache pabst tumeric microdosing everyday carry
          chicharrones. Readymade cred irony, raw denim tumeric kinfolk whatever
          cray pabst enamel pin coloring book shoreditch cardigan four dollar
          toast.
        </p>
      </div>

      <template v-if="showSignIn" class="column is-half">
        <form @submit.prevent="attemptLogin">
          <h3>Sign In</h3>
          <input
            v-model="user.email"
            type="email"
            class="input"
            placeholder="Email"
          />
          <input
            v-model="user.password"
            type="password"
            class="input"
            placeholder="Password"
          />
          <button class="button green" type="submit">Sign In</button>
          <button class="button" type="button" @click="toggleAuth">
            Want to register?
          </button>
        </form>
      </template>

      <template v-else class="column is-half">
        <form @submit.prevent="attemptSignup">
          <h3>Sign Up</h3>
          <input
            v-model="newUser.email"
            type="email"
            class="input"
            placeholder="Email"
          />
          <input
            v-model="newUser.name"
            type="text"
            class="input"
            placeholder="Name"
          />
          <input
            v-model="newUser.password"
            type="password"
            class="input"
            placeholder="Password"
          />
          <button class="button" type="submit">Sign up!</button>
          <button class="button" type="button" @click="toggleAuth">
            Already have a login?
          </button>
        </form>
      </template>
    </div>
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
      },
      showSignIn: true
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
    },
    toggleAuth: function() {
      this.showSignIn = !this.showSignIn;
    }
  }
};
</script>
