<template>
    <div>
        <div>{{ counter }}</div>
        <button @click="onClick">increment</button>
    </div>
  </template>
  <script lang="ts">
  // DO NOT USE <script setup>
  
  //vue options API.
  /*
  import { defineComponent } from "vue";
  export default defineComponent({});
  */
  
  //class component
  import { Component, Vue, toNative, Vanilla } from "vue-facing-decorator";
  @Component
  class Counter extends Vue {
    counter = 1

    onClick() {
        this.counter++
    }


    get counterGetter() {
        return this.counter
    }

    set counterSetter(value: number) {
        this.counter = value
    }
  }
  export default toNative(Counter)
  </script>
  <style>
  </style>