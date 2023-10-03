<template>
  <div class="are-you-sure-container">
    <h2>Are you sure?</h2>
    <hr />
    <div style="display: flex; flex-direction: row; justify-content: flex-end;">
      <button class="are-you-sure-button" @click="cancelAreYouSureWindow">
        Cancel
      </button>
      <button class="are-you-sure-button" @click="approveAreYouSureWindow">
        Yes
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Emit, toNative, Vue } from "vue-facing-decorator";

@Component({})
class AreYouSureWindow extends Vue {
  @Emit
  cancelAreYouSureWindow() {
    return "cancelAreYouSureWindow";
  }

  @Emit
  approveAreYouSureWindow() {
    return "approveAreYouSureWindow";
  }
}
export default toNative(AreYouSureWindow);
</script>

<style scoped>
.are-you-sure-container {
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
  -webkit-box-shadow: 2px 6px 15px 5px rgba(0, 0, 0, 0.24);
  box-shadow: 2px 6px 15px 5px rgba(0, 0, 0, 0.14);
  padding: 20px;
  backdrop-filter: blur(10px);
}

.are-you-sure-button {
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

.are-you-sure-button:hover {
  color: rgb(67, 67, 67);
  background: rgb(178, 178, 178);
  border-color: rgb(168, 167, 167);
  cursor: pointer;
}
</style>
