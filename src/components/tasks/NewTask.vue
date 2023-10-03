<template>
  <div class="new-task-container">
    <input
      class="new-task-input"
      type="text"
      placeholder="Task title"
      style="font-size: large"
      v-model="taskToAdd.title"
    />
    <textarea
      class="new-task-input"
      placeholder="Task description"
      v-model="taskToAdd.description"
    ></textarea>
    <div class="in-row-input-container">
      <input
        class="new-task-input"
        type="number"
        placeholder="Hours"
        v-model="taskToAdd.hours"
      />
      <input
        class="new-task-input"
        type="number"
        placeholder="Minutes"
        v-model="taskToAdd.minutes"
      />
    </div>
    <div class="in-row-input-container">
      <button class="new-task-button" @click="cancelNewTaskWindow()">
        Cancel
      </button>
      <button class="new-task-button" @click="addNewTask(taskToAdd)">
        Add
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { Emit, Vue, Component, toNative } from "vue-facing-decorator";
import { type Task } from "./Task";

@Component({})
class NewTask extends Vue {
  taskToAdd: Task = {
    title: ""
  };

  @Emit
  cancelNewTaskWindow() {
    return "cancelNewTaskWindow";
  }

  @Emit
  addNewTask(value: Task): Task {
    return value;
  }
}
export default toNative(NewTask);
</script>

<style scoped>
.new-task-container {
  display: flex;
  flex-direction: column;
  color: rgb(28, 28, 28);
  background: rgba(186, 186, 186, 0.6);
  border: solid;
  border-color: rgb(131, 131, 131);
  border-width: 1px;
  border-radius: 10px;
  margin-bottom: 10px;
  width: 30%;
  min-width: 450px;
  min-height: 250px;
  -webkit-box-shadow: 2px 6px 15px 5px rgba(0, 0, 0, 0.24);
  box-shadow: 2px 6px 15px 5px rgba(0, 0, 0, 0.14);
  padding: 20px;
  backdrop-filter: blur(10px);
}

.new-task-input {
  resize: none;
}

.time-input-container {
  display: flex;
  flex-direction: row;
}

.new-task-button {
  color: rgb(67, 67, 67);
  background: rgb(205, 205, 205);
  border: solid;
  border-color: rgb(226, 226, 226);
  border-width: 1px;
  border-radius: 5px;
  margin: 10px;
  padding: 10px;
  font-weight: bold;
  -webkit-box-shadow: 10px 10px 29px -2px rgba(0, 0, 0, 0.1);
  -moz-box-shadow: 10px 10px 29px -2px rgba(0, 0, 0, 0.1);
  box-shadow: 10px 10px 29px -2px rgba(0, 0, 0, 0.1);
}

.new-task-button:hover {
  color: rgb(67, 67, 67);
  background: rgb(178, 178, 178);
  border-color: rgb(168, 167, 167);
  cursor: pointer;
}

.new-task-input {
  padding: 5px;
  background-color: rgb(201, 201, 201);
  border-radius: 5px;
  border: solid;
  border-width: 1px;
  border-color: grey;
  margin-bottom: 10px;
}

.in-row-input-container {
  display: flex;
  flex-direction: row;
  margin: auto;
}
</style>
