<script setup>
import { ref, reactive, computed } from 'vue'
import ElectronGamePop from '../assets/ElectronGamePop.mp3'

const nowMin = ref(25)
const nowSec = ref(0)
// edit
const editState = ref(false)
const editMin = ref(nowMin.value)
const editSec = ref(nowSec.value)
// pomodoro mode
const pomo = ref(true)
const pomoMin = ref(5)
const pomoSec = ref(0)
// pomodoro edit
const editPomoMin = ref(pomoMin.value)
const editPomoSec = ref(pomoSec.value)

const nowEdit = computed(() => {
  return reactive({
    min: pomo.value
      ? editMin.value
        ? editMin.value
        : 0
      : editPomoMin.value
        ? editPomoMin.value
        : 0,
    sec: pomo.value
      ? editSec.value
        ? editSec.value
        : 0
      : editPomoSec.value
        ? editPomoSec.value
        : 0
  })
})

const updateTime = () => {
  nowMin.value = nowEdit.value.min
  nowSec.value = nowEdit.value.sec
}

const edit = () => {
  if (nowEdit.value.min === 0 && nowEdit.value.sec === 0) {
    console.log('通知訊息 不可為零')
    return
  }
  if (nowEdit.value.min > 100) {
    nowEdit.value.min = parseInt(nowEdit.value.min / 10)
    // 通知訊息 min超過60對身體不好
    pomo.value
      ? editMin.value = nowEdit.value.min
      : editPomoMin.value = nowEdit.value.min
  }
  if (nowEdit.value.sec > 100) {
    nowEdit.value.sec = parseInt(nowEdit.value.sec / 10)
    pomo.value
      ? editSec.value = nowEdit.value.sec
      : editPomoSec.value = nowEdit.value.sec
  }
  if (nowEdit.value.min > 60) {
    nowEdit.value.min = 60
    pomo.value
      ? editMin.value = 60
      : editPomoMin.value = 60
  }
  if (nowEdit.value.sec > 59) {
    nowEdit.value.sec = 59
    pomo.value
      ? editSec.value = 60
      : editPomoSec.value = 60
  }

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
    if (nowSec.value !== 0) {
      nowSec.value--
    } else if (nowMin.value !== 0) {
      nowMin.value--
      nowSec.value = 59
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
  noticeSound()
}

// notification sound
const audio = new Audio(ElectronGamePop)
const noticeSound = () => {
  audio.play()
  setTimeout(function () {
    audio.pause()
    audio.currentTime = 0
  }, 150)
}
</script>

<template>
  <div>
    <div class="time">
      <p>{{ nowMin >= 10 ? nowMin : `0${nowMin}` }}</p>:
      <p>{{ nowSec >= 10 ? nowSec : `0${nowSec}` }}</p>
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
        {{ pomo ? '💤→🍅' : '🍅→💤' }}
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
        if(value<0)value=0;
        " name="" id="" v-model="editMin"
      >
      ：
      <input type="number" oninput="
        if(value.length>2)value=value.slice(0,2);
        if(value>59)value=59;
        if(value<0)value=0;
        " name="" id="" v-model="editSec"
      >
    </div>

    <div class="edit_restTime" v-if="editState">
      <span :class="{pomo:!pomo}" @click="pomo = false">
        💤
      </span>
      <input type="number" oninput="
        if(value.length>2)value=value.slice(0,2);
        if(value>60)value=60;
        if(value<0)value=0;
        " name="" id="" v-model="editPomoMin"
      >
      ：
      <input type="number" oninput="
        if(value.length>2)value=value.slice(0,2);
        if(value>59)value=59;
        if(value<0)value=0;
        " name="" id="" v-model="editPomoSec"
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
    // border-radius: 50%;
    // padding: 0 .4rem;
    width: 9rem;
    line-height: 3.5rem;
    height: auto;
    &:hover {
      background: rgba($text, .4);
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
    &:hover {
      background: rgba($text, .4);
    }
  }
  .pomo {
    background: rgba(yellowgreen, .8);
    &:hover {
      background: rgba(yellowgreen, 1);
    }
  }
}
</style>
