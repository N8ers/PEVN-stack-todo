<template>
  <div>
    <div>Home</div>
    <button @click="dispatchTest">event test</button>
  </div>
</template>

<script>
export default {
  name: "Home",
  props: {},
  methods: {
    dispatchTest: function () {
      this.$store.dispatch('auth/eventTestAction')
    }
  }
};
</script>
