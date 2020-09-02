<template>
  <div>
    <td class="icon moveable">
      <i class="fas fa-grip-vertical"></i>
    </td>
    <td class="td">
      <input
        type="checkbox"
        class="checkbox"
        v-model="task.completed"
        @change="toggleCheckbox"
      />
    </td>
    <td class="td">
      <input type="text" v-model="task.name" />
    </td>
    <td class="td">
      {{ task.name }} || {{ task.sort_order }} || 'recalculated sort order'
    </td>
    <td class="td">
      <button @click="editTask(task)" class="button">edit</button>
    </td>
    <td class="td">
      <button @click="removeTask(task)" class="button">X</button>
    </td>
  </div>
</template>

<script>
export default {
  name: "Task",
  props: {
    task: Object
  },
  components: {},
  data() {
    return {};
  },
  methods: {
    toggleCheckbox: function() {
      this.$emit("emitToggleCheckbox", this.task);
    },
    editTask: function() {
      this.$emit("emitEditTask", this.task);
    },
    removeTask: function() {
      this.$emit("emitRemoveTask", this.task);
    }
  },
  computed: {}
};
</script>
