<template>
  <div class="home-view-container">
    <h1 style="font-weight: bold">Welcome</h1>
    <h2 style="margin-bottom: 10px">Send some love below!</h2>
    <svg class="svg-icon" viewBox="0 0 20 20" @click="incrementCounter()">
      <path
        d="M9.719,17.073l-6.562-6.51c-0.27-0.268-0.504-0.567-0.696-0.888C1.385,7.89,1.67,5.613,3.155,4.14c0.864-0.856,2.012-1.329,3.233-1.329c1.924,0,3.115,1.12,3.612,1.752c0.499-0.634,1.689-1.752,3.612-1.752c1.221,0,2.369,0.472,3.233,1.329c1.484,1.473,1.771,3.75,0.693,5.537c-0.19,0.32-0.425,0.618-0.695,0.887l-6.562,6.51C10.125,17.229,9.875,17.229,9.719,17.073 M6.388,3.61C5.379,3.61,4.431,4,3.717,4.707C2.495,5.92,2.259,7.794,3.145,9.265c0.158,0.265,0.351,0.51,0.574,0.731L10,16.228l6.281-6.232c0.224-0.221,0.416-0.466,0.573-0.729c0.887-1.472,0.651-3.346-0.571-4.56C15.57,4,14.621,3.61,13.612,3.61c-1.43,0-2.639,0.786-3.268,1.863c-0.154,0.264-0.536,0.264-0.69,0C9.029,4.397,7.82,3.61,6.388,3.61"
      ></path>
    </svg>
    <h2>Love sent: {{ counterPressed }}</h2>
  </div>
</template>
<script lang="ts">
import { Component, Vue, toNative } from "vue-facing-decorator";
@Component
class Home extends Vue {
  counterPressed = 0;

  incrementCounter() {
    this.counterPressed++;
    localStorage.counterPressed = this.counterPressed;
  }

  mounted() {
    if (localStorage.counterPressed) {
      this.counterPressed = localStorage.counterPressed;
    }
  }
}
export default toNative(Home);
</script>
<style scoped>
.home-view-container {
  display: flex;
  padding-left: 20px;
  transition-duration: 0.5s;
  animation-name: appear;
  animation-duration: 0.5s;
  flex-direction: column;
  justify-content: center;
  user-select: none;
}

.svg-icon {
  padding-top: 15px;
  padding-bottom: 15px;
  fill: white;
  width: 150px;
  transition-duration: 0.5s;
}
.svg-icon:hover {
  cursor: pointer;
  transform: rotate(20deg) scale(1.3);
}

.svg-icon:active {
  transform: rotate(40deg) scale(2.5);
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
</style>
