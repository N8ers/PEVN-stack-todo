<template>
  <div>
    <table class="table">
      <div class="tbody">
        <tr class="tr" v-for="task in taskList" :key="task.id">
          <td class="td">
            <input
              type="checkbox"
              class="checkbox"
              v-model="task.completed"
              @change="toggleCheckbox(task)"
            />
          </td>
          <td class="td">{{ task.name }} || {{ task.sort_order }}</td>
          <td class="td">
            <button @click="removeTask(task)" class="button">X</button>
          </td>
        </tr>
      </div>
    </table>

    <form @submit.prevent="addTask">
      <input
        v-model="newTask.name"
        type="text"
        class="input input-width"
        placeholder="Feed the turtles..."
      />
      <button type="submit" class="button">add task</button>
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
