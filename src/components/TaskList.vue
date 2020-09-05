<template>
  <div>
    <table class="table">
      <draggable v-model="taskList">
        <tr class="tr" v-for="task in taskList" :key="task.id">
          <Task
            :task="task"
            @emitToggleCheckbox="toggleCheckbox"
            @emitRemoveTask="removeTask"
            @emitEditTask="editTask"
          />
        </tr>
      </draggable>
    </table>

    <form @submit.prevent="addTask">
      <input
        v-model="newTaskName"
        type="text"
        class="input input-width"
        placeholder="Feed the turtles..."
      />
      <button type="submit" class="button is-primary">add task</button>
    </form>
  </div>
</template>

<script>
import draggable from "vuedraggable";

import Task from "./Task";

export default {
  name: "TaskList",
  props: {
    taskList: Array
  },
  components: { draggable, Task },
  data() {
    return {
      newTaskName: ""
    };
  },
  methods: {
    addTask: function() {
      let newTask = {
        name: this.newTaskName,
        sortOrder: this.taskList.length + 1
      };
      this.$store.dispatch("tasks/addTask", newTask).then(() => {
        this.newTaskName = "";
      });
    },
    editTask: function(task) {
      this.$store.dispatch("tasks/updateTask", task);
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
