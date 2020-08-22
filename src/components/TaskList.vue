<template>
  <div>
    <h3>Tasks!</h3>
    <div v-for="task in taskList" :key="task.id">
      <input
        type="checkbox"
        v-model="task.completed"
        @change="toggleCheckbox(task)"
      />
      <span>{{ task }}</span>
      <button @click="removeTask(task)">X</button>
    </div>

    <form @submit.prevent="addTask">
      <input v-model="newTask.name" type="text" />
      <button type="submit">add task</button>
    </form>
  </div>
</template>

// Nathan - we may want to make a task item component to handle toggling/editing

<script>
export default {
  name: "TaskList",
  props: {
    taskList: Array
  },
  data() {
    return {
      newTask: {
        name: "",
        sortOrder: this.taskList.length + 1
      }
    };
  },
  methods: {
    addTask: function() {
      this.$store.dispatch("tasks/addTask", this.newTask);
    },
    removeTask: function(task) {
      this.$store.dispatch("tasks/deleteTask", task);
    },
    toggleCheckbox: function(task) {
      this.$store.dispatch("tasks/toggleCompletion", task);
    }
  }
};
</script>

<style lang="scss" scoped></style>
