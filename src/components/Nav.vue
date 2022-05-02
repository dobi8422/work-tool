<script setup>
import { computed, reactive, ref } from 'vue'
import router from '../router.js'

const title = computed(() => router.currentRoute.value.path.substring(1))

const navList = reactive(['/calender', '/todo', '/pomodoro', '/collection'])

const nowNav = ref(0)

const hotkey = e => {
  if (e.shiftKey) {
    switch (e.key) {
      case '<':
        nowNav.value === 0
          ? nowNav.value = navList.length - 1
          : nowNav.value--
        router.push(navList[nowNav.value])
        break
      case '>':
        nowNav.value === navList.length - 1
          ? nowNav.value = 0
          : nowNav.value++
        router.push(navList[nowNav.value])
        break
      case '~':
        router.push('/')
        break
      case '!':
        router.push('/calender')
        break
      case '@':
        router.push('/pomodoro')
        break
      case '#':
        router.push('/todo')
        break
      case '$':
        router.push('/collection')
        break
    }
  }
}
document.addEventListener('keydown', hotkey)
</script>

<template>
  <div>
    <router-link class="tool_group" to="/">
      <i class="fa-solid fa-fish"></i>
      <ul>
        <li>
          <router-link active-class="active-link" to="/calender">
            <i class="fa-solid fa-calendar-days"></i>
          </router-link>
        </li>
        <li>
          <router-link active-class="active-link" to="/todo">
            <i class="fa-solid fa-file-pen"></i>
          </router-link>
        </li>
        <li>
          <router-link active-class="active-link" to="/pomodoro">
            <i class="fa-solid fa-clock"></i>
          </router-link>
        </li>
        <li>
          <router-link active-class="active-link" to="/collection">
            <i class="fa-solid fa-link"></i>
          </router-link>
        </li>
      </ul>
    </router-link>
    <p>{{ title }}</p>
  </div>
</template>

<style lang="scss" scoped>
.tool_group {
  cursor: default;
  font-size: 2rem;
  opacity: 1;
  i {
    padding-right: .3rem;
    border-radius: 50%;
    transform: rotate(0);
    transition: transform .5s ease-out;
  }
  &:hover > i {
    transform: rotate(-23.5deg);
  }

  ul {
    list-style-type: none;
    display: flex;
    justify-content: center;
    border-radius: 5px;
    border: 1px solid $text_1;
    font-size: 1.5rem;

    position: absolute;
    top: 20px;
    left: 50%;
    height: 43px;
    padding: 1rem .5rem .1rem .3rem;
    transform: translate(-50%, .8rem);

    li {
      width: 3rem;
      a {
        opacity: .5;
        padding: .5rem;
        margin: 0 5px;
        &:hover{
          opacity: 1;
        }
      }
      .active-link {
        opacity: 1;
      }
    }
    opacity: 0;
    visibility: hidden;
    transition: opacity .4s, visibility .4s;
  }
  &:hover ul{
    opacity: 1;
    visibility: visible;
    transition: opacity .4s, visibility .4s;
  }
}
div {
  display: flex;
  justify-content: center;
  p {
    font-size: 2rem;
    &:first-letter {
      text-transform: uppercase;
    }
  }
}
</style>
