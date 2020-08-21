<template>
  <div>
    <div>Home</div>
    <button @click="getTasks">getTasks</button>
    <br />
    <TaskList v-if="tasks" :taskList="tasks" />
  </div>
</template>

<script>
import TaskList from "./TaskList";

export default {
  name: "Home",
  components: {
    TaskList
  },
  methods: {
    getTasks: function() {
      this.$store.dispatch("tasks/getTasks");
    }
  },
  computed: {
    tasks: function() {
      return this.$store.state.tasks.tasks;
    }
  }
};
</script>
