<script setup>
import { ref } from 'vue'

const min = ref(0)
const sec = ref(2)
// edit
const editState = ref(false)
const editMin = ref(min.value)
const editSec = ref(sec.value)
// pomodoro mode
const pomo = ref(true)
const pomoMin = ref(0)
const pomoSec = ref(1)
// pomodoro edit
const editPomoMin = ref(pomoMin.value)
const editPomoSec = ref(pomoSec.value)

const updateTime = () => {
  const nowEditMin = pomo.value ? editMin.value : editPomoMin.value
  const nowEditSec = pomo.value ? editSec.value : editPomoSec.value
  min.value = nowEditMin
  sec.value = nowEditSec
}

const edit = () => {
  let nowEditMin = pomo.value ? editMin.value : editPomoMin.value
  let nowEditSec = pomo.value ? editSec.value : editPomoSec.value
  if (nowEditMin === 0 && nowEditSec === 0) {
    console.log('no')
    // 通知訊息 不可為零
  }
  if (nowEditMin > 100) {
    nowEditMin = parseInt(nowEditMin / 10)
    // 通知訊息 min超過60對身體不好
  }
  if (nowEditSec > 100) nowEditSec = parseInt(nowEditSec / 10)
  if (nowEditMin > 60) nowEditMin = 60
  if (nowEditSec > 59) nowEditSec = 59

  updateTime()
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
      timeUp()
    }
  }
  timer.value = setInterval(countdown, 1000)
  runState.value = true
  resetState.value = true
}

const stop = () => {
  clearInterval(timer.value)
  runState.value = false
}

const reset = () => {
  stop()
  updateTime()
  resetState.value = false
  timeUpState.value = false
}

const timeUpState = ref(false)
const timeUp = () => {
  stop()
  timeUpState.value = true
  pomo.value = !pomo.value
  updateTime()
}
</script>

<template>
  <div>
    <div class="time">
      <p>{{ min >= 10 ? min : `0${min}` }}</p>:
      <p>{{ sec >= 10 ? sec : `0${sec}` }}</p>
    </div>

    <div class="button_group">
      <button @click="run" v-if="!runState && !editState && !timeUpState">
        <i class="fa-solid fa-play"></i>
      </button>
      <button @click="stop" v-if="runState && !editState && !timeUpState">
        <i class="fa-solid fa-pause"></i>
      </button>
      <button @click="reset" v-if="resetState && !timeUpState">
        <i class="fa-solid fa-arrow-rotate-left rotate"></i>
      </button>
      <button @click="reset" v-if="resetState && timeUpState" class="next_pomo">
        {{ pomo ? '🍅' : '💤' }}
      </button>
      <button @click="edit" v-if="!resetState && !editState">
        <i class="fa-solid fa-gear"></i>
      </button>
      <button @click="edit" v-if="!resetState && editState">
        <i class="fa-solid fa-check"></i>
      </button>
    </div>

    <div class="edit_time" v-if="editState">
      <span :class="{pomo:pomo}" @click="pomo = true">
        🍅
      </span>
      <input type="number" oninput="
        if(value.length>2)value=value.slice(0,2);
        if(value>60)value=60;
        if(value<0)value=0" name="" id="" v-model="editMin"
      >
      ：
      <input type="number" oninput="
        if(value.length>2)value=value.slice(0,2);
        if(value>59)value=59;
        if(value<0)value=0" name="" id="" v-model="editSec"
      >
    </div>

    <div class="edit_restTime" v-if="editState">
      <span :class="{pomo:!pomo}" @click="pomo = false">
        💤
      </span>
      <input type="number" oninput="
        if(value.length>2)value=value.slice(0,2);
        if(value>60)value=60;
        if(value<0)value=0" name="" id="" v-model="editPomoMin"
      >
      ：
      <input type="number" oninput="
        if(value.length>2)value=value.slice(0,2);
        if(value>59)value=59;
        if(value<0)value=0" name="" id="" v-model="editPomoSec"
      >
    </div>
  </div>
</template>

<style lang="scss" scoped>
.time {
  margin-top: 3rem;
  display: flex;
  flex-flow: row;
  font-size: 6rem;
}

.button_group {
  width: 100%;
  display: flex;
  flex-flow: row;
  justify-content: space-around;
  margin: 1rem;
  button {
    font-size: 2rem;
    border: none;
    border-radius: 15px;
    padding: .45rem;
    width: 5rem;
    height: 3rem;
    &:hover {
      background: rgba($text, .15);
      i {
        background: rgba($text, 0);
      }
    }
  }
  .rotate {
    transform: rotate(45deg);
    padding-top:2.5px;
    padding-left:2.5px;
  }
  .next_pomo {
    background: rgba($text, .15);
    border-radius: 50%;
    // padding: 0 .4rem;
    line-height: 3.5rem;
    height: auto;
    &:hover {
      background: rgba($text, .6);
    }
  }
}

.edit_time, .edit_restTime {
  display: flex;
  flex-flow: row;
  font-size: 2rem;
  margin-bottom: 1.5rem;
  input {
    font-size: 2rem;
    text-align: center;
    width: 2.5rem;
    padding: .3rem;
    border: none;
    border-radius: 15px;
    outline: none;
    background: rgba($text, .15);
  }
  input[type=number]::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }
  span {
    position: absolute;
    left: 50%;
    transform: translate(-9rem, -.3rem);
    border-radius: 50%;
    padding: 0 .4rem;
    line-height: 3.5rem;
  }
  .pomo {
    background: yellowgreen;
  }
}
</style>
