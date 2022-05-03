<script setup>
import { ref, reactive, computed, onMounted } from 'vue'

const inputTodo = reactive({
  done: false,
  delete: false,
  title: '',
  color: '2',
  date: '',
  ID: ''
})

const addTodo = () => {
  if (!inputTodo.title) return
  const date = new Date()
  inputTodo.date = `${date.getMonth() + 1}/${date.getDate()} ${date.getHours()}:${date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes()}`
  inputTodo.ID = date.getTime()
  allList.push(JSON.parse(JSON.stringify(inputTodo)))
  inputTodo.title = ''
  label.value = 'undone'
  localStorage.setItem('todoList', JSON.stringify(allList))
}

const allList = reactive([])
const label = ref('undone')
const undoneList = computed(() =>
  allList.filter(item =>
    item.done === false && item.delete === false))
const completeList = computed(() =>
  allList.filter(item =>
    item.done === true && item.delete === false))

const orderState = ref(false)
const orderMode = () => {
  orderState.value
    ? undoneList.value.sort((a, b) => a.ID - b.ID)
    : undoneList.value.sort((a, b) => a.color - b.color)
  orderState.value = !orderState.value
}

const listCheckItem = ID => {
  allList.forEach(item => { if (item.ID === ID) item.done = !item.done })
  localStorage.setItem('todoList', JSON.stringify(allList))
}

const deleteMode = ref(false)
const showDate = ref(false)

onMounted(() => {
  const todoList = JSON.parse(localStorage.getItem('todoList'))
  todoList.forEach((item, i) => { allList[i] = todoList[i] })
  orderMode()
})
</script>

<template>
  <div>
    <div class="input">
      <input type="text" v-model="inputTodo.title" @keyup.enter="addTodo">
      <select :class="{
          'color_1':inputTodo.color==='1',
          'color_2':inputTodo.color==='2',
          'color_3':inputTodo.color==='3',
          'color_4':inputTodo.color==='4'
        }" name="color" id="color" v-model="inputTodo.color">
        <option class="color_1" value="1">trivia</option>
        <option class="color_2" value="2">routine</option>
        <option class="color_3" value="3">important</option>
        <option class="color_4" value="4">urgent</option>
      </select>
      <button @click="addTodo">↩</button>
    </div>

    <div class="button_group">
      <div>
        <button :class="{'active_button':label==='undone'}" @click="label='undone'">undone</button>
        <button :class="{'active_button':label==='completed'}" @click="label='completed'">completed</button>
      </div>
      <div>
        <button id="orderButton" :class="{'color_3':orderState}" @click="orderMode" v-if="label==='undone'"><i class="fa-solid fa-arrow-down-wide-short"></i></button>
        <button :class="{'active_button':showDate}" @click="showDate=!showDate"><i class="fa-solid fa-clock"></i></button>
        <button :class="{'active_button':deleteMode, 'color_4':deleteMode}" @click="deleteMode=!deleteMode"><i class="fa-solid fa-trash-can"></i></button>
      </div>
    </div>

    <ul v-if="label==='undone'">
      <li v-for="item in undoneList.slice().reverse()" :key="item">
        <input type="checkbox" :checked="item.done" @click="listCheckItem(item.ID)">
        <p :class="{
          'color_1':item.color==='1',
          'color_2':item.color==='2',
          'color_3':item.color==='3',
          'color_4':item.color==='4'
        }">{{ item.title }}</p>
        <span v-if="showDate">{{ item.date }}</span>
        <button v-if="deleteMode" @click="item.delete=true"><i class="fa-solid fa-xmark"></i></button>
        <button v-else class="opacity_button"></button>
      </li>
      <li class="color_grey" v-if="!undoneList[0]">There is nothing</li>
    </ul>

    <ul v-if="label==='completed'">
      <li v-for="item in completeList" :key="item">
        <input type="checkbox" :checked="item.done" @click="listCheckItem(item.ID)">
        <p>{{ item.title }}</p>
        <span v-if="showDate">{{ item.date }}</span>
        <button v-if="deleteMode" @click="item.delete=true"><i class="fa-solid fa-xmark"></i></button>
        <button v-else class="opacity_button"></button>
      </li>
      <li class="color_grey"  v-if="!completeList[0]">There is nothing</li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
.input {
  margin: 2rem;
  display: flex;
  flex-flow: row nowrap;
  border: 2px solid $text;
  border-radius: 15px;
  padding: .25rem;
  input {
    border: none;
    font-size: 1.5rem;
    outline: none;
  }
  select {
    border: none;
    font-size: 1rem;
    outline: none;
    text-align: center;
  }
  button {
    border: none;
    font-size: 1.5rem;
  }
}

.button_group {
  display: flex;
  justify-content: space-between;
  width: 24rem;
  button {
    font-size: 1.2rem;
    border: none;
    padding: .3rem;
    border-radius: 5px 5px 0 0;
    opacity: .5;
    &:hover {
      background: $bk_2;
      i {
        background: $bk_2;
      }
    }
  }
  .active_button {
    border-bottom: none;
    opacity: 1;
    &:hover {
      background: none;
      i {
        background: none;
      }
    }
  }
}

ul {
  padding: 0;
  li {
    display: flex;
    flex-flow: row;
    justify-content: space-around;
    align-items: center;
    font-size: 1.5rem;
    padding: .3rem 1rem;
    width: 24rem;
    input {transform: scale(1.25);}
    p {
      user-select: text;
      cursor: default;
      flex-grow: 5;
      height: 1.8rem;

      width: 15rem;
      overflow:hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      &:hover {
        overflow: visible;
        text-overflow: clip;
      }
    }
    span {
      user-select: text;
      cursor: default;
      font-size: 1rem;
      vertical-align: super;
      flex-grow: 1;
      color: rgb(170, 170, 170);
    }
    button {
      border: none;
      border-radius: 5px;
      padding: .2rem .4rem .15rem .4rem;
      margin-left: .5rem;
      i {
        color: crimson;
      }
      &:hover {
        background: $bk_2;
        i {
          background: $bk_2;
        }
      }
    }
    .opacity_button {
      padding: .15rem .66rem;
      border: none;
      &:hover {
        background: none;
      }
    }
  }
}

.color_1 {color: deepskyblue;}
.color_2 {color: yellowgreen;}
.color_3 {
  color: gold;
  i {
    color: gold;
  }
}
.color_4 {
  color: crimson;
  i {color: crimson;}
}
.color_grey {
  color: grey;
}
#orderButton {
  opacity: 1;
  &:hover {
    background: none;
    i {
      background: none;
    }
  }
}
</style>
