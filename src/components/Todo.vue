<template>
  <div>
    <ul>
      <li v-for="(item, index) in itemList" :key="index" @click="onDeleteToDoItem(index)">{{ item }}</li>
    </ul>
    <input type="text" v-model="toDoToAdd" />
    <button @click="onAddItem(toDoToAdd)">Add item</button>
  </div>
</template>

<script lang="ts">
import { Component, Vue, toNative } from "vue-facing-decorator";
import { List } from "./List.vue";
@Component({
  name: "Todo",
})
class Todo extends List {
  toDoToAdd: String = "";

  onAddItem(itemToAddNext: any): void {
    this.itemList.push(itemToAddNext);
    this.toDoToAdd = ""
  }

  onDeleteToDoItem(index: number): void {
    this.itemList.splice(index, 1)
  }

}
export default toNative(Todo);
</script>

<style scoped>

li:hover {
  background-color: lightcoral;
  cursor: pointer;
}
</style>
