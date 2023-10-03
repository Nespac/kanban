<template>
  <div class="wrapper">
    <div id="mySidenav" class="sidenav">
      <router-link class="routerlink" to="/home">Home</router-link>
      <router-link class="routerlink" to="/tasks">Tasks</router-link>
      <router-link class="routerlink" to="/materials">Materials</router-link>
      <router-link class="routerlink" to="/sandbox">Sandbox</router-link>
    </div>
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import { Component, toNative, Vue } from "vue-facing-decorator";
import Counter from "./components/Counter.vue";
import List from "./components/List.vue";
import Todo from "./components/Todo.vue";
import Tasks from "./components/tasks/Tasks.vue";

@Component({
  components: {
    Counter,
    List,
    Todo,
    Tasks,
  },
})
class App extends Vue {}
export default toNative(App);
</script>

<style scoped>
/* The side navigation menu */
.sidenav {
  width: 20%; /* 0 width - change this with JavaScript */
  min-width: fit-content;
  background-color: #111; /* Black*/
  padding-top: 60px; /* Place content 60px from the top */
  transition: 0.5s; /* 0.5 second transition effect to slide in the sidenav */
  font-size: 36px;
}

/* The navigation menu links */
.sidenav a {
  padding: 8px 8px 8px 32px;
  text-decoration: none;
  font-size: 25px;
  color: #818181;
  display: block;
  transition: 0.3s;
}

/* When you mouse over the navigation links, change their color */
.routerlink:hover {
  color: #f1f1f1;
}

/* On smaller screens, where height is less than 450px, change the style of the sidenav (less padding and a smaller font size) */
@media screen and (max-height: 450px) {
  .sidenav {
    padding-top: 15px;
  }
  .sidenav a {
    font-size: 18px;
  }
}

.wrapper {
  height: 100vh;
  display: flex;
  flex-wrap: wrap;
}

@media screen and (max-width: 700px) {
  .wrapper {
    flex-flow: column;
  }

  .sidenav {
    padding-top: 20px;
    padding-bottom: 20px;
    width: 100%;
  }
}
</style>
