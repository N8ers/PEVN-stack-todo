<template>
  <div>
    <h3>Tasks!</h3>
    <div v-for="task in taskList" :key="task.id">
      <input type="checkbox" :value="task.completed" />
      <span>{{ task }}</span>
    </div>

    <form>
      <input type="text" />
      <button>add task</button>
    </form>
  </div>
</template>

// Nathan - we may want to make a task item component to handle toggling/editing

<script>
export default {
  name: "TaskList",
  props: {
    taskList: Array
  }
};
</script>

<style lang="scss" scoped></style>
