<script setup>
import { ref } from 'vue'
// time
const min = ref(0)
const sec = ref(2)
const editState = ref(false)
const editMin = ref(min.value)
const editSec = ref(sec.value)
const edit = () => {
  if (editState.value) {
    // 處理input slice變成的三位數
    if (editMin.value > 100) editMin.value = parseInt(editMin.value / 10)
    if (editSec.value > 100) editSec.value = parseInt(editSec.value / 10)
    min.value = editMin.value
    sec.value = editSec.value
    clearInterval(timer.value)
    runState.value = false
  }
  editState.value = !editState.value
  resetState.value = false
}
// operate
const runState = ref(false)
const resetState = ref(false)
const timer = ref('')
const run = () => {
  const countdown = () => {
    if (sec.value !== 0) {
      sec.value--
    } else if (min.value !== 0) {
      min.value--
      sec.value = 59
    } else {
      clearInterval(timer.value)
    }
  }
  timer.value = setInterval(countdown, 1000)
  runState.value = !runState.value
  resetState.value = true
}
const stop = () => {
  clearInterval(timer.value)
  runState.value = !runState.value
}
const reset = () => {
  clearInterval(timer.value)
  min.value = editMin.value
  sec.value = editSec.value
  runState.value = false
  resetState.value = false
}
</script>

<template>
  <div>
    <h2>Todo</h2>
    <div>
      <button @click="run" v-if="!runState">run</button>
      <button @click="stop" v-else>stop</button>
      <button @click="reset" v-if="resetState">reset</button>
      <button @click="edit">
        {{ !editState ? 'edit' : 'save' }}
      </button>
      <div class="time" v-if="editState">
        <input type="number" oninput="
          if(value.length>2)value=value.slice(0,2);
          if(value>59)value=59;
          if(value<0)value=0" name="" id="" v-model="editMin"
        >
        <input type="number" oninput="
          if(value.length>2)value=value.slice(0,2);
          if(value>59)value=59;
          if(value<0)value=0" name="" id="" v-model="editSec"
        >
      </div>
    </div>
    <div class="time">
      <p>{{ min >= 10 ? min : `0${min}` }}</p>:
      <p>{{ sec >= 10 ? sec : `0${sec}` }}</p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.time {
  display: flex;
  flex-flow: row;
}
</style>
