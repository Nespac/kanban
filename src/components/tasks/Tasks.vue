<template>
  <div class="task-view-container">
    <NewTask
      class="dialog-window"
      v-if="showNewTaskWindow"
      @cancelNewTaskWindow="showNewTaskWindow = false"
      @addNewTask="addToNotStarted"
    ></NewTask>
    <AreYouSureWindow
      class="dialog-window"
      v-if="showAreYouSureWindow"
      @cancelAreYouSureWindow="showAreYouSureWindow = false"
      @approveAreYouSureWindow="clearBoard()"
    ></AreYouSureWindow>
    <div class="toolbox">
      <button class="toolbox-option" @click="showNewTaskWindow = true">
        + New task
      </button>
      <button class="toolbox-option" @click="showAreYouSureWindow = true">
        Clear board
      </button>
    </div>
    <div class="kanban-container">
      <div class="board-col-first">
        <h1>Not started</h1>
        <draggable
          style="height: 100%"
          v-model="notStartedArray"
          group="tasks"
          @start="drag = true"
          @end="drag = false"
          item-key="id"
        >
          <template #item="{ element }">
            <div class="task-card">
              <div class="task-card-header">
                <h3 style="font-weight: bold">{{ element.title }}</h3>
                <svg
                  @click="removeItemFromArray(element, notStartedArray)"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 30 30"
                  width="20px"
                  height="20px"
                >
                  <path
                    d="M 14.984375 2.4863281 A 1.0001 1.0001 0 0 0 14 3.5 L 14 4 L 8.5 4 A 1.0001 1.0001 0 0 0 7.4863281 5 L 6 5 A 1.0001 1.0001 0 1 0 6 7 L 24 7 A 1.0001 1.0001 0 1 0 24 5 L 22.513672 5 A 1.0001 1.0001 0 0 0 21.5 4 L 16 4 L 16 3.5 A 1.0001 1.0001 0 0 0 14.984375 2.4863281 z M 6 9 L 7.7929688 24.234375 C 7.9109687 25.241375 8.7633438 26 9.7773438 26 L 20.222656 26 C 21.236656 26 22.088031 25.241375 22.207031 24.234375 L 24 9 L 6 9 z"
                  />
                </svg>
              </div>
              <p>{{ element.description }}</p>
              <p>{{ element.hours }}h {{ element.minutes }}m</p>
            </div>
          </template>
        </draggable>
      </div>
      <div class="board-col-second">
        <h1>In progress</h1>
        <draggable
          style="height: 100%"
          v-model="inProgressArray"
          group="tasks"
          @start="drag = true"
          @end="drag = false"
          item-key="id"
        >
          <template #item="{ element }">
            <div class="task-card">
              <div class="task-card-header">
                <h3 style="font-weight: bold">{{ element.title }}</h3>
                <svg
                  @click="removeItemFromArray(element, inProgressArray)"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 30 30"
                  width="20px"
                  height="20px"
                >
                  <path
                    d="M 14.984375 2.4863281 A 1.0001 1.0001 0 0 0 14 3.5 L 14 4 L 8.5 4 A 1.0001 1.0001 0 0 0 7.4863281 5 L 6 5 A 1.0001 1.0001 0 1 0 6 7 L 24 7 A 1.0001 1.0001 0 1 0 24 5 L 22.513672 5 A 1.0001 1.0001 0 0 0 21.5 4 L 16 4 L 16 3.5 A 1.0001 1.0001 0 0 0 14.984375 2.4863281 z M 6 9 L 7.7929688 24.234375 C 7.9109687 25.241375 8.7633438 26 9.7773438 26 L 20.222656 26 C 21.236656 26 22.088031 25.241375 22.207031 24.234375 L 24 9 L 6 9 z"
                  />
                </svg>
              </div>
              <p>{{ element.description }}</p>
              <p>{{ element.hours }}h {{ element.minutes }}m</p>
            </div>
          </template>
        </draggable>
      </div>
      <div class="board-col-third">
        <h1>Done</h1>
        <draggable
          style="height: 100%"
          v-model="doneArray"
          group="tasks"
          @start="drag = true"
          @end="drag = false"
          item-key="id"
        >
          <template #item="{ element }">
            <div class="task-card">
              <div class="task-card-header">
                <h3 style="font-weight: bold">{{ element.title }}</h3>
                <svg
                  @click="removeItemFromArray(element, doneArray)"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 30 30"
                  width="20px"
                  height="20px"
                >
                  <path
                    d="M 14.984375 2.4863281 A 1.0001 1.0001 0 0 0 14 3.5 L 14 4 L 8.5 4 A 1.0001 1.0001 0 0 0 7.4863281 5 L 6 5 A 1.0001 1.0001 0 1 0 6 7 L 24 7 A 1.0001 1.0001 0 1 0 24 5 L 22.513672 5 A 1.0001 1.0001 0 0 0 21.5 4 L 16 4 L 16 3.5 A 1.0001 1.0001 0 0 0 14.984375 2.4863281 z M 6 9 L 7.7929688 24.234375 C 7.9109687 25.241375 8.7633438 26 9.7773438 26 L 20.222656 26 C 21.236656 26 22.088031 25.241375 22.207031 24.234375 L 24 9 L 6 9 z"
                  />
                </svg>
              </div>
              <p>{{ element.description }}</p>
              <p>{{ element.hours }}h {{ element.minutes }}m</p>
              <svg
                style="align-self: flex-end"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 48 48"
                width="20px"
                height="20px"
              >
                <path
                  fill="#388e3c"
                  d="M43,38.833C43,41.135,41.135,43,38.833,43H17.167C14.866,43,13,41.135,13,38.833V17.167 C13,14.865,14.866,13,17.167,13h21.667C41.135,13,43,14.865,43,17.167V38.833z"
                />
                <path
                  fill="#c8e6c9"
                  d="M35,30.833C35,33.135,33.135,35,30.833,35H9.167C6.866,35,5,33.135,5,30.833V9.167 C5,6.865,6.866,5,9.167,5h21.667C33.135,5,35,6.865,35,9.167V30.833z"
                />
                <path
                  fill="#4caf50"
                  d="M18 28.121L11.064 21.186 13.186 19.064 18 23.879 28.814 13.064 30.936 15.186z"
                />
              </svg>
            </div>
          </template>
        </draggable>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue, toNative, Watch } from "vue-facing-decorator";
import draggable from "vuedraggable";
import { type Task } from "./Task";
import NewTask from "./NewTask.vue";
import AreYouSureWindow from "../utility/AreYouSureWindow.vue";
@Component({
  components: {
    draggable,
    NewTask,
    AreYouSureWindow,
  },
})
class Tasks extends Vue {
  showNewTaskWindow: boolean = false;
  showAreYouSureWindow: boolean = false;
  drag = false;
  notStartedArray: Task[] = [
    {
      title: "A random task",
      description: "Long description.",
      hours: 2,
      minutes: 0,
    },
  ];
  inProgressArray: Task[] = [
    {
      title: "Buy milk",
      description: "And don't come back.",
      hours: 69,
      minutes: 0,
    },
  ];
  doneArray: Task[] = [
    {
      title: "Anything",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. ",
      hours: 20,
      minutes: 30,
    },
  ];

  clearBoard() {
    this.notStartedArray = [];
    this.inProgressArray = [];
    this.doneArray = [];
    this.showAreYouSureWindow = false;
  }

  addToNotStarted(task: Task) {
    this.notStartedArray.push(task);
    this.showNewTaskWindow = false;
    this.saveTasksToLocalStorage()
  }

  removeItemFromArray(item: Task, array: Task[]) {
    let index = array.indexOf(item);
    array.splice(index, 1);
    this.saveTasksToLocalStorage()
  }

  mounted() {
    this.loadTasksFromLocalStorage();
  }

  @Watch("notStartedArray")
  notStartedArrayWatcher() {
    this.saveTasksToLocalStorage();
  }

  @Watch("inProgressArray")
  inProgressArrayWatcher() {
    this.saveTasksToLocalStorage();
  }

  @Watch("doneArray")
  doneArrayWatcher() {
    this.saveTasksToLocalStorage();
  }

  saveTasksToLocalStorage() {
    localStorage.notStartedArray = JSON.stringify(this.notStartedArray);
    localStorage.inProgressArray = JSON.stringify(this.inProgressArray);
    localStorage.doneArray = JSON.stringify(this.doneArray);
  }

  loadTasksFromLocalStorage() {
    if (localStorage.notStartedArray) {
      this.notStartedArray = JSON.parse(localStorage.notStartedArray);
    }
    if (localStorage.inProgressArray) {
      this.inProgressArray = JSON.parse(localStorage.inProgressArray);
    }
    if (localStorage.doneArray) {
      this.doneArray = JSON.parse(localStorage.doneArray);
    }
  }
}
export default toNative(Tasks);
</script>
<style scoped>
h3 {
  font-weight: bold;
}

.task-card-header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border-bottom: solid 1px;
  border-color: rgb(154, 154, 154);
}

.dialog-window {
  position: fixed;
  margin-top: 10%;
  z-index: 10;
}

.task-view-container {
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

@media screen and (max-width: 700px) {
  .task-view-container {
    width: 100%;
  }
}
.kanban-container {
  margin-top: 5%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  min-height: 30%;
  height: fit-content;
  animation: appear;
  animation-duration: 0.5s;
  transition-duration: 0.5s;
}

.board-col-first,
.board-col-second,
.board-col-third {
  width: 30%;
  border-radius: 10px;
  min-height: 50%;
  margin-left: 10px;
  margin-right: 10px;
  padding: 10px;
}

.board-col-first {
  background: rgb(69, 69, 69);
  background: linear-gradient(
    0deg,
    rgba(69, 69, 69, 1) 0%,
    rgba(158, 81, 81, 1) 100%
  );
}

.board-col-second {
  background: rgb(69, 69, 69);
  background: linear-gradient(
    0deg,
    rgba(69, 69, 69, 1) 0%,
    rgba(163, 161, 104, 1) 100%
  );
}

.board-col-third {
  background: rgb(69, 69, 69);
  background: linear-gradient(
    0deg,
    rgba(69, 69, 69, 1) 0%,
    rgba(111, 150, 98, 1) 100%
  );
}

@keyframes appear {
  from {
    color: white;
    position: relative;
    left: 30px;
  }

  to {
    position: relative;
    left: 0px;
  }
}

.task-card {
  display: flex;
  flex-direction: column;
  color: rgb(28, 28, 28);
  background: rgba(229, 229, 229, 0.2);
  border: solid;
  border-color: rgb(176, 176, 176);
  border-width: 1px;
  border-radius: 5px;
  margin-bottom: 10px;
  width: 100%;
  -webkit-box-shadow: 2px 6px 15px 5px rgba(0, 0, 0, 0.24);
  box-shadow: 2px 6px 15px 5px rgba(0, 0, 0, 0.14);
  padding: 5px;
  user-select: none;
  cursor: pointer;
  backdrop-filter: blur(7px);
}

.toolbox {
  display: flex;
  flex-direction: row;
  color: rgb(67, 67, 67);
  background: rgb(153, 153, 153, 0.5);
  align-self: flex-start;
  position: fixed;
  border-bottom-right-radius: 10px;
  backdrop-filter: blur(7px);
  -webkit-box-shadow: 10px 10px 29px -2px rgba(0, 0, 0, 0.1);
  -moz-box-shadow: 10px 10px 29px -2px rgba(0, 0, 0, 0.1);
  box-shadow: 10px 10px 29px -2px rgba(0, 0, 0, 0.1);
}

.toolbox-option {
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

.toolbox-option:hover {
  color: rgb(67, 67, 67);
  background: rgb(178, 178, 178);
  border-color: rgb(168, 167, 167);
  cursor: pointer;
}
</style>
