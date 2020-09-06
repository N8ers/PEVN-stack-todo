<template>
  <div>
    <table class="table">
      <draggable v-model="tasks">
        <tr class="tr" v-for="task in tasks" :key="task.id">
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
        sortOrder: this.tasks.length + 1
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
  computed: {
    tasks: {
      get() {
        return this.$store.state.tasks.tasks;
      },
      set(newOrder) {
        for (let task in newOrder) {
          newOrder[task].sort_order = task;
        }
        this.$store.commit("tasks/UPDATE_TASKS", newOrder);
      }
    }
  }
};
</script>
