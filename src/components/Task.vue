<template>
  <div>
    <td class="td icon moveable">
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

    <td v-if="canEdit" class="td">
      <input class="input" type="text" v-model="task.name" />
    </td>
    <td v-else class="td">
      {{ task.name }} || {{ task.sort_order }} || 'recalculated sort order'
    </td>

    <td class="td">
      <button v-if="canEdit" @click="editTask(task)" class="button">
        save
      </button>
      <button v-else @click="toggleEdit" class="button">edit</button>
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
    return {
      canEdit: false
    };
  },
  methods: {
    toggleCheckbox: function() {
      this.$emit("emitToggleCheckbox", this.task);
    },
    editTask: function() {
      this.$emit("emitEditTask", this.task);
      this.toggleEdit();
    },
    removeTask: function() {
      this.$emit("emitRemoveTask", this.task);
    },
    toggleEdit: function() {
      this.canEdit = !this.canEdit;
    }
  },
  computed: {}
};
</script>
