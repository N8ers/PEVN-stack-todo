<template>
  <div>
    <div>Home</div>
    <button @click="getTasks">getTasks</button>
    <br>
    {{ tasks }}
  </div>
</template>

<script>
export default {
  name: "Home",
  props: {},
  methods: {
    getTasks: function () {
      this.$store.dispatch('tasks/getTasks')
    }
  },
  computed: {
    tasks: function () {
      return this.$store.state.tasks
    }
  }
};
</script>
