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
