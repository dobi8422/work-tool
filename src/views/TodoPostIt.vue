<script setup>
import { ref, defineEmits, onMounted } from 'vue'
const emit = defineEmits({ noticeMessage: String })

const channel = ref(['work', 'Channel_1'])
const nowChannel = ref('work')

const changeChannel = item => {
  nowChannel.value = item
}

const editChannelName = ref()
const editChannel = () => {
  if (!editChannelName.value) return
  if (channel.value.indexOf(editChannelName.value) !== -1) {
    emit('noticeMessage', 'Have it already')
    setTimeout(() => emit('noticeMessage', 'Do you want to delete it?'), 2000)
    setTimeout(() => emit('noticeMessage', "Enter ' name_del_del ' to delete it"), 4000)
    setTimeout(() => emit('noticeMessage', ''), 8000)
    return
  }
  if (editChannelName.value.search(/_del_del/) !== -1) {
    console.log(editChannelName.value.search(/_del_del/))
    channel.value.splice(editChannelName.value, 1)
    editChannelName.value = ''
    return
  }
  channel.value.push(editChannelName.value)
  nowChannel.value = editChannelName.value
  editChannelName.value = ''
  // 如何跳脫出 input??
}

// drag component
// const dragState = ref(false)
const dragStart = item => { item.dragState = true }
const dragStop = item => { item.dragState = false }
const drag = item => {
// 只顯示未完成...
}

// work channel data
const postList = ref([])
onMounted(() => {
  const todoList = JSON.parse(localStorage.getItem('todoList'))
  todoList.forEach((item, i) => {
    postList.value[i] = item
    postList.value[i].dragState = false
  })
})
</script>

<template>
  <div>
    <!-- opeartor -->
    <div class="operator">
      <div class="channel_button_group" v-for="(item, index) in channel" :key="index">
        <button class="channel_button" :class="{'channel_active_button':nowChannel===item}" @click="changeChannel(item)">{{ item }}</button>
        <span class="channel_slash">/</span>
      </div>
      <input class="channel_edit_input" @keyup.enter="editChannel" type="text" placeholder="+" v-model="editChannelName">
    </div>
    <h2>{{ nowChannel }}</h2>

    <!-- Brainstorm -->
    <div v-if="nowChannel==='Channel_1'">
      hi
    </div>

    <!-- Working -->
    <div v-if="nowChannel==='work'">
      <div class="post_container" v-for="item in postList" :key="item">
        <div
          @mousedown="dragStart(item)"
          @mousemove="drag(item)"
          @mouseup="dragStop(item)"
          v-if="item.done===true"
        >
          {{ item.title }}{{ item.title }}{{ item.color }}{{ item.date }}{{ item.dragState }}
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.operator {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: row wrap;
  margin-top: 1rem;
  width: 300px;
  .channel_button {
    font-size: 1rem;
    color: $bk_2;
    margin: 0;
    padding: 0;
    border: none;
    &:hover {
      color: $text_1;
    }
  }

  .channel_active_button {
    color: $text;
  }

  .channel_slash {
    color: $bk_2;
    margin-left: .6rem;
    margin-right: .45rem;
  }

  .channel_edit_input{
    cursor: default;
    border: 1px solid transparent;
    border-radius: 15px;
    padding: .2rem .5rem;
    outline: none;
    width: .5rem;
    transition: width .5s;
    &:hover {
      border: 1px solid $bk_2;
    }
    &:focus {
      border: 1px solid $bk_2;
      width: 4rem;
      transition: width .5s;
    }
  }
}
.post_container {
  // background: yellowgreen;
  border: 2px solid $text;
  border-radius: 4px;
  width: 250px;
  height: 250px;
}
</style>
