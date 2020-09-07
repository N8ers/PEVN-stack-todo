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

      <div v-if="showSignIn" class="column is-half mt-4">
        <div
          v-if="$store.state.auth.loginFailed"
          class="notification is-danger"
        >
          <button class="delete" @click="removeSigninFailedBanner"></button>
          Login failed...
        </div>
        <form @submit.prevent="attemptLogin">
          <input
            v-model="user.email"
            type="email"
            class="input"
            placeholder="Email"
          />
          <input
            v-model="user.password"
            type="password"
            class="input mt-2"
            placeholder="Password"
          />
          <div class="mt-2 is-pulled-right">
            <button class="button is-primary" type="submit">Sign In</button>
            <button class="button" type="button" @click="toggleAuth">
              Want to register?
            </button>
          </div>
        </form>
      </div>

      <div v-else class="column is-half mt-4">
        <div
          v-if="$store.state.auth.loginCreationSussess"
          class="notification is-info"
        >
          account created - try logging in!
        </div>
        <div
          v-if="$store.state.auth.loginCreationSussess === false"
          class="notification is-danger"
        >
          <button class="delete" @click="removeSignupFailedBanner"></button>
          there was a problem creating your account...
        </div>
        <div
          v-if="$store.state.auth.emailAlreadyInUse === true"
          class="notification is-info"
        >
          <button class="delete" @click="removeEmailInUseBanner"></button>
          email already in use, try logging in...
        </div>
        <form @submit.prevent="attemptSignup">
          <input
            v-model="newUser.email"
            type="email"
            class="input"
            placeholder="Email"
          />
          <input
            v-model="newUser.name"
            type="text"
            class="input mt-2"
            placeholder="Name"
          />
          <input
            v-model="newUser.password"
            type="password"
            class="input mt-2"
            placeholder="Password"
          />
          <div class="mt-2 is-pulled-right">
            <button class="button is-primary" type="submit">Sign up!</button>
            <button class="button" type="button" @click="toggleAuth">
              Already have a login?
            </button>
          </div>
        </form>
      </div>
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
      if (this.user.email && this.user.password) {
        this.$store.dispatch("auth/loginUser", this.user);
      } else {
        this.$store.commit("auth/LOGIN_FAILED", true);
      }
    },
    attemptSignup: function() {
      if (this.newUser.email && this.newUser.name && this.newUser.password) {
        this.$store.dispatch("auth/signupUser", this.newUser);
      } else {
        this.$store.commit("auth/CREATE_USER_STATUS", false);
      }
    },
    toggleAuth: function() {
      this.showSignIn = !this.showSignIn;
    },
    removeSigninFailedBanner: function() {
      this.$store.commit("auth/LOGIN_FAILED", false);
    },
    removeSignupFailedBanner: function() {
      this.$store.commit("auth/CREATE_USER_STATUS", null);
    },
    removeEmailInUseBanner: function() {
      this.$store.commit("auth/EMAIL_ALREADY_IN_USE", false);
    }
  }
};
</script>
