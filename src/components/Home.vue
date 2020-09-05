<template>
  <div class="mt-6">
    <div class="home-container">
      <div class="">
        <h4 class="is-size-2">What needs to get done!</h4>
        <br />
        <TaskList v-if="tasks" :taskList="tasks" />
      </div>
    </div>
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
  },
  created() {
    this.getTasks();
  }
};
</script>
