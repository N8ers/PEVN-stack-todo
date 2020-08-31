<template>
  <div>
    <table class="table">
      <draggable v-model="taskList" class="tbody">
        <tr class="tr" v-for="task in taskList" :key="task.id">
          <td class="icon moveable">
            <i class="fas fa-grip-vertical"></i>
          </td>
          <td class="td">
            <input
              type="checkbox"
              class="checkbox"
              v-model="task.completed"
              @change="toggleCheckbox(task)"
            />
          </td>
          <td class="td">
            {{ task.name }} || {{ task.sort_order }} || 'recalculated sort
            order'
          </td>
          <td class="td">
            <button @click="removeTask(task)" class="button">X</button>
          </td>
        </tr>
      </draggable>
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
import draggable from "vuedraggable";

export default {
  name: "TaskList",
  props: {
    taskList: Array
  },
  components: { draggable },
  data() {
    return {
      newTask: {
        name: ""
      }
    };
  },
  methods: {
    addTask: function() {
      let newTask = {
        name: this.newTask.name,
        sortOrder: this.taskList.length + 1
      };
      this.$store.dispatch("tasks/addTask", newTask).then(() => {
        this.newTask.name = "";
      });
    },
    removeTask: function(task) {
      this.$store.dispatch("tasks/deleteTask", task);
    },
    toggleCheckbox: function(task) {
      this.$store.dispatch("tasks/toggleCompletion", task);
    }
  },
  computed: {}
};
</script>
