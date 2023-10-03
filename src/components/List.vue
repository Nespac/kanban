<template>
  <div>
    <ul>
      <li v-for="(item, index) in itemList" :key="index">{{ item }}</li>
    </ul>
    <button @click="onAddItem(itemToAddNext)">add item</button>
    <button @click="onDeleteItem">remove item</button>
  </div>
</template>

<script lang="ts">
import { Component, Vue, toNative } from "vue-facing-decorator";
@Component({
  name: "List"
})
class List extends Vue {
  itemToAddNext = 1;

  itemList: any[] = [];

  setItemToAddNext() {}

  onAddItem(itemToAddNext: any): void {
    this.itemList.push(itemToAddNext);
    this.itemToAddNext += 1;
  }

  onDeleteItem(): void {
    if (this.itemList.length === 0) {
      return
    } else {
      this.itemList.pop();
      this.itemToAddNext -= 1;
    }
  }
}
export { List }
export default toNative(List);
</script>

<style scoped></style>
